<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      style="width: 100%;"
      border
      element-loading-text="Loading"
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        :label="$t('management2.no')"
        width="50"
        type="index"
      />
      <el-table-column
        align="center"
        :label="$t('management2.roles')"
        width="200"
      >
        <template slot-scope="scope">
          {{ scope.row.role }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('management2.username')"
        width="200"
      >
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('management2.description')"
      >
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-popover
            v-model="visible"
            placement="top"
            width="160"
          >
            <p>确定更改用户权限？</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="small"
                type="text"
                @click="ChangeRoles('form')"
              >取消</el-button>
              <el-button
                type="primary"
                size="mini"
                @click="ChangeRoles('form')"
              >确定</el-button>
            </div>
            <el-button
              slot="reference"
              type="primary"
              size="small"
            >编辑</el-button>
          </el-popover>

          <el-button
            type="danger"
            size="small"
            disabled
            @click="handleDelete(scope)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <register-form />
  </div>
</template>

<script>
import { fetchRolesList } from '@/api/role'
import RegisterForm from './components/RegisterForm'

export default {
  components: { RegisterForm },
  data() {
    return {
      list: null,
      listLoading: true,
      visibile: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchRolesList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    ChangeRoles() {
      this.visibile = false
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
