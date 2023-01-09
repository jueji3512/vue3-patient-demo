import type { OrderPre, AddressItem } from '@/types/order'
import { request } from '@/utils/request'

// 查询药品订单预支付信息
export const getMedicalOrderPre = (params: { prescriptionId: string }) => {
  return request<OrderPre>('/patient/medicine/order/pre', 'GET', params)
}
// 获取收货地址列表
export const getAddressList = () => {
  return request<AddressItem[]>('/patient/order/address')
}
// 创建药品订单
export const creatMedicalOrder = (data: {
  id: string
  addressId: string
  couponId?: string
}) => {
  return request<{ id: string }>('/patient/medicine/order', 'POST', data)
}
