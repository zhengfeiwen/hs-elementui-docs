import request from '@/utils/request'

export const loadChildren = (url: any, params: any) =>
  request({
    url: url,
    method: 'get',
    params
  })
