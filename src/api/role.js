import request2 from '@/utils/request2'

export function fetchRolesList(params) {
  return request2({
    url: '/Backstage-Management-System/role/list',
    method: 'get',
    params
  })
}

export function adduserList(data) {
  return request2({
    url: '/Backstage-Management-System/role/add',
    method: 'post',
    data
  })
}

export function postuserid(params) {
  return request2({
    url: '/Backstage-Management-System/role/postid',
    method: 'get',
    params
  })
}

export function getdetail(params) {
  return request2({
    url: '/Backstage-Management-System/role/getdetail',
    method: 'get',
    params
  })
}

export function saveredact(data) {
  return request2({
    url: '/Backstage-Management-System/role/saveredact',
    method: 'post',
    data
  })
}

export function deleteuserid(params) {
  return request2({
    url: '/Backstage-Management-System/role/delete',
    method: 'get',
    params
  })
}
