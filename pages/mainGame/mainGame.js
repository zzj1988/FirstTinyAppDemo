// pages/mainGame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     t : 0,
     sn : [42, 41], 
     dz : 43,
     fx : 1,
     n : 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   var t = this.t;
   var sn = this.sn;
   var dz = this.dz;
   var fx = this.fx;
   var n = this.n;
    // this.draw();
    !function() {
    sn.unshift(n = sn[0] + fx);
    if (sn.indexOf(n, 1) > 0 || n<0||n>399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19)
        return alert("GAME OVER");
    draw(n, '#666');
    if (n == dz) {
        while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
      draw(dz, '#777');
    } else
    {
      draw(sn.pop(), '#888');
    }
    setTimeout(arguments.callee, 130);

      this.t = t;
      this.sn = sn;
      this.dz = dz;
      this.fx = fx;
      this.n = n;
      
    }();
  },

  draw:function (t,c) {
    var t = this.t;
    var sn = this.sn;
    var dz = this.dz;
    var fx = this.fx;
    var n = this.n;

    var ctx = wx.createCanvasContext('canvas');
     ctx.setFillStyle(c); //设置颜色

     //绘制图形，显示时的左上角（x,y）坐标，图形的宽高（设置成18可能是因为存在边框）
     ctx.rect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);
     ctx.fill();
    this.t = t;
    this.sn = sn;
    this.dz = dz;
    this.fx = fx;
    this.n = n;
  },

  clickDirect: function(event) {
    console.log(event);
    var keycode;
    if (event.currentTarget.id == "upBtn"){
      console.log("up");
      keycode = 38;
    } 
    else if (event.currentTarget.id == "leftBtn"){
      console.log("left");
      keycode = 37;
    }
    else if (event.currentTarget.id == "rightBtn") {
      console.log("right");
      keycode = 39;
    }
    else if (event.currentTarget.id == "downBtn") {
      console.log("down");
      keycode = 40;
    }
    this.fx = this.sn[1] - this.sn[0] == (this.n = [-1, -20, 1, 20][keyCode - 37] || this.fx) ? this.fx : this.n;
    console.log(this.fx);
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