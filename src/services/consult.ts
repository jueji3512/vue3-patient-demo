import type {
  DoctorPage,
  FollowType,
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  TopDep
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
