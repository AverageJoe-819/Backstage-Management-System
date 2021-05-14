<template>
  <div
    v-loading="listLoading"
    class="app-container"
  >
    <div class="filter=container">
      <el-form
        ref="ruleForm"
        :inline="true"
        :rules="rules"
        :model="listQuery"
        class="demo-form-inline"
      >
        <el-form-item
          label-width="0"
          prop="name"
          style="margin:0px"
        >
          <el-input
            v-model="listQuery.name"
            :placeholder="$t('detection2.search1')"
            style="width: 200px;
                  padding-bottom:20px"
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
            :placeholder="$t('detection2.search2')"
            style="width: 300px;
                    padding:0px 10px 0px 10px;"
            class="filter-item"
            clearable
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>

        <el-select
          v-model="listQuery.status"
          :placeholder="$t('detection2.select')"
          clearable
          style="width: 120px;
                  padding-right:10px"
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
      </el-form>
    </div>
    <el-table
      :data="list"
      style="width:100%;"
      border
      fit
      highlight-current-row
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
        width="200"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('detection2.url')"
        width="250"
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
import { fetchLeakList } from '@/api/leak'
import { validURL, validText } from '@/utils/validate'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
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
      canRun: true,
      rules: {
        url: [
          { validator: this.validate1, trigger: 'blur' }
        ],
        name: [
          { validator: this.validate2, trigger: 'blur' }
        ]
      },
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
      if (rule.field == 'url' && Boolean(value)) {
        validURL(value) ? callback() : callback(new Error('输入非法!'))
      } else {
        callback()
      }
    },
    validate2(rule, value, callback) {
      if (rule.field == 'text' && Boolean(value)) {
        validText(value) ? callback() : callback(new Error('输入非法!'))
      } else {
        callback()
      }
    },
    getList() {
      this.listLoading = true
      fetchLeakList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
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
