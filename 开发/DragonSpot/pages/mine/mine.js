Page({
  data:{
    showModal:false,
    showAbout:false,
    showGzh:false
  },
  noFunc() {
    wx.showToast({
      title: "功能暂未开放",
      icon: "none"
    })
  },
  //打开关于弹窗
  showAboutModal(){
    this.setData({showAbout:true})
  },
  closeAboutModal(){
    this.setData({showAbout:false})
  },
  //打开公众号弹窗
  showGzhModal(){
    this.setData({showGzh:true})
  },
  closeGzhModal(){
    this.setData({showGzh:false})
  },
  //联系我弹窗
  showContact(){
    this.setData({showModal:true})
  },
  closeModal(){
    this.setData({showModal:false})
  },
  stopEvent(){},
  //预览公众号二维码
  previewGzhCode() {
    wx.previewImage({
      urls: ["/images/qrcode/gzh_qrcode.jpg"],
      current: "/images/qrcode/gzh_qrcode.jpg"
    })
  }
})