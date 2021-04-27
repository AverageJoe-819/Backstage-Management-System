import request from '@/utils/request'

export function getList (params) {
  return request({
    url: '/Backstage-Management-System/blacklist/list',
    method: 'get',
    params
  })
}
