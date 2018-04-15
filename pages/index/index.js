//index.js

import {print,fun} from '../static/test'

var app = getApp();
var that;
var chatListData = [];
var last_view = 'id0';

/*
var testhtml ="<head>恋爱秘籍：如何掌握在微信上与女生聊天的技巧？</head><body><br/><center>微信上和女生没话说？</center><br/><center>一聊天就聊死？</center><br/><center>聊天没有一个流程作为指南？</center><br/><center>怎么聊都约不出来？</center><br/><center>看了N多撩妹高手的聊天记录，自己还是不会和女生聊天的方法？</center><br/><b><i>        相信很多兄弟们，都曾经被以上这些问题困扰过，但是一直得不到相应的解决方案。那么今天，给兄弟们解密微信上和女生聊天的秘籍，让你喜欢的女生喜欢上你！</i></b><br/> <br/>        1，<b>为什么你在微信上和女生没话说？</b><br/> <br/>        很多兄弟说，加了女生的微信，但是不知道微信聊天开场白，总感觉和女生没话说。而这也进一步增加了兄弟们的焦虑心理，甚至放弃追求这个女生的机会。想想，是不是挺可惜的。兄弟们的问题就是：不懂和女生聊天的话题。推荐阅读：和女孩子聊天的1000个话题<br/> <br/>        <b>2，</b><b>一聊天就聊死？</b><br/> <br/>        和女生聊天，三五回合，你就把话题聊死了。妹子只能无奈，主动结束话题，然后跟你说“呵呵”、“洗澡去了”、“朋友来了”、“回聊”，反正就是想和你“拜拜”。不想和你继续聊。<br/> <br/>        那么：到底是什么原因导致，很多兄弟不懂女生，不会聊天呢？关键还是不懂：男性思维和女性思维的差异。<br/> <br/>       <b> 3，聊天没有一个流程作为指南？</b><br/> <br/>        推荐阅读：怎么跟女孩子交流，八个常见问题的应对办法        <br/> <br/>      <b>   4，</b><b>怎么聊都约不出来？</b><br/> <br/>        那是因为你们还不会网聊。<br/><b>        5，看了N多恋爱高手的聊天记录，自己还是不会和女生聊天的方法？</b><br/> <br/>        兄弟们，幻想无数，不如立刻行动。想要真正掌握微信和女生聊天的方法，<b>关键还是需要认真系统学习微信聊天</b><br/></body>"
*/

