Page({
  data: {
    cgList: [
      {
        id: 1,
        name: "赛博朋克",
        tag: "场景渲染 · Unreal Engine",
        cover: "/images/thumb/UE5_SaiBo.jpg",
        images: [
          "/images/thumb/UE5_SaiBo.jpg",
          //"/images/big/UE5_SaiBo_1_1.jpg",
          //"/images/big/UE5_SaiBo_1_2.jpg"
        ]
      },
      {
        id: 2,
        name: "赛博重庆",
        tag: "场景渲染 · Unity",
        cover: "/images/thumb/Unity_ChongQing.jpg",
        images: [
          "/images/thumb/Unity_ChongQing169.jpg",
         // "/images/thumb/Unity_ChongQing169.jpg",
        ]
      },
      {
        id: 3,
        name: "室内效果",
        tag: "室内建模 · 模拟办公",
        cover: "/images/thumb/HY_Day1.jpg",
        images: [
          "/images/thumb/HY_Day1.jpg",
         // "/images/thumb/HY_Day1_1.jpg",
         // "/images/thumb/HY_Day1_2.jpg",
          "/images/thumb/HY_Day1_3.jpg",
          "/images/thumb/HY_Day2_1.png"
        ]
      },
      {
        id: 4,
        name: "雪景",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/UE5_XueJing.jpg",
        images: [
          "/images/thumb/UE5_XueJing.jpg"
        ]
      },
      {
        id: 5,
        name: "寂静叶林",
        tag: "建模渲染 · Unreal Engine",
        cover: "/images/thumb/UE_xiaochangjing_1.jpg",
        images: [
          "/images/thumb/UE_xiaochangjing_1.jpg"
        ]
      },
      {
        id: 6,
        name: "江南水乡",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/UE5_JiangNanFengJing.jpg",
        images: [
          "/images/thumb/UE5_JiangNanFengJing.jpg"
        ]
      },
      {
        id: 7,
        name: "火箭发射",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/Ai_HuoJianFaShe2.jpg",
        images: [
          "/images/thumb/Ai_HuoJianFaShe2.jpg"
        ]
      },
      {
        id: 8,
        name: "游戏城市景",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/UE_ChengShi.jpg",
        images: [
          "/images/thumb/UE_ChengShi.jpg"
        ]
      },
      {
        id: 9,
        name: "古墓遗迹",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/UE5_GuMu1.jpg",
        images: [
          "/images/thumb/UE5_XueJing.jpg"
        ]
      },
      {
        id: 10,
        name: "莲花跑车",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/Ai_LianHuaPaoChe.jpg",
        images: [
          "/images/thumb/Ai_LianHuaPaoChe.jpg"
        ]
      },
      {
        id: 11,
        name: "破败神庙",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/UE5_PoMiao.jpg",
        images: [
          "/images/thumb/UE5_PoMiao.jpg"
        ]
      },
      {
        id: 12,
        name: "烛火书屋",
        tag: "场景动画 · unity",
        cover: "/images/thumb/Unity_Night1.jpg",
        images: [
          "/images/thumb/Unity_Night1.jpg"
        ]
      },
      {
        id: 13,
        name: "月光花海",
        tag: "场景动画 · Unreal Engine",
        cover: "/images/thumb/UE5_TianYuan.jpg",
        images: [
          "/images/thumb/UE5_TianYuan.jpg"
        ]
      }
    ]
  },
  previewImage(e) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.cgList[index];
    wx.previewImage({
      current: item.images[0],
      urls: item.images,
      showMenu: false
    });
  }
})