const request = function(options){

  wx.request({
    url: options.url,
    method:options.method || 'get',
    data:options.data,
    success:function(res){
      options.success(res)
    },
    fail:function(error){
      options.fail(error)
    }
  })
}


export default request;