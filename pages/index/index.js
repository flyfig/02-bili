
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    //首页导航数据
    navList:[{
      text:"首页",
      id:0
    },{
      text:"视频",
      id:1
    },{
      text:"文章",
      id:2
    }],
    //轮播图
    swiperList:[],
    //视频列表数据
    videoList:[]
  },

  /**获取首页的导航数据 */
  getNavList:function(){
    let that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
          if(res.data && res.data.code === 0){
            that.setData({
              navList:res.data.data.navList
            });
           
          }
      }
    });
  },
  /**获取轮播图列表 */
  getSiwperList(){
    
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res) {
        if (res.data && res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          });

        }
      }
    });
  },
  /*获取视频列表 */
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        if(res.data && res.data.code ===0){
          that.setData({
              videoList: res.data.data.videosList
            });
        }
      }
    })
  },
  
  /**设置当前点击的导航下标 */
  activeNav:function(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取首页导航数据
 //   this.getNavList();

    //2.获取轮播图
    this.getSiwperList();

    //3. /*获取视频列表 */
    this.getVideoList();
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