import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/Backstage-Management-System/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/Backstage-Management-System/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/Backstage-Management-System/user/logout',
    method: 'post'
  })
}

export function getList (params) {
  return request({
    url: '/Backstage-Management-System/user/list',
    method: 'get',
    params
  })
}
