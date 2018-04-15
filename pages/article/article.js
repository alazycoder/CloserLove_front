'use strict';
import { html2json } from '../../src/html2json';

var that;

Page({
  data: {
    innerHTML: [],
    recommends:[],
    openid:'',
    userInfo:{},
    like_original:false,
    dislike_original:false,
    like_now:false,
    dislike_now:false,
    likeNum:0,
    dislikeNum:0,
    Type:"",
    id: 0
  },
  onLoad: function (options) {
    that = this
    let articleInfo = JSON.parse(decodeURIComponent(options.articleInfo))
    let openID = decodeURIComponent(options.openid)
    let userInfo = decodeURIComponent(options.userInfo)
    console.log(articleInfo)
    that.setData({ 
                   openid: openID,
                   userInfo:userInfo,
                   innerHTML: html2json(articleInfo.content).child,
                   recommends: articleInfo.recommends,
                   Type: articleInfo.type,
                   id: articleInfo.id,
                   like_original:articleInfo.like,
                   like_now: articleInfo.like,
                   dislike_original:articleInfo.dislike,
                   dislike_now: articleInfo.dislike,
                   likeNum:articleInfo.likeNum,
                   dislikeNum:articleInfo.dislikeNum
                   });
  },
  clickRecommend: function (e){
    let ref = e.target.dataset.ref
    let requestUrl = 'https://bjtuacm.org/search'
    let requestData = {
      'type': ref.type,
      'open_id': that.data.openid,
      'params': { 'user_info': that.data.userInfo, 'id': ref.params.id },
    };
    wx.request({
      url: requestUrl,
      data: requestData,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.handleResTime(res.data);
      }
    })
  },
  //处理Response
  handleResTime: function (data) {
      let articleInfo = {
        'title': data.content.title,
        'content': data.content.text,
        'recommends': data.content.feed,
        'type': data.content.likeInfo.type,
        'id': data.content.likeInfo.id,
        'like': data.content.isLike > 0 ? true : false,
        'dislike': data.content.isDislike > 0 ? true : false,
        'likeNum': data.content.like,
        'dislikeNum': data.content.dislike
      }
      that.showArticle(articleInfo)
  },

  //跳转文章
  showArticle: function (articleInfo) {
    let url_tmp = './article?openid=' + encodeURIComponent(that.data.openID) + '&&userInfo=' +
      encodeURIComponent(that.data.userInfo) + '&&articleInfo=' + encodeURIComponent(JSON.stringify(articleInfo))
    let currentPageNumber = getCurrentPages().length
    if(currentPageNumber<9)
      wx.navigateTo({ url: url_tmp })
    else 
      wx.redirectTo({url: url_tmp})
  },

  clickLike: function(e){
    let like_num = that.data.likeNum
    let dislike_num = that.data.dislikeNum
    let like_t = that.data.like_now
    let dislike_t = that.data.dislike_now
    if(like_t==false){
      like_t=true;
      like_num = like_num +1
      if(dislike_t==true){
        dislike_t=false
        dislike_num = dislike_num -1 
      }
    } 
    else{
      like_t=false
      like_num=like_num-1
    }
    that.setData({like_now:like_t,dislike_now:dislike_t,likeNum:like_num,dislikeNum:dislike_num})
  },

  clickDislike: function (e) {
    let like_num = that.data.likeNum
    let dislike_num = that.data.dislikeNum
    let like_t = that.data.like_now
    let dislike_t = that.data.dislike_now
    if (dislike_t == false) {
      dislike_t = true
      dislike_num = dislike_num +1
      if (like_t == true) {
        like_t = false
        like_num = like_num - 1
      }
    }
    else {
      dislike_t = false
      dislike_num = dislike_num -1
    }
    that.setData({ like_now: like_t, dislike_now: dislike_t, likeNum: like_num,dislikeNum:dislike_num })
  },
  
  onUnload: function(){
    let requestUrl=""
    let requestData={}
    if(that.data.like_now!=that.data.like_original){
      requestUrl = 'https://bjtuacm.org/like'
      requestData = {
        'open_id':that.data.openid,
        'type': that.data.like_now?'like':'notlike',
        'params':{
          'type':that.data.Type,
          'id':that.data.id
        }
      }
      wx.request({
        url: requestUrl,
        method: 'POST',
        data: requestData,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log('success', res)
        }
      })
    }
    if (that.data.dislike_now != that.data.dislike_original) {
      requestUrl = 'https://bjtuacm.org/dislike'
      requestData = {
        'open_id': that.data.openid,
        'type': that.data.dislike_now ? 'dislike' : 'notdislike',
        'params': {
          'type': that.data.Type,
          'id': that.data.id
        }
      }
      wx.request({
        url: requestUrl,
        method: 'POST',
        data: requestData,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log('success', res)
        }
      })
    }
  }
})