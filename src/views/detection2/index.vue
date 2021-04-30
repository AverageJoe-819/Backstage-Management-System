<template>
  <div class="app-container">
    <div class="filter=container">
      <el-input v-model="listQuery.name"
                placeholder="漏洞名称"
                style="width: 200px;"
                class="filter-item"
                @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.status"
                 placeholder="类型"
                 clearable
                 style="width: 90px"
                 class="filter-item">
        <el-option v-for="item in statusOptions"
                   :key="item"
                   :label="item"
                   :value="item" />
      </el-select>
      <el-button class="filter-item"
                 type="primary"
                 icon="el-icon-search"
                 @click="handleFilter">
        搜索
      </el-button>
    </div>
    <el-table v-loading="listLoading"
              :data="list"
              style="width:100%;"
              border
              fit
              highlight-current-row
              @sort-change="sortChange">
      <el-table-column align="center"
                       label="序号"
                       width="100">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="漏洞名称"
                       width="150"
                       align="center">
        <template slot-scope="{row}">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column label="存在漏洞的页面"
                       width="150"
                       align="center">
        <template slot-scope="{row}">
          {{ row.url }}
        </template>
      </el-table-column>
      <el-table-column label="漏洞描述"
                       width="400"
                       align="center">
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column label="解决方案"
                       align="center">
        <template slot-scope="{row}">
          {{ row.method }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col"
                       label="危险等级"
                       width="80"
                       align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0"
                :total="total"
                :page.sync="listQuery.page"
                :limit.sync="listQuery.limit"
                @pagination="getList" />
  </div>
</template>

<script>
import { fetchList } from '@/api/leak'
export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        低: 'success',
        中: 'warning',
        高: 'danger'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      tablekey: 0,
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1, // 当前页码
        limit: 20, // 每页面条目数
        status: undefined,
        name: undefined
      },
      statusOptions: ['高', '中', '低']
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }, handleFilter () {
      this.listQuery.page = 1
      this.getList()
    }
  }
}
</script>
