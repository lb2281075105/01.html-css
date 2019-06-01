// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend:[],
    banner:[]
  },
  titleClick(event){
    console.log(event);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:"/home/multidata"
    }).then(res=>{
      console.log(res);
      // 取出数据
      const banner = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setData({
        banner:banner,
        recommend:recommend
      })
    })
  }
})