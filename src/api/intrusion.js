import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/Backstage-Management-System/intrusion/list',
    method: 'get',
    params
  })
}
