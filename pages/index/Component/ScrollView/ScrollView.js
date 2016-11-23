//ScrollView.js
//这里的方法可以用来控制自己想要显示的样式，或者不写这些方法，
//显示默认在.wxml中设计的样式
var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  // //数据交互
  // data: {
  //   toView: 'green'
  // },
  // //三个输出语句，当滑动的时候进行输出
  // //最上面
  // upper: function(e) {
  //   console.log(e)
  // },
  // //最下面
  // lower: function(e) {
  //   console.log(e)
  // },
  // //滑动中
  // scroll: function(e) {
  //   console.log(e)
  // },

  // scrollToTop: function(e) {
  //   this.setAction({
  //     scrollTop: 0
  //   })
  // },

  // //下面的方法没有调用
  // tap: function(e) {
  //   for (var i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1],
  //         scrollTop: (i + 1) * 200
  //       })
  //       break
  //     }
  //   }
  // },
  // tapMove: function(e) {
  //   this.setData({
  //     scrollTop: this.data.scrollTop + 10
  //   })
  // }
})