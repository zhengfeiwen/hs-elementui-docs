import request from '@/utils/request'

export const getRightByUserId = (data: any) =>
  request({
    url: '/json/getRightByUserId',
    method: 'post',
    data
  })

export const getOperaRight = (data: any) =>
  request({
    url: '/json/getOperaRight',
    method: 'post',
    data
  })
