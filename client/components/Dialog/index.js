// components/Dialog/index.js.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hidden:{
      type:Boolean,
      value:false
    },
    icon:{
      type: String,
      value: ''
    },
    content:{
      type: String,
      value: '哈哈哈'
    },
    btnDescribe:{
      type:Object
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  attached: function () { 
    this.setData({
      hidden:this.properties.hidden
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _closePop:function(){
      this.setData({
        hidden:true
      })
    },
    clickBtn:function(e){
      this.triggerEvent('buttonClick')
    }
  }
})
