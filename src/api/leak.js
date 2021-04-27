import request from '@/utils/request'

export function getList (params) {
  return request({
    url: '/Backstage-Management-System/leak/list',
    method: 'get',
    params
  })
}
