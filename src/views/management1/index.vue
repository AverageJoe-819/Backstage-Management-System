<template>
  <div class="app-container">
    <div class="filter-container">

    </div>
    <el-table row-key="id"
              v-loading="listLoading"
              :data="list"
              border
              element-loading-text="Loading"
              fit
              highlight-current-row
              style="width: 100%;">
      <el-table-column label="序号"
                       type="index"
                       align="center"
                       width="80">

      </el-table-column>
      <el-table-column label="IP地址"
                       align="center"
                       width="150px">
        <template slot-scope="{row}">
          <span>{{ row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column label="处理时间"
                       width="160px"
                       align="center">
        <template slot-scope="{row}">
          <span>{{ row.time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="处理者"
                       width="100px"
                       align="center">
        <template slot-scope="{row}">
          <span>{{ row.handler }}</span>
        </template>
      </el-table-column>
      <el-table-column label="提交者"
                       width="110px"
                       align="center">
        <template slot-scope="{row}">
          <span>{{ row.submitter }}</span>
        </template>
      </el-table-column>
      <el-table-column label="描述"
                       min-width="80px"
                       align="center">
        <template slot-scope="{row}">
          <span>{{ row.descripution }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型"
                       class-name="status-col"
                       align="center"
                       width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status1 | statusFilter">{{ scope.row.status1 }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态"
                       class-name="status-col"
                       width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status2 | statusFilter">
            {{ row.status2 }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       align="center"
                       width="230"
                       class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button v-if="row.status2!='已禁用'"
                     size="mini"
                     type="danger"
                     @click="handleModifyStatus(row,'已禁用')">
            禁用
          </el-button>
          <el-button v-if="row.status2!='已启用'"
                     size="mini"
                     type="success"
                     @click="handleModifyStatus(row,'已启用')">
            启用
          </el-button>
          <el-button v-if="row.status!='deleted'"
                     size="mini"
                     type="danger"
                     @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getList } from '@/api/blacklist'

export default {

  filters: {
    statusFilter (status) {
      const statusMap = {
        已禁用: 'danger',
        已启用: 'success',
        嫌疑: 'warning',
        高危: 'danger'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 20
      },
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }, handleModifyStatus (row, status2) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status2 = status2
    },
    handleDelete (row, index) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
