Page({
  data: {
    imgList: [
      { id: 1, name: "Ai_FeiYu" },
      { id: 2, name: "Ai_HuoJianFaShe2" },
      { id: 3, name: "Ai_LianHuaPaoChe" },
      { id: 4, name: "HY_Day1" },
      { id: 5, name: "Maya_XiaoChangJing" },
      { id: 6, name: "UE_ChengShiJ" },
      { id: 7, name: "UE_xiaochangjing_1" },
      { id: 8, name: "UE5_GuMu1" },
      { id: 9, name: "UE5_JiangNanFengJing" },
      { id: 10, name: "UE5_PoMiao" },
      { id: 11, name: "UE5_SaiBo" },
      { id: 12, name: "UE5_TianYuan" },
      { id: 13, name: "UE5_XueJing" },
      { id: 14, name: "Unity_ChongQing" },
      { id: 15, name: "Unity_Night1" }
    ],
    currentImg: {},
    scale: 1,
    x: 0,
    y: 0,
    oldScale: 1,
    oldX: 0,
    oldY: 0,
    touchStartX: 0,
    touchStartY: 0
  },
  onLoad(options) {
    const imgId = Number(options.id)
    const info = this.data.imgList.find(item => item.id === imgId)
    this.setData({
      currentImg: info,
      scale:1,
      x:0,
      y:0
    })
  },
  // 触摸开始
  touchStart(e) {
    if(e.touches.length === 1){
      this.setData({
        touchStartX: e.touches[0].pageX - this.data.x,
        touchStartY: e.touches[0].pageY - this.data.y,
        oldScale: this.data.scale
      })
    }else if(e.touches.length === 2){
      let x1 = e.touches[0].pageX
      let y1 = e.touches[0].pageY
      let x2 = e.touches[1].pageX
      let y2 = e.touches[1].pageY
      let distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
      this.setData({oldDistance:distance})
    }
  },
  // 触摸移动
  touchMove(e) {
    if(e.touches.length === 1){
      let moveX = e.touches[0].pageX - this.data.touchStartX
      let moveY = e.touches[0].pageY - this.data.touchStartY
      this.setData({x:moveX,y:moveY})
    }else if(e.touches.length === 2){
      let x1 = e.touches[0].pageX
      let y1 = e.touches[0].pageY
      let x2 = e.touches[1].pageX
      let y2 = e.touches[1].pageY
      let distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
      let newScale = (distance / this.data.oldDistance) * this.data.oldScale
      // 限制缩放范围 1~4倍
      newScale = Math.max(1, Math.min(4, newScale))
      this.setData({scale:newScale})
    }
  },
  touchEnd(){}
})