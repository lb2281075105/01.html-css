// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      // request({
      //   url:'http://123.207.32.32:8000/recommend',
      //   success:function(res){
      //     console.log(res);
      //   },
      //   fail:function(error){

      //   }       
      // })
      // 2.封装网络
    // request({
    //     url:'http://123.207.32.32:8000/recommend'      
    //   }).then(res=>{
    //     console.log(res);
    //   }).catch(error=>{
    //     console.log(error);
    //   })

    // 3.网络封装
    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})