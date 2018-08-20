// pages/material/material.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    materialLists:[{
      id:"m1",
 thumbnail:"https://goss.veer.com/creative/vcg/veer/800water/veer-141940798.jpg",
      title:"一带一路只是学习",
      introduce:"中国政府一带一路知识学习，包含地方大幅度辅导辅导放到放到",
      link:"http://dyhzjbeisen.ceping.com/1.pdf"
    }, {
        id: "m2",
        thumbnail: "https://goss.veer.com/creative/vcg/veer/800water/veer-141940798.jpg",
        title: "一带一路只是学习",
        introduce: "中国政府一带一路知识学习，包含地方大幅度辅导辅导放到放到",
        link: "http://dyhzjbeisen.ceping.com"
      }, {
        id: "m3",
        thumbnail: "https://goss.veer.com/creative/vcg/veer/800water/veer-141940798.jpg",
        title: "一带一路只是学习",
        introduce: "中国政府一带一路知识学习，包含地方大幅度辅导辅导放到放到",
        link: "http://dyhzjbeisen.ceping.com"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    const app=getApp();
    const { TenantId, ActivityId} = app.globalData.commonInfo;
    wx.request({
      url: 'http://dyhzjbeisen.ceping.com/Activity/GetActivityFile ',
      data: { tenantId: TenantId, activityId: ActivityId},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "POST",
      success: function (res) {
        if (res.errMsg =="request:ok"){
          const data = res.data.map(item => {
            return {
              id: item.fileId,
              link: "http://dyhzjbeisen.ceping.com" + item.filePath,
              thumbnail: "http://dyhzjbeisen.ceping.com" + item.fileimg,
              title: item.fileName,
              introduce: item.fileDes
            }
          })

          that.setData({
            materialLists: data
          })
        }
      }
    })
    wx.setNavigationBarTitle({
      title: '资料',
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
    wx.setTabBarItem({
      index: 1,
      iconPath: "images/material1.png",
      selectedIconPath: "images/material1.png",
      text: '资料'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setTabBarItem({
      index: 1,
      iconPath: "images/material.png",
      selectedIconPath: "images/material.png",
      text: '资料'
    })
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