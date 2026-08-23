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
    timer: null,

    cardList: [
      {
        label:"虚拟仿真",
        imgIndex:0,
        img:"/images/thumb/HY_Day1.jpg",
        imgs:[
          "/images/thumb/HY_Day1_3.jpg",
          "/images/thumb/HY_Day2_1.jpg",
          "/images/thumb/Unity_Night1.jpg"
        ]
      },
      {
        label:"赛博朋克",
        imgIndex:0,
        img:"/images/thumb/UE5_SaiBo.jpg",
        imgs:[
          "/images/thumb/Unity_ChongQing169.jpg"
        ]
      },
      {
        label:"游戏视觉",
        imgIndex:0,
        img:"/images/thumb/UE5_JiangNanFengJing.jpg",
        imgs:[
          "/images/thumb/UE_ChengShi.jpg",
          "/images/thumb/UE5_GuMu1.jpg",
          "/images/thumb/UE5_XueJing.jpg"
        ]
      },
      {
        label:"实时渲染",
        imgIndex:0,
        img:"/images/thumb/Unity_ChongQing.jpg",
        imgs:[
          "/images/thumb/Unity_ChongQing169.jpg",
          "/images/thumb/Unity_Night1.jpg"
        ]
      }
    ],
    cardTimer:null,

    filmImgList:[
      "/images/thumb/HY_Day1.jpg",
      "/images/thumb/UE5_SaiBo.jpg",
      "/images/thumb/UE5_GuMu1.jpg",
      "/images/thumb/Ai_HuoJianFaShe2.jpg",
      "/images/thumb/Ai_LianHuaPaoChe.jpg",
      "/images/thumb/UE_xiaochangjing_1.jpg",
      "/images/thumb/Unity_ChongQing.jpg"
    ]
  },

  onLoad() {
    this.randomChangeImg()
    const timer = setInterval(() => {
      this.randomChangeImg()
    }, 1400)
    this.setData({ timer })

    const cardTimer = setInterval(()=>{
      this.updateCardImages()
    },1600)
    this.setData({cardTimer})
  },

  randomChangeImg() {
    const idx = Math.floor(Math.random() * this.data.imgList.length)
    this.setData({ currentImg: this.data.imgList[idx] })
  },

  updateCardImages(){
    let list = this.data.cardList
    for(let i=0;i<list.length;i++){
      list[i].imgIndex ++
      if(list[i].imgIndex >= list[i].imgs.length){
        list[i].imgIndex = 0
      }
      list[i].img = list[i].imgs[list[i].imgIndex]
    }
    this.setData({
      cardList:list
    })
  },

  switchToCg() {
    wx.switchTab({
      url: "/pages/cg/cg"
    })
  },

  onUnload() {
    if (this.data.timer) {
      clearInterval(this.data.timer)
    }
    if(this.data.cardTimer){
      clearInterval(this.data.cardTimer)
    }
  }
})
