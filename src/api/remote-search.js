import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/Backstage-Management-System/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/Backstage-Management-System/transaction/list',
    method: 'get',
    params: query
  })
}
