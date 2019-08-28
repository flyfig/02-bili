// components/MyTitle/MyTitle.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String,
        value:"bilibili"
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo:{
      avatarUrl:"../../icons/unlogin.png"
    }
  },

  /**
   * 组件的方法列表
   */
  ready: function () { 
    this.initMyTitle();
  },
  methods: {
    getUserInfo: function (e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    initMyTitle: function (e) {
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    }
  }  
})
