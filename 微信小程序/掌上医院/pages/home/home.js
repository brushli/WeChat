// pages/home/home.js
import Dialog from 'tdesign-miniprogram/dialog/index';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 1,
        autoplay: true,
        duration: 500,
        interval: 5000,
        value: 'label_1',
        list: [
          { value: 'label_1', label: '首页', icon: 'home' },
          { value: 'label_3', label: '消息', icon: 'chat' },
          { value: 'label_4', label: '我的', icon: 'user' },
        ],
        imageCdn :'https://tdesign.gtimg.com/miniprogram/images',
        swiperList : [
            "https://tdesign.gtimg.com/miniprogram/images/swiper1.png",
            "https://tdesign.gtimg.com/miniprogram/images/swiper2.png",
            "https://tdesign.gtimg.com/miniprogram/images/swiper1.png",
            "https://tdesign.gtimg.com/miniprogram/images/swiper2.png",
            "https://tdesign.gtimg.com/miniprogram/images/swiper1.png",
          ],
        hospitalLogo: 'https://tdesign.gtimg.com/miniprogram/images/image1.jpeg',
        notice_visible: true,        
        notice_content: ['君不见', '高堂明镜悲白发', '朝如青丝暮成雪', '人生得意须尽欢', '莫使金樽空对月'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.checkLogin((res)=>{
            if(!res.is_login) {
                const dialogConfig = {
                    context: this,
                    title: '提示',
                    content: '您尚未登录，请前往登录',
                    confirmBtn: '前往登录',
                    cancelBtn: '暂不登录',
                  };  
                Dialog.confirm(dialogConfig)
                .then(() => wx.navigateTo({
                  url: '/pages/login/login',
                }))
                .catch((err) => console.log(err))
                .finally(() => Dialog.close());
            }
        })        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    onTabChange(e) {
        this.setData({
          value: e.detail.value,
        });
    },
    checkLogin: function (callback) {
        callback({
                  is_login: true
                })
        // var token = this.globalData.token
        // if (!token) {
        //   //从数据缓存中获取token
        //   token = wx.getStorageSync('token')
        //   if (token) {
        //     this.globalData.token = token;
        //   } else {
        //     callback({
        //       is_login: false
        //     })
        //     return
        //   }
        // }
        // wx.request({
        //   url: 'http://127.0.0.1:3000/checklogin',
        //   data: {
        //     token: token
        //   },
        //   success: res => {
        //     callback({
        //       is_login: res.data.is_login
        //     })
        //   }
        // })
      },
})