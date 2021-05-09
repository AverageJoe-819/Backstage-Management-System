import request from '@/utils/request'

export function fetchMonitoringList(query) {
  return request({
    url: '/Backstage-Management-System/monitoring/list',
    method: 'get',
    params: query
  })
}
