import request from '@/utils/request'

export function fetchLeakList(query) {
  return request({
    url: '/Backstage-Management-System/leak/list',
    method: 'get',
    params: query
  })
}