var testhtml = "<head> 不要再问为何没有女朋友？ 摘抄版</head><body><br/> <br/>你想追女生？你是真的喜欢她吗？你真的常常想著她吗？ <br/> <br/>还是你只是想跟她SC？根本就想摸她的爆乳？ <br/> <br/>不管是什麼都只有你自己最清楚，没错吧？ <br/> <br/>我想告诉你，不要学那些天真偶像剧、还是什麼荒谬浪漫剧情。 <br/> <br/>是要送花？写情书？大声告白？还是有爱大声讲？ <br/> <br/>靠 别傻！女生会被你吓死，还会狠尷尬。 <br/> <br/>你不要以為说什麼：我喜欢你，我想跟你在一起， <br/> <br/>就会有那 50% 的机率。 <br/> <br/>50%？不就有或没有？ <br/> <br/>你做爱不带套会不会怀孕，也是 50% 会 50% 不会。 <br/> <br/>干嘛赌呢？！难道你认為爱情可以拿来赌吗？ <br/> <br/>你是人吧！ <br/> <br/>哪像我是猴子。 <br/> <br/>人总会有感觉，心里总会知道些她对你有没有意思吧？ <br/> <br/>是啦！追女生其实并不困难。 <br/> <br/>只是看你敢不敢而已！ <br/> <br/>像我跟你是朋友， <br/> <br/>為什麼我们会从陌生人到现在这样？ <br/> <br/>自然而然形成的。 <br/> <br/>当然也不是真的自然而然啦， <br/> <br/>是叫你要多约约她，多找点机会在她旁边， <br/> <br/>用行动取代那些讲出来舌头会打结的话。 <br/> <br/>记住，女生是不会跟不喜欢的人出去。 <br/> <br/>不要只有一次、两次，多一点见面就多一点机会。 <br/> <br/>女生真的狠需要安全感。 <br/> <br/>安全感啊，懂不懂？ <br/> <br/>不是像你骑车戴个安全帽就叫有安全感， <br/> <br/>要让她感觉你的诚意、你的稳定、你的可靠， <br/> <br/>你别傻了！ <br/> <br/>千万不要传简讯或写情书， <br/> <br/>对那些 17、18 岁的女生来说，他们可能会觉得狠甜蜜、狠窝心。 <br/> <br/>还好，我字比较丑没写过情书。 <br/> <br/>但当你传的简讯被误认為广告删掉的时候， <br/> <br/>你只有悲剧可以形容。 <br/> <br/>有些女生反应狠激烈， <br/> <br/>当场撕烂你的情书、直接摔爆手机都狠难讲。 <br/> <br/>何必呢？这样做不成情人，也做不成朋友。 <br/> <br/>為什麼就不做点有把握的事情？ <br/> <br/>就把她当朋友一样，关心、问候、体贴。 <br/> <br/>这不难吧？ <br/> <br/>多了解她喜欢什麼、她兴趣是什麼、她讨厌什麼， <br/> <br/>多出去个几趟，多聊个几回，多问候几回。 <br/> <br/>让她感受到你的存在，让她知道你是在追她。 <br/> <br/>如果她并没有厌烦或是把你当低能。 <br/> <br/>那麼恭喜你，你的机率不再是 50% 了，只是多少我也不会算。 <br/> <br/>但如果你这样还追不到，这种女生不要也罢， <br/> <br/>她根本在玩你！ <br/> <br/>她有关心过你吗？ <br/> <br/>是那种真正的关心，好像你爸妈在关心你一样！ <br/> <br/>绝对不是问你吃饱没、还不睡喔，那些对狗都可以问候的屁话。 <br/> <br/>我是说，你是人，感觉得到。 <br/> <br/>时间久一点，不用一个月。 <br/> <br/>对耶，七夕就快到了！是情人节耶！ <br/> <br/>多浪漫啊！买花、买娃娃、买金莎。 <br/> <br/>靠 你疯啦？ <br/> <br/>去看看夜景、看看烟火会不会比较好？ <br/> <br/>好啦，有些女生物质大於感觉。 <br/> <br/>那送她喜欢的一个东西吧，就算是开喜乌龙茶也好， <br/> <br/>让她知道，你是了解她、关心她的。 <br/> <br/>看夜景感觉狠棒吼~ <br/> <br/>但你不要越靠越近，也不要顺手搭她肩膀。 <br/> <br/>人家会以為你是不是有什麼病要爆发， <br/> <br/>你要站在她后面！ <br/> <br/>给她安全感，不是要你帮她戴安全帽， <br/> <br/>而是站在她后面。 <br/> <br/>你可以偷闻她头发香不香。 <br/> <br/>(注：被发现也不要说我讲的。) <br/> <br/>要有互动，你可以问她一些话， <br/> <br/>干 你不要问什麼「夜景好不好看」， <br/> <br/>这连我家连还没上学的小妹都会笑著跟你说「超　好　看」！ <br/> <br/>问她「会不会冷」， (山上毕竟有些寒意。） <br/> <br/>不要管她回答会不会， <br/> <br/>轻轻靠著她，让她感受你的温度。 <br/> <br/>你不要一副想做爱的脸！ <br/> <br/>我跟你说， <br/> <br/>一般女生不会推开你，只要你前戏 (误) 做的够好。 <br/> <br/>既然没推开，观景台有栏杆吧？ <br/> <br/>你的手不要衝动抓著奶不放， <br/> <br/>把手放在栏杆上！ <br/> <br/>把她靠在你怀抱里， <br/> <br/>不是叫你抱她，而是护著她！ <br/> <br/>护啊！懂不懂啊 =_=)凸 <br/> <br/>头不要靠太近， <br/> <br/>女生会剉到，以為你要亲她。 <br/> <br/>哎干 你的眼睛不要老盯著乳沟看！ <br/> <br/>陪她一起看夜景、烟火， <br/> <br/>但也不要都不说话看到太阳都出来了还以為狠浪漫。 <br/> <br/>在她耳朵旁边说几句甜蜜的话， <br/> <br/>不用我教，正常人到青春期应该都有学过。 <br/> <br/>不要说太多，几句就好。 <br/> <br/>「我爱你」、「我喜欢这样的感觉」、 <br/> <br/>「我不会让你孤单」，靠 要你自己想！ <br/> <br/>一句就好，真的一句就好。 <br/> <br/>对啦！前面是说不要跟要追的女生说这种话， <br/> <br/>但是现在你还需要追她吗？ <br/> <br/>她都已经在你怀里了， <br/> <br/>你还告白，她会觉得你怪怪的， <br/> <br/>是不是小时候头撞到石头之类的。 <br/> <br/>都到这里了，不用我再讲了吧？ <br/> <br/>请你好好珍惜她，加油， <br/> <br/>你这傻B。 <br/> <br/>「好了，好了！祝天下有情人，终成父母」<br/> </body>"


