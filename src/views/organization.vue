<template>
  <div>
    <div class="content" id="container"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'findOrgan',
    methods: {
      getData() {
        axios.get('http://211.67.177.56:8080/hhdj/user/userInfo.do').then(res => {
          this.initMap()
        })
      },
      initMap () {
        const BMap = window.BMap
        let map = new BMap.Map("container");          // 创建地图实例
        let point = new BMap.Point(116.404, 39.915)  // 创建点坐标
        let zhupoint = new BMap.Point(114.02, 32.98)
        let yangpoint = new BMap.Point(112.44, 34.7)
        map.centerAndZoom(point, 5);
        map.addControl(new BMap.OverviewMapControl())
        map.addControl(new BMap.NavigationControl({
          anchor: window.BMAP_ANCHOR_TOP_LEFT
        }))
        let marker = new BMap.Marker(point)
        map.addOverlay(marker)
        let zhumarker = new BMap.Marker(zhupoint)        // 创建标注
        map.addOverlay(zhumarker)
        let yangmarker = new BMap.Marker(yangpoint)
        let yanglabel  = new BMap.Label("信息工程学院党委办公室电话9999999",{position:yangpoint})
        map.addOverlay(yanglabel)
        map.addOverlay(yangmarker)
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: .1rem;
    text-align: center;
    font-size: .34rem;
    line-height: 2;
    color: #fff;
    background: #c50206;

    .icon {
      font-size: .38rem;
    }
  }
  .content {
    margin-top: .96rem;
    width: 7.5rem;
    height: 12.4rem;
    font-size: 0;
  }
</style>
