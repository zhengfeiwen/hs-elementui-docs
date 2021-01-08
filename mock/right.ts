import { Response, Request, NextFunction } from 'express'
import faker from 'faker'

const right = {
  code: 10000,
  message: "success",
  accessRoutes: [
    {
      menuId: '10000000',
      menuName: "安装",
      parentMenuId: '00000000'
    },
    {
      menuId: '10000001',
      menuName: "安装",
      parentMenuId: '00000000'
    },
    {
      menuId: '10000002',
      menuName: "文档",
      parentMenuId: '00000000'
    },
  ],
  userInfo: {
    name: "Tom Ding",
    userId: "00000001",
    phone: "13995277428",
    address: "FuZhou somewhere"
  },
  rpcuser: {
    test: "xxx"
  },
  token: "VUGUHINSASASQASQWSQSHSQNS"
}

export const getRightByUserId = (req: Request, res: Response) => {
  // const { id, sysId, token } = req.params
  return res.json({
    code: 20000,
    data: {
      ...right
    }
  })
}