var recommends = [
  { "name": "追女孩什么的，三招就够了", "url": "http://www.puahome.com/bbs/pua-98522-1-1.html" },
  { "name": "3种信号暗示这个女生真的喜欢你", "url": "http://www.puahome.com/bbs/pua-110880-1-1.html" },
  { "name": "感情加固的几个心得", "url": "http://www.puahome.com/bbs/pua-110284-1-1.html" },
  { "name": "教你如何摆正你追女孩的心态", "url": "http://www.puahome.com/bbs/pua-81427-1-1.html" },
  { "name": "交女朋友的小技巧 了解女人六大方法", "url": "http://www.puahome.com/bbs/pua-108205-1-1.html" }
]

var articleInfo = {
  'title': "test",
  'content': testhtml,
  'recommends': recommends,
  'type': 'testArticle',
  'id': 123,
  'like': true,
  'dislike': false,
  'likeNum':233,
  'dislikeNum':15
}

Page({
  data: {
    windowHeight: 0,
    toView: 'id0',
    askWord: '',
    userInfo: null,
    openid: null,
    chatList: [],
    itemsMaxLength: 5,
    welcome_start: "这里是CloserLove，帮助你开始、维护、升级一段亲密关系，离你爱的人更近一步。或许你和很多人有相同的疑惑",
    welcome_end: "你还可以在输入框里输入你的疑惑，CloserLove都会尽力为你解答。"
  },
  onLoad: function () {
    that = this
    if (that.data.windowHeight == 0) {
      wx.getSystemInfo({
        success: function (res) {
          that.setData({ windowHeight: res.windowHeight - 65 })
        }
      })
    }
    if (that.data.userInfo == null || that.data.openid == null) {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.request({
              url: 'https://lovelu.site/init',
              data: { 'params': { 'JSCODE': res.code } },
              header: {
                'content-type': 'application/json'
              },
              success: function (res1) {
                that.data.openid = res1.data.open_id;
                wx.getUserInfo({
                  success: function (res2) {
                    that.setData({ userInfo: res2.userInfo });
                    if (chatListData.length == 0) {
                      that.getRes('pool', '1', 0,false,"")
                      //that.showArticle(articleInfo)
                    }
                    else
                      that.setData({ chatList: chatListData, toView: last_view })
                  }
                })
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  },

//用户点击消息列表中的链接
  chooseItem: function (e) {
    let ref = e.target.dataset.ref
    let title = e.target.dataset.title
    console.log("chooseItem")
    console.log(e)
    that.getRes(ref.type, ref.params.id, 0,true,title)
  },

//换一换
  getAnotherBatch: function (e) {
    let index = e.target.dataset.index
    let list_show = []
    if (chatListData[index].list_all.length > that.data.itemsMaxLength) {
      let cnt = chatListData[index].cnt + 1;
      let start = cnt * that.data.itemsMaxLength % chatListData[index].list_all.length;
      let end = start + that.data.itemsMaxLength;
      if (end > chatListData[index].list_all.length) {
        list_show = chatListData[index].list_all.slice(start)
        list_show = list_show.concat(chatListData[index].list_all.slice(0, end - chatListData[index].list_all.length))
      }
      else {
        list_show = chatListData[index].list_all.slice(start, end)
      }
      chatListData[index].cnt = cnt
      chatListData[index].list_show = list_show
      that.setData({ chatList: chatListData })
    }
  },

//用户通过打字发送问题
  sendChat: function (e, callback = that.getRes('query', e.type == "confirm" ? e.detail.value : e.detail.value.input, 0,false," ")) {
    console.log(e)
    console.log('in sendChat')
    that.data.askWord = (e.type == "confirm" ? e.detail.value : e.detail.value.input)
    that.addMessage('r', that.data.askWord, [])
  },

//添加一条消息
  addMessage: function (orientation, text, List) {
    if (text != "") {
      //index  本消息在数组中的索引
      //orientation  l/r，左右
      //text  消息文本
      //time  发送时间，排序的key
      //id    scroll-view自动滚动定位点
      //list_all  所有可点击跳转的选项
      //list_show 当前显示的可点击列表
      //固定一次显示5个可点击
      //cnt：当先滑动窗口下标，从0开始
      let ch = {
        'index': chatListData.length,
        'orientation': orientation,
        'text': text,
        'time': new Date().getTime(),
        'id': 'id' + chatListData.length,
        'list_show': List.slice(0, Math.min(that.data.itemsMaxLength, List.length)),
        'list_all': List,
        'cnt': 0,
      };
      chatListData.push(ch);
      last_view = ch.id;

      if (chatListData.length == 1) {
        let sh = {
          'index': 1,
          'orientation': 'l',
          'text': that.data.welcome_end,
          'time': new Date().getTime(),
          'id': 'id1',
          'list_show': [],
          'list_all': [],
          'cnt': 0
        };
        last_view = sh.id
        chatListData.push(sh);
      }
      that.setData({
        chatList: chatListData,
        askWord: '',
        toView: last_view
      });
    }
  },

//换一换之后的替换
  replaceMessage: function (index, text, List) {
    chatListData[index].text = text
    chatListData[index].List = List
    that.setData({ chatList: chatListData })
  },

  //发送request，获取response,并处理response
  getRes: function (Type, req, num,shouldUserSay,whatUserSay) {
    let requestUrl = '';
    let requestData = {};
    if (Type == "query") {
      if (req === "") return;
      requestUrl = 'https://lovelu.site/QA'
      requestData = {
        'type': Type,
        'open_id': that.data.openid,
        'params': { 'num': num, 'text': req, 'user_info': that.data.userInfo },
      };
    }
    else {
      requestUrl = 'https://lovelu.site/search'
      requestData = {
        'type': Type,
        'open_id': that.data.openid,
        'params': { 'user_info': that.data.userInfo, 'id': req },
      };
    }
    wx.request({
      url: requestUrl,
      data: requestData,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.handleResTime(res.data, shouldUserSay, whatUserSay);
      }
    })
  },

  //处理Response
  handleResTime: function (data, shouldUserSay, whatUserSay) {
    console.log("handleResTime")
    console.log(data)
    if (data.type == 'article') {
      let articleInfo = {
        'title': data.content.title,
        'content': data.content.text,
        'recommends': data.content.feed,
        'type': data.content.likeInfo.type,
        'id': data.content.likeInfo.id,
        'like': data.content.isLike>0?true:false,
        'dislike': data.content.isDislike>0?true:false,
        'likeNum': data.content.like,
        'dislikeNum': data.content.dislike
      }
      that.showArticle(articleInfo)
    } else {
      if (shouldUserSay) {
        that.addMessage('r', whatUserSay, [])
      }
      that.addMessage('l', data.content.title, data.content.items);
    }
  },

//展示文章
  showArticle: function (articleInfo) {
    let url_tmp = '../article/article?openid=' + encodeURIComponent(that.data.openid) +'&&userInfo='+
      encodeURIComponent(that.data.userInfo)+ '&&articleInfo=' + encodeURIComponent(JSON.stringify(articleInfo))
    wx.navigateTo({ url: url_tmp })
  },
})