//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    globalData:{
      userInfo:null,
      isShowDialog:false
    }
    ,onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl);
      wx.login({
        success: function (res) {
          console.log(res)
          
        }
      });
    }
})