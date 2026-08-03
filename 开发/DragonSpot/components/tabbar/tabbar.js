Component({
  properties: {
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchPage(e) {
      const url = e.currentTarget.dataset.path
      // tab页面必须使用wx.switchTab，官方规范
      wx.switchTab({
        url: url
      })
    }
  }
})