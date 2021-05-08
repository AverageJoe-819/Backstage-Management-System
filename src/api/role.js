import request from '@/utils/request'

export function fetchRolesList(params) {
  return request({
    url: '/Backstage-Management-System/role/list',
    method: 'get',
    params
  })
}
