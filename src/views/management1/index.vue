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
            clearable
            :placeholder="$t('management1.ip')"
            style="width: 200px;"
            class="filter-item"
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>
        <el-select
          v-model="listQuery.status1"
          :placeholder="$t('management1.status1')"
          clearable
          style="width: 100px;
          padding-left:10px;
          padding-right:10px;
          padding-bottom:20px"
          class="filter-item"
        >
          <el-option
            v-for="item in status1Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select
          v-model="listQuery.status2"
          :placeholder="$t('management1.status2')"
          clearable
          class="filter-item"
          style="width: 100px
                  ;
                  padding-right:10px"
        >
          <el-option
            v-for="item in status2Options"
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
          {{ $t('management1.search') }}
        </el-button>
        <el-checkbox
          v-model="showHandler"
          class="filter-item"
          style="margin-left:25px;"
        >
          {{ $t('management1.handler') }}
        </el-checkbox>
        <el-checkbox
          v-model="showsubmmiter"
          class="filter-item"
          style="margin-left:25px;"
        >
          {{ $t('management1.submmiter') }}
        </el-checkbox>
      </el-form>
    </div>
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column
        :label="$t('management1.id')"
        align="center"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('management1.ip')"
        align="center"
        width="150px"
      >
        <template slot-scope="{row}">
          <span>{{ row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('management1.time')"
        width="160px"
        prop="time"
        sortable="custom"
        align="center"
      >
        <template slot-scope="{row}">
          <i class="el-icon-time" />
          <span>{{ row.time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showHandler"
        :label="$t('management1.handler')"
        width="100px"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.handler }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showsubmmiter"
        :label="$t('management1.submmiter')"
        width="100px"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.submitter }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('management1.description')"
        min-width="80px"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('management1.status1')"
        class-name="status-col"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status1 | status1Filter">{{ scope.row.status1 }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('management1.status2')"
        class-name="status-col"
        align="center"
        width="100"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status2 | status2Filter">
            {{ row.status2 }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('management1.operation')"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row,$index}">
          <el-button
            v-if="row.status2!='已禁用'"
            size="mini"
            type="danger"
            @click="handleModifyStatus(row,'已禁用')"
          >
            禁用
          </el-button>
          <el-button
            v-if="row.status2!='已启用'"
            size="mini"
            type="success"
            @click="handleModifyStatus(row,'已启用')"
          >
            启用
          </el-button>
          <el-button
            v-if="row.status!='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row,$index)"
          >
            删除
          </el-button>
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
import { fetchBlackList } from '@/api/blacklist'
import Pagination from '@/components/Pagination'
import { validIPAddress } from '@/utils/validate'

export default {
  components: { Pagination },
  filters: {
    parseTime(value, dateFormat) { // 添加时间管道
      return value
    },
    status1Filter(status1) {
      const status1Map = {

        嫌疑: 'warning',
        高危: 'danger'
      }
      return status1Map[status1]
    },
    status2Filter(status2) {
      const status2Map = {
        已禁用: 'danger',
        已启用: 'success'
      }
      return status2Map[status2]
    }
  },
  data() {
    return {
      tablekey: 0,
      rules: {
        ip: [
          { validator: this.validate, trigger: 'blur' }
        ]
      },
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        status1: undefined,
        status2: undefined,
        ip: undefined,
        orderBy: undefined,
        orderField: undefined
      },
      status1Options: ['高危', '嫌疑'],
      status2Options: ['已禁用', '已启用'],
      showHandler: false,
      showsubmmiter: false
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
    validate(rule, value, callback) {
      if (rule.field == 'ip' && Boolean(value)) {
        validIPAddress(value) ? callback() : callback(new Error('输入非法!'))
      } else {
        callback()
      }
    },
    getList() {
      this.listLoading = true
      fetchBlackList(this.listQuery).then(response => {
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
    },
    handleModifyStatus(row, status2) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status2 = status2
    },
    handleDelete(row, index) {
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
