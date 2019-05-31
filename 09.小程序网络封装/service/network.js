
// 1.封装
// const request = function(options){

//   wx.request({
//     url: options.url,
//     method:options.method || 'get',
//     data:options.data,
//     success:function(res){
//       options.success(res)
//     },
//     fail:function(error){
//       options.fail(error)
//     }
//   })
// }



// 2.封装
// const request = function (options) {

//   return new Promise( (resolve,reject)=>{
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data,
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (error) {
//         reject(error)
//       }
//     })
//   }

//   )
// }


// 3.网络封装
const request = function (options) {

  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data,
      success: resolve,
      fail: reject
    })
  }

  )
}

export default request;