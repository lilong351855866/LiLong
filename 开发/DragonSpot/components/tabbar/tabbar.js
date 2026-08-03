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
      wx.reLaunch({
        url: url
      })
    }
  }
})