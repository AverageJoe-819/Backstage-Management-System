<template>
  <div class="app-container">
    <el-table v-loading="listLoading"
              :data="list"
              element-loading-text="Loading"
              border
              fit
              highlight-current-row>
      <el-table-column align="center"
                       label="序号"
                       type="index"
                       width="50" />
      <el-table-column label="漏洞名称"
                       width="150"
                       align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="存在漏洞的页面"
                       width="150"
                       align="center">
        <template slot-scope="scope">
          {{ scope.row.page }}
        </template>
      </el-table-column>
      <el-table-column label="漏洞描述"
                       width="400"
                       align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column label="解决方案"
                       align="center">
        <template slot-scope="scope">
          {{ scope.row.method }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col"
                       label="危险等级"
                       width="80"
                       align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
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
      list: [{
        name: '跨站点脚本编制',
        description: '可能会窃取或操纵客户会话cookie,它们可能用于模仿合法用户，从而使黑客能够以该用户身份查看或变更用户记录以执行事务',
        page: 'http://www.XXXX.gov.cn/',
        method: '补救方法在于对用户输入进行清理。通过验证用户输入未包含危险字符，便可能防止恶意的用户导致应用程序执行计划外的任务',
        status: '中'
      }, {
        name: '检测到应用程序测试脚本',
        description: '可能',
        page: 'http://www.XXXX.gov.cn/',
        method: '应该',
        status: '高'
      },
      {
        name: 'Apache  AXIS不存在的Java Web Service路径泄露',
        description: '可能',
        page: 'http://www.XXXX.gov.cn/',
        method: '应该',
        status: '低'
      }]
    }
  }
}
</script>
