<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../assets/images/yueliang.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/images/shanchuan.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/images/xiyang.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 9宫格到6宫格改造 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <!-- <span class="mui-icon mui-icon-home"></span> -->
            <img src="../../assets/images/liugongge/zixun.jpg" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/liugongge/fenxiang.jpg" alt="">
            <div class="mui-media-body">图片分享</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/liugongge/shangpin.jpg" alt="">
            <div class="mui-media-body">商品购买</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/liugongge/liuyan.jpg" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/liugongge/shipin.jpg" alt="">
            <div class="mui-media-body">视频专区</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/liugongge/lianxi.jpg" alt="">
            <div class="mui-media-body">联系我们</div>
          </a></li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          imgUrl: '../../assets/images/huihui.png'
        },
        {
          imgUrl: '../../assets/images/shaonv.png'
        }
      ]
    }
  },
  created () {
    this.getLunBoTu();
  },
  methods: {
    getLunBoTu () {
      // this.$http.get('http://vue.studyit.io/api/getlunbo').then(function (res) {
      //   console.log(res.body);
      // }, function () {
      //   console.log('请求失败处理');
      // });
      console.log('调用轮播了');
    }

  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: grey;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>