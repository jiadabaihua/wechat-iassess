// components/ShowUserInfo/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    editUserInfo:function(){
      this.triggerEvent('editUserInfo');
    }
    ,makePhoneCall: function () {
      wx.makePhoneCall({
        phoneNumber: "4006506886"
      })
    }
  }
})
