<template>
  <div class="app-container">
    <el-button type="primary"
               icon="el-icon-warning"
               size="medium"
               @click="dialogFormVisible = true">举报IP</el-button>

    <el-dialog title="举报IP"
               :visible.sync="dialogFormVisible">
      <el-form ref="form"
               :model="form"
               label-width="120px">
        <el-form-item label="IP地址">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="申诉类型">
          <el-radio-group v-model="form.resource">
            <el-radio label="高危" />
            <el-radio label="疑似" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.desc"
                    type="textarea" />
        </el-form-item>

      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogFormVisible = false">提 交</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

