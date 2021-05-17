<template>
  <div class="app-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row>
      <el-col span="10">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="index"
                           label="序号"
                           align="center"
                           width="50">
          </el-table-column>
          <el-table-column prop="ip"
                           label="IP地址"
                           align="center"
                           width="180">
          </el-table-column>
          <el-table-column prop="visit"
                           align="center"
                           label="访问次数">
          </el-table-column>
          <el-table-column prop="date"
                           align="center"
                           label="时间">
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
    actualData: [27, 32, 37, 35, 29, 24, 41]
  },
  visit: {
    actualData: [6, 7, 8, 7, 6, 5, 4]
  },
  visitor: {
    actualData: [3, 4, 4, 4, 3, 3, 2]
  },
  newvisitor: {
    actualData: [0, 2, 2, 1, 2, 0, 0]
  }
}

export default {
  components: { ReportForm, PanelGroup, LineChart },
  data () {
    return {
      lineChartData: lineChartData.browse,
      tableData: [{
        index: '1',
        ip: '192.168.1.103',
        visit: '5',
        date: '2021-5-17 13:28:11'
      },
      {
        index: '2',
        ip: '192.168.3.9',
        visit: '4',
        date: '2021-5-17 13:38:11'
      },
      {
        index: '3',
        ip: '192.168.1.67',
        visit: '3',
        date: '2021-5-17 13:38:11'
      }, {
        index: '4',
        ip: '192.168.1.67',
        visit: '2',
        date: '2021-5-17 13:38:11'
      }, {
        index: '5',
        ip: '192.168.1.67',
        visit: '1',
        date: '2021-5-17 13:38:11'
      }]
    }
  },
  methods: {
    onSubmit () {
      this.$message('submit!')
    },
    onCancel () {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }, handleSetLineChartData (type) {
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

