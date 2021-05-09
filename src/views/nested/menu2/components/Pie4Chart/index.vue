<template>
  <div
    :class="className"
    :style="{height:height,width:width}"
  />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '60%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['超级管理员', '高级管理员', '普通管理员']
        },
        series: [
          {
            name: '各权限管理员账号占比',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 3, name: '超级管理员' },
              { value: 3, name: '高级管理员' },
              { value: 3, name: '普通管理员' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2000
          }
        ]
      })
    }
  }
}
</script>
