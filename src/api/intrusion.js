import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/Backstage-Management-System/intrusion/list',
    method: 'get',
    params: query
  })
}
