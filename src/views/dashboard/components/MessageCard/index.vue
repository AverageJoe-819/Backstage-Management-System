<template>
  <el-card class="login-card">
    <div
      slot="header"
      class="clearfix"
    >
      <mallki
        class-name="mallki-text"
        :text="$t('dashboard.logininfo')"
      />

    </div>
    <div>
      <el-table
        :data="list"
        highlight-current-row
        fit
        class="table"
      >
        <el-table-column
          align="center"
          :label="$t('dashboard.id')"
          type="index"
          width="50"
        />

        <el-table-column
          :label="$t('dashboard.ip')"
          width="150"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.ip }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('dashboard.time1')"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.time1 }} min</span>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          :label="$t('dashboard.time2')"
        >
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span>{{ scope.row.time2 }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import { getList } from '@/api/user'
export default {
  components: { Mallki },
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
        this.list = response.data.logininfo
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss" >
.mallki-text {
  font-size: 20px;
  font-weight: bold;
}
.login-card {
  height: 440px;
}
</style>

