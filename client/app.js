//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    globalData:{
      userInfo:null,
      isShowDialog:false,
      loginInfo:{},
      dataList:{},
      isFromHome:false,
      commonInfo:{}
    }
    ,onLaunch: function (e) {
        qcloud.setLoginUrl(config.service.loginUrl);
        
      wx.login({
        success: function (res) {
          let app = getApp();
          app.globalData.loginInfo.code = res.code;
        }
      });
    }
})