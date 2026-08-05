Page({
  data:{
    showModal:false,
    showAbout:false
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
  //联系我弹窗
  showContact(){
    this.setData({showModal:true})
  },
  closeModal(){
    this.setData({showModal:false})
  },
  stopEvent(){}
})