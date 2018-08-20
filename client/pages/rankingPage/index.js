const app = getApp()
Page({
  onShareAppMessage: function () {

    return {

      title: '排行榜',

      desc: '',

      path: '/pages/rankingPage/index'

    }

  },

  /**
   * 页面的初始数据
   */
  data: {
    showConvas:"none",
    list: [{
      order: 1,
      name: "赵晓霞",
      score: 1024,
      avatar:"http://img1.imgtn.bdimg.com/it/u=2462518178,2654352723&fm=27&gp=0.jpg"
    }, {
      order: 2,
      name: "刘凯",
      score: 986,
      avatar:"http://uploads.xuexila.com/allimg/1703/09364C5P-23.jpg"
    }, {
      order: 3,
      name: "张敏",
      score: 973,
      avatar: "http://uploads.xuexila.com/allimg/1703/09364C5P-23.jpg"
    }, {
      order: 4,
      name: "刘鹏鹏",
      score: 850,
      avatar: "http://uploads.xuexila.com/allimg/1703/09364C5P-23.jpg"
    }]
    , canvasHidden:true
    , shareImgPath:""
  },
  close(){
    this.setData({
      showConvas:"none",
      shareImgPath:"",
      canvasHidden:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  eventDraw() {
    wx.showLoading({
      title: '绘制分享图片中',
      mask: true
    })
    this.setData({
      painting: {
        width: 375,
        height: 555,
        clear: true,
        views: [
          {
            type: 'image',
            url: '/images/bg.png',
            top: 0,
            left: 0,
            width: 375,
            height: 555
          },
          {
            type: 'image',
            url: app.globalData.userInfo && app.globalData.userInfo.avatarUrl || "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epJEPdPqQVgv6D8bojGT4DrGXuEC4Oe0GXs5sMsN4GGpCegTUsBgL9SPJkN9UqC1s0iakjQpwd4h4A/132",
            top: 25,
            left: 160,
            width: 55,
            height: 55
          },
          {
            type: 'text',
            content: app.globalData.userInfo && app.globalData.userInfo.nickName || "焉浪",
            fontSize: 16,
            color: '#fff',
            textAlign: 'left',
            top: 100,
            left: 170,
            bolder: true
          },
          {
            type: 'image',
            url: '/images/b.png',
            top: 170,
            left: 42.5,
            width: 290,
            height: 186
          },
          {
            type: 'image',
            url: '/images/c.png',
            top: 443,
            left: 150,
            width: 68,
            height: 68
          }
        ]
      }
    })
  },
  eventSave() {
    let that=this;
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })

        that.setData({
          showConvas:"none"
        })
      }
    })
  },
  eventGetImage(event) {
    console.log(event)
    wx.hideLoading()
    const { tempFilePath, errMsg } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath,
        showConvas:"block"
      })
    }
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