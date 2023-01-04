import type { KnowledgePage, KnowledgeParams } from '@/types/consult'
import { request } from '@/utils/request'

export const getKnowledgePage = (params: KnowledgeParams) => {
  return request<KnowledgePage>('/patient/home/knowledge', 'GET', params)
}