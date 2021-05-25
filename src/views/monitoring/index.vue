<template>
  <div
    class="app-container"
    style=""
  >
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row
      id="linechartcontainer"
      style="background-color:#fff;padding:16px 16px 0;margin-bottom:32px;"
    >
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row>
      <report-form />
    </el-row>
  </div>
</template>

<script>
import ReportForm from './components/ReportForm'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
const lineChartData = {
  browse: {
    TotalData: [51, 62, 73, 81, 75, 77, 61],
    top1Data: [0, 6, 0, 41, 51, 18, 15],
    top2Data: [7, 6, 5, 4, 10, 44, 4],
    top3Data: [0, 0, 3, 37, 2, 0, 0]
  },
  visit: {
    TotalData: [23, 26, 28, 31, 27, 30, 24],
    top1Data: [0, 2, 0, 4, 5, 2, 3],
    top2Data: [10, 9, 11, 5, 12, 14, 13],
    top3Data: [0, 0, 1, 2, 1, 0, 0]
  },
  visitor: {
    TotalData: [11, 15, 31, 16, 17, 16, 14],
    top1Data: [0, 0, 0, 0, 0, 0, 0],
    top2Data: [0, 0, 0, 0, 0, 0, 0],
    top3Data: [0, 0, 0, 0, 0, 0, 0]
  },
  newvisitor: {
    TotalData: [0, 2, 2, 1, 2, 0, 0],
    top1Data: [0, 0, 0, 0, 0, 0, 0],
    top2Data: [0, 0, 0, 0, 0, 0, 0],
    top3Data: [0, 0, 0, 0, 0, 0, 0]
  }
}

export default {
  components: { ReportForm, PanelGroup, LineChart },
  data() {
    return {
      lineChartData: lineChartData.browse
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }, handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

