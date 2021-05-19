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
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
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
      this.setOptions(this.chartData)
    },
    setOptions({ top1Data, TotalData, top2Data, top3Data } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: true
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },

          show: true
        },
        legend: {
          data: ['Total', 'top1', 'top2', 'top3']
        },
        series: [

          {
            name: 'Total',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: TotalData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            name: 'top1', itemStyle: {
              normal: {
                color: '#9F353A',
                lineStyle: {
                  color: '#9F353A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: top1Data,
            markPoint: {
              data: [
                { coord: ['Fri', '21'], name: 'top1', value: '192.168.3.9' }
              ]
            },
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'top2', itemStyle: {
              normal: {
                color: '#D0104C',
                lineStyle: {
                  color: '#D0104C',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: top2Data,
            markPoint: {
              data: [
                {
                  coord: ['Sat', '14'],
                  name: 'top2',
                  value: '192.168.101.61'

                }
              ]
            },
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'top3', itemStyle: {
              normal: {
                color: '#DB4D6D',
                lineStyle: {
                  color: '#DB4D6D',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: top3Data,
            markPoint: {
              data: [
                {
                  coord: ['Thu', '6'],
                  name: 'top3',
                  value: '192.168.1.103'

                }
              ]
            },
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }
        ]
      })
    }
  }
}
</script>
