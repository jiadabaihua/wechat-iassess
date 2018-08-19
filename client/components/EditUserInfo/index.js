// components/EditUserInfo/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    infoLists:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    sex:0,
    education:0,
    date:"2000-01-01"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindrChangeSex:function(e){
      this.setData({
        sex:e.detail.value
      })
    },
    bindrChangeEducation:function(e){
      this.setData({
        education: e.detail.value
      })
    },
    bindChangeDate:function(e){
      this.setData({ date: e.detail.value});
    }
    , modifyPhone:function(){
      wx.navigateTo({
        url: '../../pages/loginByPhoneNum/index',
      })
    }
    , submit:function(){
      
    }
  }
})
