import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params,
    timeout: 10000
  })
}

export function getListV2(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params,
    timeout: 3000
  })
}
