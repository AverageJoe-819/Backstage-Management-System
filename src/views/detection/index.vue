<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="序号"
        type="index"
        width="95"
      />
      <el-table-column label="内容">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column
        label="目的IP"
        width="150"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.IP }}
        </template>
      </el-table-column>
      <el-table-column
        label="服务器"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.server }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="协议"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.protocol }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="连接状态"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="time"
        label="时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        成功: 'success',
        draft: 'gray',
        失败: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [{
        content: '今晚打老虎',
        server: 'nginx',
        IP: '192.168.3.103',
        protocol: 'TCP',
        status: '成功',
        time: ' 09 Jan 2020 14:44:32 '
      }, {
        content: '今晚打老虎',
        server: 'nginx',
        IP: '192.168.3.103',
        protocol: 'TCP',
        status: '失败',
        time: ' 09 Jan 2020 14:41:32 '
      }]
    }
  }
}
</script>
