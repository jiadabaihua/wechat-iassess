// pages/information/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagTitle:"资料",//页面标题名称
    array:['全部','a','b','d'],
    showSelection:false
  },
  /**
   * 搜索下拉显示隐藏逻辑
   */
  showSearchSelection: function () {
    let that = this;
    this.setData({
      showSelection: !that.data.showSelection
    })
  },
  /**
   * 切换选项逻辑
   */
  switchSelection:function(e){
    let that = this;
    let value = e.currentTarget.dataset.value,newValArr=[];
    if (value !== '全部' ){
      newValArr.push(value, '全部')
    }else{
      newValArr.push(value)
    }
    that.data.array.map(function(item){
      if (item !== value && item !== '全部'){
        newValArr.push(item)
      }
    })
    this.setData({
      array: newValArr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.pagTitle
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