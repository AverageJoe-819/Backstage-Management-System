<template>
  <div
    v-loading="listLoading"
    class="app-container"
  >
    <div class="filter-container">
      <el-form
        ref="ruleForm"
        :inline="true"
        :rules="rules"
        :model="listQuery"
        class="demo-form-inline"
      >
        <el-form-item
          label-width="0"
          prop="ip"
        >
          <el-input
            v-model="listQuery.ip"
            :placeholder="$t('detection1.search')"
            style="width: 200px;
            padding-right:10px"
            class="filter-item"
            clearable
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>
        <el-form-item
          label-width="0"
          prop="url"
          style="margin:0px"
        >
          <el-input
            v-model="listQuery.url"
            :placeholder="$t('detection1.url')"
            style="width: 200px;
            padding-right:10px"
            class="filter-item"
            clearable
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>
        <el-form-item
          label-width="0"
          prop="data"
          style="margin:0px"
        >
          <el-input
            v-model="listQuery.data"
            :placeholder="$t('detection1.data')"
            style="width: 200px;margin-right:10px
            "
            class="filter-item"
            clearable
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>

        <el-select
          v-model="listQuery.status"
          :placeholder="$t('detection1.select')"
          clearable
          style="width: 90px
                  ;
                  padding-right:10px
                  ;
                  padding-bottom:20px"
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

      </el-form>
    </div>

    <el-table
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
        :label="$t('detection1.ip')"
        width="120"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.ip }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection1.url')"
        width="250"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.url }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection1.data')"
        width="150"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.data }}
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
    <el-row>
      <el-col span="12">
        <pagination
          v-show="total>0"
          :total="total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          @pagination="getList"
        />
      </el-col>
      <el-col span="2">
        <report-form />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchIntrusionList } from '@/api/intrusion'
import { validIPAddress, validText, validURL } from '@/utils/validate'
import Pagination from '@/components/Pagination'// 引入分页组件
import ReportForm from './components/ReportForm'

export default {
  components: { Pagination, ReportForm }, // 引入分页组件
  filters: {
    parseTime(value, dateFormat) {
      return value
    },
    statusFilter(status) {
      const statusMap = {
        正常: 'success',
        恶意: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      listLoading: true,
      rules: {
        ip: [
          { validator: this.validate1, trigger: 'blur' }
        ],
        url: [
          { validator: this.validate2, trigger: 'blur' }
        ],
        data: [
          { validator: this.validate3, trigger: 'blur' }
        ]
      },
      total: 0,
      canRun: true,
      listQuery: {
        page: 1, // 当前页码
        limit: 10, // 每页面条目数
        status: undefined,
        ip: undefined,
        data: undefined,
        url: undefined,
        orderBy: undefined,
        orderField: undefined
      },
      statusOptions: ['恶意', '正常']
    }
  },
  created() {
    this.getList()
  },
  methods: {
    debounce(fn, delay) {
      const that = this
      return function() {
        if (that.timer) {
          clearTimeout(that.timer)
        }
        that.timer = setTimeout(fn, delay)
      }
    },
    validate1(rule, value, callback) {
      if (rule.field == 'ip' && Boolean(value)) {
        validIPAddress(value) ? callback() : callback(new Error('输入非法!'))
      } else {
        callback()
      }
    },
    validate2(rule, value, callback) {
      if (rule.field == 'url' && Boolean(value)) {
        validURL(value) ? callback() : callback(new Error('输入非法!'))
      } else {
        callback()
      }
    },
    validate3(rule, value, callback) {
      if (rule.field == 'text' && Boolean(value)) {
        validText(value) ? callback() : callback(new Error('输入非法!'))
      } else {
        callback()
      }
    },
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
      fetchIntrusionList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      if (!this.listLoading) {
        this.$refs.ruleForm.validate((bool) => {
          if (bool) {
            this.listQuery.page = 1
            this.getList()
          }
        })
      }
      // if (!this.canRun) { return }
      // this.canRun = false
      // setTimeout(() => {
      //   this.listQuery.page = 1
      //   this.debounce(this.getList, 1500)()
      //   this.canRun = true
      // }, 500)
    }
  }
}
</script>
