import request from '@/utils/request'

export function fetchIntrusionList(query) {
  return request({
    url: '/Backstage-Management-System/intrusion/list',
    method: 'get',
    params: query
  })
}
