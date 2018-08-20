// components/Card/Card.js
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
    isShowAlert:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showActivityPop:function(){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('showActivityPop', myEventDetail, myEventOption)
    },
    showAlert:function(){
     console.log('ddd')
    },
    bindDateChange(){
      
    }
    , goToRankingPage(){
      this.triggerEvent("goToRankingPage")
    }
  }
})
