// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  getPhoneNumber: function (e) {
    let app = getApp();
    app.globalData.loginInfo.phoneNumber ={
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv
    }
    let data = Object.assign({}, app.globalData.loginInfo )
    if (e.detail.errMsg.includes("ok")){
      wx.request({
        url: 'http://dyhzjbeisen.ceping.com/home/Login ', //仅为示例，并非真实的接口地址
        data: data,
        header: {
          'content-type': 'application/json' // 默认值
        },
        method:"POST",
        success: function (res) {
          console.log(res.data)
          wx.switchTab({
            url: "../index/index"
          })
        }
      })
     
    }
    
  },
  loginByPhoneNum:function(){
    wx.navigateTo({
      url: '../loginByPhoneNum/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.getUserInfo({
      success:function(e){
        let app = getApp();
        app.globalData.userInfo = e.userInfo;
        app.globalData.loginInfo.encryptedData = e.encryptedData;
        app.globalData.loginInfo.iv = e.iv;
        app.globalData.loginInfo.rawData = e.rawData;
        app.globalData.loginInfo.signature = e.signature;
      }
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