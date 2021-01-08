import request from '@/utils/request'

export const getRightByUserId = (data: any) =>
  request({
    url: '/json/getRightByUserId',
    method: 'post',
    data
  })

export const getOperaRightByUserId = (data: any) =>
  request({
    url: '/json/getOperaRightByUserId',
    method: 'post',
    data
  })
