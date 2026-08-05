Page({
  data: {
    imgList: [
      "/images/thumb/HY_Day1.jpg",
      "/images/thumb/UE5_SaiBo.jpg",
      "/images/thumb/UE5_GuMu1.jpg",
      "/images/thumb/Ai_HuoJianFaShe2.jpg",
      "/images/thumb/Ai_LianHuaPaoChe.jpg",
      "/images/thumb/UE_xiaochangjing_1.jpg",
      "/images/thumb/Unity_ChongQing.jpg"
    ],
    currentImg: "/images/thumb/HY_Day1.jpg",
    timer: null
  },
  onLoad() {
    this.randomChangeImg()
    const timer = setInterval(() => {
      this.randomChangeImg()
    }, 1400)
    this.setData({ timer })
  },
  randomChangeImg() {
    const idx = Math.floor(Math.random() * this.data.imgList.length)
    this.setData({ currentImg: this.data.imgList[idx] })
  },
  // 卡片点击跳转到CG页面
  switchToCg() {
    wx.switchTab({
      url: "/pages/cg/cg"
    })
  },
  // 页面销毁清除定时器，防止后台轮播耗电
  onUnload() {
    if (this.data.timer) {
      clearInterval(this.data.timer)
    }
  }
})