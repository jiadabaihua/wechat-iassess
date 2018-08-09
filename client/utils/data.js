const talkLists = [{
  qid: 'q1',
  finalScore:0,
  mid:'m1',
  mess: '你的朋友最近遇到了点烦心事，向你寻求帮助！Help！',
  analysis:'此时，最佳的做法是表达理解他的焦虑，通过让他回顾以往的情况，帮他意识到任务不是不可完成的，并提供解决问题的思路推动他将关注点放到解决问题上，而不是一味的焦虑。',
  initData: [{
    id: 'q1a1',
    direction: 'left',
    text: '哎，最近很烦'
  }, {
    id: 'q1b1',
    direction: 'right',
    text: '怎么了？最近事情很多嘛？看你总是加班。'
  }, {
    id: 'q1c1',
    direction: 'left',
    text: '现在是10月了，今年的任务刚完成一小半，有些焦虑啊！ '
  }],
  selects: [{
    isCorrect: false,
    id: 'q1s1',
    score:1,
    star:31,
    text: '啊？这么紧迫啊 ！心疼你！',
    dialogText: '如果没有就事论事，只是客套的表示同情，你说还能不能好好聊天了。再试试看别的选择吧'
  }, {
    isCorrect: false,
    id: 'q1s2',
    score:2,
    star: 52,
    text: '虽然听起来还有一些差距，但以你的能力，我相信没问题！',
    dialogText: '肯定他人是值得表扬的！但对方内心默默吐槽：你是不是对谁都说这句话……再想想别的表达方式吧！'
  }, {
    isCorrect: true,
    id: 'q1s3',
    score:3,
    star: 17,
    text: '往年这个时候是什么情况呢，也差不多吧。把还没做的事情按照重要性排列下，定好明确的时间规划，一件件做起来，应该没问题的！',
    dialogText: '赞！不仅安抚了对方焦虑的情绪，还告诉ta解决方案'
  }]
}, {
  qid: 'q2',
  mid: 'm2',
  finalScore: 0,
  mess: '朋友的倾诉尚未结束，继续接招吧！',
  analysis:'表达这种情况确实令人烦恼，帮助对方分析同事不合作的可能原因，促使他去解决问题。',
  initData: [{
    id: 'q2a2',
    direction: 'left',
    text: '除了加班，单位人际关系也让我很头疼！'
  }, {
    id: 'q2b2',
    direction: 'right',
    text: '怎么了？和同事相处出问题了吗？'
  }, {
    id: 'q2c2',
    direction: 'left',
    text: '和同事合作的时候，我一直都积极响应，但他们却跟领导说我什么都没做。'
  }],
  selects: [{
    isCorrect: false,
    id: 'q2s1',
    score:1,
    star: 39,
    text: '啊？你同事怎么都这样，以后别配合他们了！',
    dialogText: '听你这么一“劝”，对方更觉得心里委屈了！思考下别的表达方式吧！'
  }, {
    isCorrect: false,
    id: 'q2s2',
    score:2,
    star: 42,
    text: '别理他们，事情做了，自己问心无愧就好！',
    dialogText: '话虽如此，但你让朋友受了委屈，还继续默默付出，心疼你朋友三秒钟…….试试看别的选择吧！'
  }, {
    isCorrect: true,
    id: 'q2s3',
    score:3,
    star: 19,
    text: '这种事是挺烦心的！是不是沟通出了问题呢？就合作的事情跟同事好好聊下，也和领导反映下你的困惑。',
    dialogText: '棒！朋友感受到了你的关心，觉得心情好一点了！'
  }]
}, {
  qid: 'q3',
  mid: 'm3',
  finalScore: 0,
  mess: '朋友的倾诉尚未结束，继续接招吧！',
  analysis:'提供解决问题的方案，而不是让对方一味地抱怨现况，否则只会诱发更多的消极情绪体验。',
  initData: [{
    id: 'q3a3',
    direction: 'left',
    text: '你说的对！是需要沟通下。'
  }, {
    id: 'q3b3',
    direction: 'right',
    text: '对啊，沟通下说不定情况能好转！'
  }, {
    id: 'q3c3',
    direction: 'left',
    text: '是啊，现在有的同事说是合作，但总把活推给我做，出了问题，就跑来质问我！'
  }],
  selects: [{
    isCorrect: false,
    id: 'q3s1',
    score:1,
    star: 38,
    text: '你同事也太过分了！本职工作都做不好，还好意思质问你！',
    dialogText: '糟糕！听你这么一说，对方又开始烦躁了！尝试下别的安慰方式吧！'
  }, {
    isCorrect: false,
    id: 'q3s2',
    score:2,
    star: 46,
    text: '哎！心疼你！做了这么多事，还受气，太不容易了！',
    dialogText: '对方还是觉得心里委屈，不知道如何是好！换种表达方式看看吧！'
  }, {
    isCorrect: true,
    id: 'q3s3',
    score:3,
    star: 16,
    text: '下次事先分配好各自负责的部分， 各做各的，虽说看重合作，但每个人都要负起责任来。',
    dialogText: '赞！对方觉得你说的很有道理，知道问题要怎么解决了！'
  }]
}]

module.exports = { talkLists}