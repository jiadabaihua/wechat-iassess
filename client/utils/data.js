const talkLists = [{
  qid: 'q1',
  finalScore:0,
  mid:'m1',
  mess: '你的朋友最近遇到了点烦心事，向你寻求帮助！Help！',
  analysis:'此时，最佳的做法是表达同事可能不去的原因，以及可能带来的影响，而不是一味的表达自己的烦躁情绪',
  initData: [{
    id: 'q1a1',
    direction: 'left',
    text: '最近看你在组织活动，你们部门团建吗？'
  }, {
    id: 'q1b1',
    direction: 'right',
    text: '是啊，原定明天一起去爬山，但刚才小李跟我说有事儿不去了！'
  }, {
    id: 'q1c1',
    direction: 'left',
    text: '啊？那现在很麻烦吗？ '
  }],
  selects: [{
    isCorrect: false,
    id: 'q1s1',
    score:1,
    star:31,
    text: '这么晚了，还是我问了他才说，挺不爽的',
    dialogText: '如果只是强调自己的情绪，没有尝试理解其中的原因，自己不高兴，也误解了别人。再试试看别的选择吧！'
  }, {
    isCorrect: false,
    id: 'q1s2',
    score:2,
    star: 52,
    text: '也还好，他也是临时有事儿，但心里还是有点不爽',
    dialogText: '能够先分析原因值得表扬！可以尝试多表达对事件的理解而不是自己的情绪哦！再想想别的表达方式吧！'
  }, {
    isCorrect: true,
    id: 'q1s3',
    score:3,
    star: 17,
    text: '也还好，他也不是故意的，临时不去，肯定有急事儿',
    dialogText: '先尝试分析原因，而不是发泄情绪！'
   
  }]
}, {
  qid: 'q2',
  mid: 'm2',
  finalScore: 0,
  mess: '朋友的倾诉尚未结束，继续接招吧！',
  analysis:'计划被打乱是必然的，但不要让情绪阻碍了行动，事情比较繁琐时，可以尝试暗示自己“都可以克服”，而不是吓唬自己“完蛋了”。',
  initData: [{
    id: 'q2a2',
    direction: 'left',
    text: '这种情况也是挺心烦的，很多计划都打乱了吧？'
  }],
  selects: [{
    isCorrect: false,
    id: 'q2s1',
    score:1,
    star: 39,
    text: '对啊，很多事情都要重新安排，挺烦的',
    dialogText: '尝试下不表达情绪，而是想解决问题的办法！说不定问题很快就迎刃而解了！试试看别的选择吧！'
  }, {
    isCorrect: false,
    id: 'q2s2',
    score:2,
    star: 42,
    text: '也还好，就是要调整计划，事情比较繁琐，有点麻烦啊',
    dialogText: '知道如何行动了，就做起来，事情解决了，焦躁的情绪也就消散了！换一种方式试试吧！'
  }, {
    isCorrect: true,
    id: 'q2s3',
    score:3,
    star: 19,
    text: '我看了下在原有计划上不用做太多的调整，稍微变下就好，时间上也来得及',
    dialogText: '棒！当注意力放在解决问题上时，负面情绪就都烟消云散了！'
  }]
}, {
  qid: 'q3',
  mid: 'm3',
  finalScore: 0,
  mess: '朋友的倾诉尚未结束，继续接招吧！',
  analysis:'当出现会诱发负性情绪的事件时，试着将关注点放在解决问题上，这样就能有效避免情绪对行动的阻力，并能在克服问题的过程中获得积极的情绪体验。',
  initData: [{
    id: 'q3a3',
    direction: 'left',
    text: '计划调整好了就好，组织集体活动是很麻烦，总会有人不满意'
  }],
  selects: [{
    isCorrect: false,
    id: 'q3s1',
    score:1,
    star: 38,
    text: '对啊，很多事情要考虑，这次筹备就花了很长时间，光想想就很烦躁',
    dialogText: '你焦躁的情绪似乎阻碍了你的行动！换个思路试试看！'
  }, {
    isCorrect: false,
    id: 'q3s2',
    score:2,
    star: 46,
    text: '是啊，很多方面都要考虑，也调整很多次，有时候还挺烦躁的！',
    dialogText: '做事情的时候多想想好的一面，行动起来也会更有效率！开心、烦躁都是要完成，为什么不开心的做呢？试试看别的选择吧！'
  }, {
    isCorrect: true,
    id: 'q3s3',
    score:3,
    star: 16,
    text: '对啊，要考虑的很多，但一件件安排也不难！',
    dialogText: '赞！看来你能很好的调节自己的情绪呢！'
  }]
}, {
  qid: 'q1',
  finalScore: 0,
  mid: 'm1',
  mess: '你的朋友最近遇到了点烦心事，向你寻求帮助！Help！',
  analysis: '此时，最佳的做法是表达理解他的焦虑，通过让他回顾以往的情况，帮他意识到任务不是不可完成的，并提供解决问题的思路推动他将关注点放到解决问题上，而不是一味的焦虑。',
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
    score: 1,
    star: 31,
    text: '啊？这么紧迫啊 ！心疼你！',
    dialogText: '如果没有就事论事，只是客套的表示同情，你说还能不能好好聊天了。再试试看别的选择吧'
  }, {
    isCorrect: false,
    id: 'q1s2',
    score: 2,
    star: 52,
    text: '虽然听起来还有一些差距，但以你的能力，我相信没问题！',
    dialogText: '肯定他人是值得表扬的！但对方内心默默吐槽：你是不是对谁都说这句话……再想想别的表达方式吧！'
  }, {
    isCorrect: true,
    id: 'q1s3',
    score: 3,
    star: 17,
    text: '往年这个时候是什么情况呢，也差不多吧。把还没做的事情按照重要性排列下，定好明确的时间规划，一件件做起来，应该没问题的！',
    dialogText: '赞！不仅安抚了对方焦虑的情绪，还告诉ta解决方案'
  }]
}, {
  qid: 'q2',
  mid: 'm2',
  finalScore: 0,
  mess: '朋友的倾诉尚未结束，继续接招吧！',
  analysis: '表达这种情况确实令人烦恼，帮助对方分析同事不合作的可能原因，促使他去解决问题。',
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
    score: 1,
    star: 39,
    text: '啊？你同事怎么都这样，以后别配合他们了！',
    dialogText: '听你这么一“劝”，对方更觉得心里委屈了！思考下别的表达方式吧！'
  }, {
    isCorrect: false,
    id: 'q2s2',
    score: 2,
    star: 42,
    text: '别理他们，事情做了，自己问心无愧就好！',
    dialogText: '话虽如此，但你让朋友受了委屈，还继续默默付出，心疼你朋友三秒钟…….试试看别的选择吧！'
  }, {
    isCorrect: true,
    id: 'q2s3',
    score: 3,
    star: 19,
    text: '这种事是挺烦心的！是不是沟通出了问题呢？就合作的事情跟同事好好聊下，也和领导反映下你的困惑。',
    dialogText: '棒！朋友感受到了你的关心，觉得心情好一点了！'
  }]
}, {
  qid: 'q3',
  mid: 'm3',
  finalScore: 0,
  mess: '朋友的倾诉尚未结束，继续接招吧！',
  analysis: '提供解决问题的方案，而不是让对方一味地抱怨现况，否则只会诱发更多的消极情绪体验。',
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
    score: 1,
    star: 38,
    text: '你同事也太过分了！本职工作都做不好，还好意思质问你！',
    dialogText: '糟糕！听你这么一说，对方又开始烦躁了！尝试下别的安慰方式吧！'
  }, {
    isCorrect: false,
    id: 'q3s2',
    score: 2,
    star: 46,
    text: '哎！心疼你！做了这么多事，还受气，太不容易了！',
    dialogText: '对方还是觉得心里委屈，不知道如何是好！换种表达方式看看吧！'
  }, {
    isCorrect: true,
    id: 'q3s3',
    score: 3,
    star: 16,
    text: '下次事先分配好各自负责的部分， 各做各的，虽说看重合作，但每个人都要负起责任来。',
    dialogText: '赞！对方觉得你说的很有道理，知道问题要怎么解决了！'
  }]
}]

module.exports = { talkLists}