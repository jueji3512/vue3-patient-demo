<script setup lang="ts">
import { useUserStore } from './stores'
import type { User } from './types/user'
import { Button as VanButton } from 'vant'
import { request } from '@/utils/request'

const getUserInfo = async () => {
  const res = await request('/patient/myUser')
  console.log(res)
}

const store = useUserStore()
const login = async () => {
  const res = await request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    password: 'abc12345'
  })
  store.setUser(res.data)
}
</script>

<template>
  <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
  <van-button type="primary" @click="login">登录</van-button>
</template>

<style scoped></style>
