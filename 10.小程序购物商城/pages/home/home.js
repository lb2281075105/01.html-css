// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend:[],
    banner:[],
    currentType:"pop",
    goods:{
      pop: { page: 1, list: [] },
      new: { page: 1, list: [] },
      sell: { page: 1, list: [] }
    }
  },
  titleClick(event){
    console.log(event);
    const index = event.detail.index
    let type = "pop"
    switch(index){
      case 0:
        type="pop"
        break;
      case 1:
        type = "new"
        break;
      case 2:
        type = "sell"
        break;
    }

    this.setData({
      currentType:type
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getBannerAndRecommend()
    this._getHomeGoods()
  },
  _getBannerAndRecommend(){
    // 1.轮播图
    request({
      url: "/home/multidata"
    }).then(res => {
      console.log(res);
      // 取出数据
      const banner = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setData({
        banner: banner,
        recommend: recommend
      })
    })
  },

  _getHomeGoods(){
    this._getGoodsWithType("pop")
    this._getGoodsWithType("new")
    this._getGoodsWithType("sell")
  },
  _getGoodsWithType(type){

    const page = this.data.goods[type].page
    // 2.下面的商品
    request({
      url: "/home/data",
      data: {
        type: type,
        page: page
      }
    }).then(res => {
      console.log(res);
      // 取出数据
      const lists = res.data.data.list
      const goods = this.data.goods
      goods[type].list.push(...lists)
      goods[type].page += 1
      this.setData({
        goods: goods
      })
    })
  }

})