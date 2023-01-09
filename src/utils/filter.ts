import type { IllnessTime } from '@/enums'
import { flagOptions, timeOptions } from '@/services/constants'

// 获取患病时间的文字
export const getIllnessTimeText = (time?: IllnessTime) => {
  return timeOptions.find((item) => item.value === time)?.label
}
// 获取是否就诊的文字
export const getConsultFlagText = (flag?: 0 | 1) => {
  return flagOptions.find((item) => item.value === flag)?.label
}
