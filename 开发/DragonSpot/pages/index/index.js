Page({
  switchTab(e) {
    const path = e.currentTarget.dataset.path
    wx.switchTab({
      url: `/pages/${path}/${path}`
    })
  }
})