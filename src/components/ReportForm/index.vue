<template>
  <div class="app-container"
       align='center'>
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
        <el-form-item label="问题类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="短期高频率"
                         name="type" />
            <el-checkbox label="非正常时间"
                         name="type" />
            <el-checkbox label="长期"
                         name="type" />
            <el-checkbox label="境外IP"
                         name="type" />
          </el-checkbox-group>
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

    <!-- <el-button type="text"
               @click="dialogFormVisible = true">Dialog</el-button>
    <el-dialog title="收货地址"
               :visible.sync="dialogFormVisible">
      <el-form ref="form"
               :model="form"
               label-width="120px">
        <el-form-item label="IP地址">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="问题类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="短期高频率"
                         name="type" />
            <el-checkbox label="非正常时间"
                         name="type" />
            <el-checkbox label="长期"
                         name="type" />
            <el-checkbox label="境外IP"
                         name="type" />
          </el-checkbox-group>
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
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">提交</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
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

