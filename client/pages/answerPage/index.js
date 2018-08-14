var data = require('../../utils/data.js');
var normalImg ='http://stnew03.beisen.com/ux/landing-site/release/dist/images/3115865b.deition.svg';
var getActiveListObj=function(index){
  index += getApp().globalData.cardIndex==0?0:3;
  console.log(index)
  return {
    qid: data.talkLists[index].qid,
    mid: data.talkLists[index].mid,
    mess: data.talkLists[index].mess,
    lists: data.talkLists[index].initData,
    analysis: data.talkLists[index].analysis
  }
}
let showTalk = (datas, that, isFist, otherdata)=>{
  let num = 0;
  if (isFist) {
    const talk = setInterval(()=>{
      let index = getApp().globalData.cardIndex == 0 ? 0 : 3
      if (num >= datas.lists.length) {
        clearInterval(talk)
      } else {
        let copyData = Object.assign({}, datas)
        copyData.lists = copyData.lists.slice(0, num + 1);
        that.setData({
          talkLists: [copyData],
          selectData: data.talkLists[index].selects,
        })
        num++;
      }
    },1000);
  } else{
    const callback = (isMes)=>{
      let copyData = [].concat(JSON.parse(JSON.stringify(datas))), len = datas.length - 1;
      if (num >= copyData[len].lists.length+1) {
        clearInterval(talk)
      } else {
        
        copyData[len].lists = isMes?[]: copyData[len].lists.slice(0, num );
        let id = isMes ? copyData[len].mid:copyData[len].lists[num-1].id
        let data = Object.assign({}, otherdata, {
          talkLists: copyData,
          toView: id,
        })
        that.setData(data);
      }
      num++
    } ;
    callback(true);
    const talk = setInterval(callback, 1000)
  }

}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    avatarUrl:'',
    toView:'',
    selectedId:'',
    showReviewBtn:false,
    btnDescribe:{
      text:'再选一次',
      baseStyle:'base'
    },
    answerType:0, //0,错误，1正确
    activeQuestionId: data.talkLists[0].qid,
    messBoxHei:'100rpx',
   
    normalImg: normalImg,
    activeSelect: {text:'请选择你的回复',value:''}
    
  },
  sendMessage:function(e){
    const { activeSelect, talkLists, activeQuestionId } = this.data,
          isShowDialog = getApp().globalData.isShowDialog;
    //防抖
    if (!isShowDialog && activeSelect.score){
      getApp().globalData.isShowDialog = true
    }else{
      return;
    }
    talkLists.map(item=>{
      if (item.qid == activeQuestionId){
          item.lists.push(activeSelect);
          item.finalScore = activeSelect.score;
      }
      return item;
    })
    //弹框延迟加载
    setTimeout(()=>{
      getApp().globalData.isShowDialog = false;
      this.setData({
        hidden: activeSelect.score ? false : true,
      })
    },600)
    this.setData({ 
      talkLists: talkLists,
      answerType: activeSelect.iscorrect ? 1 : 0,
      btnDescribe:{
        text: activeSelect.iscorrect ? '继续' : '再选一次',
        baseStyle: activeSelect.iscorrect ? 'base' : 'weaken',
        score: activeSelect.score,
        star: activeSelect.star,
        starIcon: Math.round(activeSelect.star/10)
      },
    });
  },
  showSelectsBox:function(){
    this.setData({ messBoxHei:"400rpx"});
  },
  hideSelectsBox:function(){
    this.setData({ messBoxHei: "100rpx" });
  },
  selectMessage:function(e){
    const data = e.currentTarget.dataset;
    this.setData({
      selectedId: data.id,
      activeSelect: { ...data }
    })
  },
  buttonClick:function(){
    if (this.data.answerType === 1) {
      let index = data.talkLists.findIndex(v => v.qid == this.data.activeQuestionId);
      let nextQuesIndex = index + 1;
      let cardIndex = getApp().globalData.cardIndex == 0 ? 0 : 3;
     
      if (nextQuesIndex >= 3 ){
        this.setData({
          hidden: true,
          showReviewBtn:true,
          messBoxHei: '120rpx'
        })
        return ;
      }
      
      const activeTalkQues = getActiveListObj(nextQuesIndex);
      this.data.talkLists.push(activeTalkQues);
      // this.setData({
      //   talkLists:this.data.talkLists,
      //   activeQuestionId: data.talkLists[nextQuesIndex].qid,
      //   selectData: data.talkLists[nextQuesIndex].selects,
      //   hidden:true,
      //   toView: this.data.activeSelect.id
      // })
      let otherdata = {
        activeQuestionId: data.talkLists[nextQuesIndex + cardIndex].qid,
        selectData: data.talkLists[nextQuesIndex + cardIndex].selects,
        hidden: true,
        messBoxHei: '100rpx',
        activeSelect: { text: '请选择你的回复', value: '' }
      }
      showTalk(this.data.talkLists, this, false, otherdata)
      // this.resetPage();
    }else{
      this.setData({ 
        hidden:true,
        toView:this.data.activeSelect.id
      })
    }
  },
  resetPage:function(){
    this.setData({
      messBoxHei:'100rpx',
      activeSelect: { text: '请选择你的回复', value: '' }
    })
  },
  goToReviewPage:function(){
    let that = this;
    const { summary, testTheme}=this.data;
    wx.setStorage({
      key: 'talkListSnapshot',
      data: that.data.talkLists,
    })
    wx.navigateTo({
      url: `../reviewPage/index?summary=${summary}&testTheme=${testTheme}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      summary: options.summary,
      testTheme: options.testTheme
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    showTalk(getActiveListObj(0),this,true)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})