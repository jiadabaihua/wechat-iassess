let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    phoneNumber: "",
    status: 1,  //1,展示个人信息，2编辑个人信息
    infoLists: [{
      label: '姓名',
      fieldName:'name',
      required: true,
      fieldType: "text"
    }, {
      label: '性别',
      fieldName: 'sex',
      required: true,
      fieldType: "picker",
      mode: "selector",
      source: [{
        value: 0,
        text: "请选择"
      }, {
        value: 1,
        text: "男"
      }, {
        value: 2,
        text: "女"
      }]
    }, {
      label: '出生日期',
      fieldName: 'date',
      required: true,
      fieldType: "picker",
      mode: "date",
      value: "2018.8.18"
    }, {
      label: '学历',
      fieldName: 'education',
      required: true,
      fieldType: "picker",
      mode: "selector",
      source: [{
        value: 0,
        text: "请选择"
      }, {
        value: 1,
        text: "小学"
      }, {
        value: 2,
        text: "初中"
      }, {
        value: 3,
        text: "高中"
      }, {
        value: 4,
        text: "中技（中专/技校/职高）"
      }, {
        value: 5,
        text: "大专"
      }, {
        value: 6,
        text: "本科"
      }, {
        value: 7,
        text: "硕士研究生"
      }, {
        value: 8,
        text: "MBA"
      }, {
        value: 9,
        text: "博士研究生"
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      phoneNumber:app.globalData.commonInfo.PhoneNumber
    })
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },
  editUserInfo: function () {
    this.setData({ status: 2 })
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
    let status = app.globalData.isFromHome ? 2 : 1;
    console.log(app.globalData.isFromHome)
    this.setData({
      status: status
    })
    wx.setTabBarItem({
      index: 2,
      iconPath: "images/mine1.png",
      selectedIconPath: "images/mine1.png",
      text: '我的'
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      status: 1
    })
    wx.setTabBarItem({
      index: 2,
      iconPath: "images/mine.png",
      selectedIconPath: "images/mine.png",
      text: '我的'
    });
    app.globalData.isFromHome=false;
  },
  saveInfoAfter(){
    this.setData({status:1})
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