// pages/mainGame.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
        keycode:0
  },
  draw: function(t, c) {
    var ctx = wx.createCanvasContext('canvas');
    ctx.setFillStyle(c); //设置颜色
    //绘制图形，显示时的左上角（x,y）坐标，图形的宽高（设置成18可能是因为存在边框）
    ctx.fillRect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);
    ctx.draw();
    ctx.save();
    wx.drawCanvas({
      canvasId: 'canvas',
      actions: ctx.getActions(),
      reserve: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var t = getApp().globalData.t;
    var sn = getApp().globalData.sn;
    var dz = getApp().globalData.dz;
    var fx = getApp().globalData.fx;
    var n = getApp().globalData.n;
    var that = this;
    !function () {
      sn.unshift(n = sn[0] + fx);
      if (sn.indexOf(n, 1) > 0 || n < 0 || n > 399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19)
        return wx.showModal("GAME OVER");
      console.log(n);
      that.draw(n, 'red');
      if (n == dz) {
        while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
        that.draw(dz, 'yellow');
      } else {
        that.draw(sn.pop(), 'black');
      }
//重复回调，每次间隔xx毫秒，控制时间快慢
      setTimeout(arguments.callee, 900);

      getApp().globalData.t = t;
      getApp().globalData.sn = sn;
      getApp().globalData.dz = dz;
      getApp().globalData.fx = fx;
      getApp().globalData.n = n;

    }();
  },

  clickDirect: function(event) {
    var t = getApp().globalData.t;
    var sn = getApp().globalData.sn;
    var dz = getApp().globalData.dz;
    var fx = getApp().globalData.fx;
    var n = getApp().globalData.n;
    var that = this;
    console.log(event);
    if (event.currentTarget.id == "upBtn"){
      console.log("up");
      that.keycode = 38;
    } 
    else if (event.currentTarget.id == "leftBtn"){
      console.log("left");
      that.keycode = 37;
    }
    else if (event.currentTarget.id == "rightBtn") {
      console.log("right");
      that.keycode = 39;
    }
    else if (event.currentTarget.id == "downBtn") {
      console.log("down");
      that.keycode = 40;
    }
    fx = sn[1] - sn[0] == (n = [-1, -20, 1, 20][that.keyCode - 37] || fx) ? fx : n;
    console.log(fx);
    getApp().globalData.t = t;
    getApp().globalData.sn = sn;
    getApp().globalData.dz = dz;
    getApp().globalData.fx = fx;
    getApp().globalData.n = n;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    console.log("App-OnShow");
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

})