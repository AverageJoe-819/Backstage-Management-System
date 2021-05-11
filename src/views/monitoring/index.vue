<template>
  <div class="app-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row>
      <el-col span="8">
        <el-table>
          <el-table-column
            align="center"
            label="危险排名"
            width="100"
            type="index"
          />
          <el-table-column
            align="center"
            label="IP地址"
            width="300"
          >
            <template slot-scope="scope">
              {{ scope.row.role }}
            </template>
          </el-table-column>

        </el-table>
      </el-col>
      <el-col span="4">
        <report-form />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ReportForm from './components/ReportForm'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
const lineChartData = {
  browse: {
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  visit: {
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  visitor: {
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  newvisitor: {
    actualData: [120, 82, 91, 154, 162, 140, 130]
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

