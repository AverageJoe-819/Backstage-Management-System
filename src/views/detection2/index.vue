<template>
  <div class="app-container">
    <div class="filter=container">
      <el-input
        v-model="listQuery.name"
        :placeholder="$t('detection2.search')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.status"
        :placeholder="$t('detection2.select')"
        clearable
        style="width: 110px"
        class="filter-item"
      >
        <el-option
          v-for="item in statusOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        {{ $t('detection2.searchbotton') }}
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      style="width:100%;"
      border
      fit
      highlight-current-row
      @sort-change="sortChange"
    >
      <el-table-column
        align="center"
        :label="$t('detection2.id')"
        width="100"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection2.name')"
        width="150"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection2.url')"
        width="150"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.url }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection2.description')"
        width="400"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('detection2.method')"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.method }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('detection2.status')"
        width="80"
        align="center"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>

    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { fetchList } from '@/api/leak'
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
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }, handleFilter() {
      this.listQuery.page = 1
      this.getList()
    }
  }
}
</script>
