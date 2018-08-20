Component({
  /**
   * 组件的属性列表
   */
  properties: {
    infoLists:{
      type:Array
    },
    nickName:{
      type:String
    },
    phoneNumber:{
      type:String
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
    , bindChangeName(e){
      this.setData({ name : e.detail.value });
    }
    , modifyPhone:function(){
      wx.navigateTo({
        url: '../../pages/loginByPhoneNum/index',
      })
    }
    , submit:function(){
      let that=this;
      const { sex, education, date,nickName}=this.data;
      const app =getApp();
      wx.request({
        url: 'http://dyhzjbeisen.ceping.com/Activity/SavePersonInfo ',
        data: Object.assign(app.globalData.commonInfo, {
          Name: nickName,
          Education: education,
          Sex: sex,
          Birthday: date
        }),
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: "POST",
        success: function (res) {
          if (res.errMsg == "request:ok") {
            that.triggerEvent("saveInfoAfter")
          } 
        }
      })
    }
  }
})
