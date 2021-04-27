<template>
  <div class="app-container">
    <el-table :data="List"
              style="width: 100%;margin-top:30px;"
              border
              v-loading="listLoading"
              element-loading-text="Loading"
              fit
              highlight-current-row>
      <el-table-column align="center"
                       label="权限"
                       width="200">
        <template slot-scope="scope">
          {{ scope.row.role }}
        </template>
      </el-table-column>
      <el-table-column align="center"
                       label="用户名"
                       width="200">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="center"
                       label="描述">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center"
                       label="操作"
                       width="200">
        <template slot-scope="scope">
          <el-button type="primary"
                     size="small"
                     @click="handleEdit(scope)">
            编辑
          </el-button>
          <el-button type="danger"
                     size="small"
                     @click="handleDelete(scope)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/role'

export default {
  data () {
    return {
      list: null,
      listLoading: true
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
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
}
</style>