
import config from './config.js'
// 网络封装
const request = function (options) {

  return new Promise((resolve, reject) => {
    wx.request({
      url: config + options.url,
      method: options.method || 'get',
      data: options.data,
      success: resolve,
      fail: reject
     })
})
}

export default request;