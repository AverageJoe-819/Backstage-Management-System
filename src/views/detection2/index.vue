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
        width="50"
      />
      <el-table-column
        label="漏洞名称"
        width="150"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column
        label="存在漏洞的页面"
        width="150"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.page }}
        </template>
      </el-table-column>
      <el-table-column
        label="漏洞描述"
        width="400"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="解决方案"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.method }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="危险等级"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/leak'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        低: 'success',
        中: 'warning',
        高: 'danger'
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
