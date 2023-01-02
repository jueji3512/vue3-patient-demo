import { useUserStore } from '@/stores'
import axios, { type Method } from 'axios'
import router from '@/router'
import { showToast } from 'vant'

type Data<T> = {
  code: number
  message: string
  data: T
}

const baseURL = 'https://consult-api.itheima.net/'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

// axios请求的工具函数，支持设定响应数据类型
const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: object
) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

// 请求拦截器,携带token
instance.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    const headers: any = config.headers
    if (store.user?.token && headers) {
      headers.Authorization = `Bearer ${store.user?.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data?.code !== 10000) {
      showToast(res.data?.message || '业务出错')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    if (err.response.status === 401) {
      // 删除用户信息
      const store = useUserStore()
      store.delUser()
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath }
      })
    }
    return Promise.reject(err)
  }
)

export { baseURL, instance, request }
