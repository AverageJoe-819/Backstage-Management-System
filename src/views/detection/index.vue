<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      row-key="id"
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
          {{ scope.row.ip }}
        </template>
      </el-table-column>
      <el-table-column
        label="中间件"
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
import { getList } from '@/api/intrusion'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        成功: 'success',
        失败: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
