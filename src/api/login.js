import request from '@/utils/request'

// 登陆
export function login (parems) {
  return request({
    url: '/user/login',
    method: 'post',
    params: parems
  })
}

// 退出
export function logout (parems) {
  return request({
    url: '/user/logout',
    method: 'post',
    params: parems
  })
}

// 看教师用户能进那些系统
export function getAllSystemPer (parems) {
  return request({
    url: '/user//getAuthInfo',
    method: 'post',
    params: parems
  })
}
