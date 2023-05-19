import gulpError from './utils/gulpError';
import Dialog from 'tdesign-miniprogram/dialog/index';
App({
    globalData:{
        token:null
    },
    onLaunch(){
       
        // this.checkLogin(res => {
        //     if (!res.is_login) {
        //       //this.login()
        //       console.log('is_login:', res.is_login)
        //       const dialogConfig = {
        //         context: this,
        //         title: '提示',
        //         content: '您尚未登录，请前往登录',
        //         confirmBtn: '前往登录',
        //         cancelBtn: '暂不登录',
        //       };        
        //       Dialog.confirm(dialogConfig)
        //         .then(() => console.log('点击了确定'))
        //         .catch(() => console.log('点击了取消'))
        //         .finally(() => Dialog.close());
        //     }
        //   })
    },
    onShow() {
        if (gulpError !== 'gulpErrorPlaceHolder') {
            wx.redirectTo({
                url: `/pages/gulp-error/index?gulpError=${gulpError}`,
            });
        }
    },    
});
