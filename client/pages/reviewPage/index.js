var normalImg = 'http://stnew03.beisen.com/ux/landing-site/release/dist/images/3115865b.deition.svg';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    talkLists:[],
    toView:'',
    normalImg: normalImg
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'talkListSnapshot',
      success: function(res) {
        if (res.errMsg == "getStorage:ok"){
          let finalScore = res.data.reduce((a, b) => {
            return a + b.finalScore
          },0)
          let redHeart;
          if (finalScore >= 1 && finalScore<=2){
            redHeart=1;
          } else if (finalScore >= 3 && finalScore<=4){
            redHeart=2;
          } else if (finalScore >= 5 && finalScore<=6){
            redHeart = 3;
          } else if (finalScore >= 7 && finalScore<=8){
            redHeart=4;
          }else{
            redHeart = 5;
          }
          that.setData({
            redHeart: redHeart,
            talkLists: res.data,
            summary: options.summary,
            testTheme: options.testTheme
          })
        }
      },
    })
  },
  gobackToTestList:function(){
    wx.navigateBack({
      delta:1000
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