import request from '@/utils/request'

export function fetchWebsite(query) {
  return request({
    url: '/Backstage-Management-System/website/list',
    method: 'get',
    params: query
  })
}
