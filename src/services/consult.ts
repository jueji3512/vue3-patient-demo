import type {
  DoctorPage,
  FollowType,
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  TopDep,
  Image,
  ConsultOrderPreData,
  ConsultOrderPreParams,
  PartialConsult,
  ConsultOrderItem,
  ConsultOrderListParams,
  ConsultOrderPage
} from '@/types/consult'
import { request } from '@/utils/request'
// 获取资讯列表
export const getKnowledgePage = (params: KnowledgeParams) => {
  return request<KnowledgePage>('/patient/home/knowledge', 'GET', params)
}
// 获取推荐关注的医生列表
export const getDoctorPage = (params: PageParams) => {
  return request<DoctorPage>('/home/page/doc', 'GET', params)
}
// 关注医生
export const followDoctor = (id: string, type: FollowType = 'doc') => {
  return request('/like', 'POST', { id, type })
}
// 获取所有科室
export const getAllDep = () => {
  return request<TopDep[]>('/dep/all')
}
// 上传图片
export const UploadImg = (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  return request<Image>('/upload', 'POST', formData)
}
// 获取支付订单信息
export const getConsultOrderPre = (params: ConsultOrderPreParams) => {
  return request<ConsultOrderPreData>(
    '/patient/consult/order/pre',
    'GET',
    params
  )
}
// 生成订单
export const createConsultOrder = (data: PartialConsult) => {
  return request<{ id: string }>('/patient/consult/order', 'POST', data)
}
// 获取支付地址，其中0为微信，1为支付宝
export const getConsultOrderPayUrl = (params: {
  paymentMethod: 0 | 1
  orderId: string
  payCallback: string
}) => request<{ payUrl: string }>('/patient/consult/pay', 'POST', params)

export const getConsultOrderDetail = (orderId: string) => {
  return request<ConsultOrderItem>('/patient/consult/order/detail', 'GET', {
    orderId
  })
}
// 查看处方
export const getPrescriptionPic = (id: string) => {
  return request<{ url: string }>(`/patient/consult/prescription/${id}`)
}
// 评价问诊
export const evaluateConsultOrder = (data: {
  docId: string
  orderId: string
  score: number
  content: string
  anonymousFlag: 0 | 1
}) => request<{ id: string }>('/patient/order/evaluate', 'POST', data)
// 获取订单列表
export const getConsultOrderList = (params: ConsultOrderListParams) => {
  return request<ConsultOrderPage>('/patient/consult/order/list', 'GET', params)
}
// 取消订单
export const cancelOrder = (id: string) => {
  return request(`/patient/order/cancel/${id}`, 'PUT')
}
// 删除订单
export const deleteOrder = (id: string) => {
  return request(`/patient/order/${id}`, 'DELETE')
}
