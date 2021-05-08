import request from '@/utils/request'

export function fetchBlackList(query) {
  return request({
    url: '/Backstage-Management-System/blacklist/list',
    method: 'get',
    params: query
  })
}
