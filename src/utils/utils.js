/**
 * 获取当前cookie，如果没有则返回空字符串
 * @param name {String} cookie的键
 * @return String
 */
export const getCookieByName = (name) => {
  const cookie = document.cookie
  const cookieArr = cookie.split(';')
  const token = cookieArr.find((item) => item.indexOf(name) !== -1)
  if (token) {
    return token.split('=')[1]
  }
  return ''
}

/**
 * 通过cookie验证是否登录
 * @param isMustLogin 0表示页面不是必须登录页面，1表示页面必须登录后才能访问
 * @param referrerUrl 登录成功后跳转的页面地址
 * @return String
 */
export const getCookieToken = (isMustLogin, referrerUrl) => {
  return window.checkLoginByCookie(isMustLogin, referrerUrl)
}

/**
 * 获取当前cookie存储的订购机场，如果没有则返回空字符串
 * @return String
 */
export const getCookieDeliveryType = () => {
  return getCookieByName('deliveryTypeStrH5')
}

export const formatPrice = (num, ext) => {
  let i
  if (ext < 0) {
    return num
  }
  num = Number(num)
  if (isNaN(num)) {
    num = 0
  }
  let _str = num.toString()
  const _arr = _str.split('.')
  const _int = _arr[0]
  const _flt = _arr[1]
  if (_str.indexOf('.') == -1) {
    /* 找不到小数点，则添加 */
    if (ext == 0) {
      return _str
    }
    let _tmp = ''
    for (i = 0; i < ext; i++) {
      _tmp += '0'
    }
    _str = _str + '.' + _tmp
  } else {
    if (_flt.length == ext) {
      return _int + '.' + _flt
    }
    /* 找得到小数点，则截取 */
    if (_flt.length > ext) {
      _str = _str.substr(0, _str.length - (_flt.length - ext))
      if (ext == 0) {
        _str = _int
      }
    } else {
      for (i = 0; i < ext - _flt.length; i++) {
        _str += '0'
      }
    }
  }
  const _arrTwo = _str.split('.')
  const _intTwo = _arrTwo[0]
  const _fltTwo = _arrTwo[1]
  return _intTwo + '.' + _fltTwo
}
