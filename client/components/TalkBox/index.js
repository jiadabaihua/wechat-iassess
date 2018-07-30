// components/TalkBox/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id:{
      type:String
    },
    userImg:{
      type: String, 
      value: '头像'
    },
    normalImg:{
      type: String,
      value: '头像'
    },
    text:{
      type: String,
      value: '哎，万能的群，谁能帮帮我'
    },
    direction:{
      type: String,
      value: 'left'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    params:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
