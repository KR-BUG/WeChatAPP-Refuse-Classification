Page({
  data: {
    cai_liao_array: ['纸张', '塑料', '不锈钢', '铁片','金属','布','电池类','药物类','灯具类','果皮类','菜梗菜叶类','动物骨骼内脏'],
    xing_zhuang_array: ['正方体', '长方体', '圆锥', '圆柱','其他'],
    tu_ya_array: ['有', '无'],
    dang_qian_cai_liao: 'default',
    dang_qian_xin_zhuang: '默认形状',
    dang_qian_tu_ya:'无'
  },
  cai_liao:function (e) {
    var cai_liao = null
    if (e.detail.value == 0) {cai_liao = "纸张"}
    if (e.detail.value == 1) {cai_liao = "塑料"}
    if (e.detail.value == 2) {cai_liao = "不锈钢"}
    if (e.detail.value == 3) {cai_liao = "铁片"}
    if (e.detail.value == 4) {cai_liao = "金属"}
    if (e.detail.value == 5) {cai_liao = "布"}
    if (e.detail.value == 6) {cai_liao = "电池类"}
    if (e.detail.value == 7) {cai_liao = "药物类"}
    if (e.detail.value == 8) {cai_liao = "灯具类"}
    if (e.detail.value == 9) {cai_liao = "果皮类"}
    if (e.detail.value == 10) {cai_liao = "菜梗菜叶"}
    if (e.detail.value == 11) {cai_liao = "动物骨骼内脏"}
    this.setData({
      dang_qian_cai_liao:cai_liao
    })
  },
  bindxingzhuangPickerChange:function (e) {
    var xing_zhuang = null
    if (e.detail.value == 0) {xing_zhuang = "正方体"}
    if (e.detail.value == 1) {xing_zhuang = "长方体"}
    if (e.detail.value == 2) {xing_zhuang = "圆锥"}
    if (e.detail.value == 3) {xing_zhuang = "圆柱"}
    if (e.detail.value == 4) {xing_zhuang = "其他"}
    this.setData({
       dang_qian_xin_zhuang:xing_zhuang
    })
  },
  bindtuyaPickerChange:function (e) {
    var tu_ya = null
    if (e.detail.value == 0) {tu_ya = "有"}
    if (e.detail.value == 1) {tu_ya = "无"}
    this.setData({
      dang_qian_tu_ya:tu_ya
    })
  },
  submit: function (event) {
    if(this.data.dang_qian_cai_liao=='塑料'&&this.data.dang_qian_tu_ya=='无'){
      wx.navigateTo({
        url: '/pages/index4/index4',
         
        
      })
    }else if(this.data.dang_qian_cai_liao=='纸张'){
      wx.navigateTo({
        url:'/pages/index4/index4'

      })
    }else if(this.data.dang_qian_cai_liao=='布'){
      wx.navigateTo({
        url:'/pages/index4/index4'

      })
    }else if(this.data.dang_qian_cai_liao=='金属'){
      wx.navigateTo({
        url: '/pages/index4/index4',
      })
    }else if(this.data.dang_qian_cai_liao=='塑料'&&this.data.dang_qian_tu_ya=='有'){
      wx.navigateTo({
        url: '/pages/有害垃圾/有害垃圾',
      })
    }else if(this.data.dang_qian_cai_liao=='电池类'){
      wx.navigateTo({
        url: '/pages/有害垃圾/有害垃圾',
      })
    }else if(this.data.dang_qian_cai_liao=='药物类'){
      wx.navigateTo({
        url: '/pages/有害垃圾/有害垃圾',
      })
    }else if(this.data.dang_qian_cai_liao=='灯具类'){
      wx.navigateTo({
        url: '/pages/有害垃圾/有害垃圾',
      })
    }else if(this.data.dang_qian_cai_liao=='果皮类'){
      wx.navigateTo({
    url: '/pages/厨余垃圾/厨余垃圾',
      })
    }else if(this.data.dang_qian_cai_liao=='菜梗菜叶类'){
      wx.navigateTo({
        url: '/pages/厨余垃圾/厨余垃圾',
      })
    }else if(this.data.dang_qian_cai_liao==='动物骨骼内脏'){
      wx.navigateTo({
        url: '/pages/厨余垃圾/厨余垃圾',
      })
    }else{
      wx.navigateTo({
        url:'pages/其他垃圾/其他垃圾'
      })
    }

    
    
    // if (){
    //
    // }
    
    // if () {
    //
    // } else if () {
    //
    // } else if () {
    //
    // } else {
    //
    // }
    
    
  }
})
