// pages/detail/detail.js
//https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options&& options.id){
      this.getVideoInfo(options.id);
    }
  },

  getVideoInfo(id){
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+ id ,
      success(res) {
        if (res.data && res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          });

        }
      }
    });
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