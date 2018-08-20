// components/RankList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    order:{
      type:Number
    },
    name:{
      type:String
    },
    score:{
      type:Number
    },
    avatar:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    level:"",
    canvasHidden:true
  },
  attached() {
    this.setData({
      level:`../../images/0${this.properties.order}.svg`
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
