// pages/mainGame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    this.draw();
    document.onkeydown = function (e) {
      fx = sn[1] - sn[0] == (n = [-1, -20, 1, 20][(e || event).keyCode - 37] || fx) ? fx : n
    };
    !function () {
      sn.unshift(n = sn[0] + fx);
      if (sn.indexOf(n, 1) > 0 || n < 0 || n > 399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19)
        return alert("GAME OVER");
      draw(n, "Lime");
      if (n == dz) {
        while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
        draw(dz, "Yellow");
      } else
        draw(sn.pop(), "Black");
      setTimeout(arguments.callee, 130);
    }();
    
  },

   draw:function () {

     var t = 10;
     var ctx = wx.createCanvasContext('can');
     var sn = [42, 41], dz = 43, fx = 1, n;
     ctx.setFillStyle('#666'); //设置颜色

     //绘制图形，显示时的左上角（x,y）坐标，图形的宽高（设置成18可能是因为存在边框）
     ctx.rect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);
     ctx.fill();
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