const randomToken = function () {
  return Math.random().toString(36).substr(2, 5) + new Date().getTime() + Math.random().toString(36).substr(2, 6)
}

export const createToken = () => randomToken()
