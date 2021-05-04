<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.ip"
        :placeholder="$t('detection1.search')"
        style="width: 200px;"
        class="filter-item"
        clearable
        :rules="IPAddressRules"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.status"
        :placeholder="$t('detection1.select')"
        clearable
        style="width: 90px"
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
        {{ $t('detection1.searchbotton') }}
      </el-button>
      <el-checkbox
        v-model="showMiddleware"
        class="filter-item"
        style="margin-left:25px;"
      >
        {{ $t('detection1.middleware') }}
      </el-checkbox>
      <el-checkbox
        v-model="showProtocol"
        class="filter-item"
        style="margin-left:25px;"
      >
        {{ $t('detection1.protocol') }}
      </el-checkbox>

    </div>
    <br>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      style="width:100%;"
      highlight-current-row
      @sort-change="sortChange"
    >
      <el-table-column
        align="center"
        :label="$t('detection1.id')"
        width="95"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection1.content')"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.content }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection1.ip')"
        width="150"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.ip }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="showMiddleware"
        :label="$t('detection1.middleware')"
        width="100"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.middleware }}</span>
        </template>
      </el-table-column>

      <el-table-column
        v-if="showProtocol"
        :label="$t('detection1.protocol')"
        width="100"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.protocol }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('detection1.status')"
        width="100"
        align="center"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="time"
        :label="$t('detection1.time')"
        sortable="custom"
        width="200"
      >
        <template slot-scope="{row}">
          <i class="el-icon-time" />
          <span>{{ row.time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
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
import { fetchList } from '@/api/intrusion'
import { validIPAddress } from '@/utils/validate'
import Pagination from '@/components/Pagination'// 引入分页组件

const validateIPAddress = (rule, value, callback) => {
  if (validIPAddress(value)) { return callback(new Error('输入非法!!!')) } else { callback() }
}

export default {
  components: { Pagination }, // 引入分页组件
  filters: {
    parseTime(value, dateFormat) {
      return value
    },
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
      tableKey: 0,
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1, // 当前页码
        limit: 20, // 每页面条目数
        status: undefined,
        ip: undefined,
        orderBy: undefined,
        orderField: undefined
      },
      statusOptions: ['成功', '失败'],
      showMiddleware: false,
      showProtocol: false,
      IPAddressRules: {
        IPAddress: [{ required: false, trigger: 'blur', valid: validateIPAddress }]
      }

    }
  },
  created() {
    this.getList()
  },
  methods: {
    /**
     * 监听表格排序变化
     * @param { column, prop, order } sortObj
     */
    sortChange(sortObj) {
      this.listQuery.orderField = sortObj.prop
      if (sortObj.order == 'ascending') { // 升序
        this.listQuery.orderBy = 'asc'
      } else if (sortObj.order == 'descending') { // 降序
        this.listQuery.orderBy = 'desc'
      } else { // 默认排序
        this.listQuery.orderBy = undefined
      }
      this.getList()
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    }
  }
}
</script>
