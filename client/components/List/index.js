// components/List/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id:{
      type:String
    }
    , thumbnail:{
      type:String
    }
    , title:{
      type:String
    }
    , introduce:{
      type:String
    }
    ,link:{
      type:String
    }
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
    jumpToDetail: function (data) {
      wx.navigateTo({
        url: "../../pages/link/index?link=" + data.currentTarget.dataset.link
      })
    },
  }
})
