Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activityInfo:{
      type:String,
      value:''
    },
    isShow: {
      type: Boolean,
      value: ''
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
    close:function(){
      this.setData({
        isShow:false
      })
    }
  }
})
