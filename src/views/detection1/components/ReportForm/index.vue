<template>
  <span class="app-container">
    <div align="center">
      <el-button
        type="primary"
        icon="el-icon-warning"
        size="medium"
        @click="dialogFormVisible = true"
      >{{ $t('monitoring.reportip') }}</el-button>
    </div>
    <el-dialog
      :title="$t('monitoring.reportip')"
      :before-close="handleClose"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item
          :label="$t('monitoring.ip')"
          prop="ip"
        >
          <el-input v-model="form.ip" />
        </el-form-item>

        <el-form-item
          :label="$t('monitoring.type')"
          prop="type"
        >
          <el-radio-group v-model="form.type">
            <el-radio :label="$t('monitoring.danger')" />
            <el-radio :label="$t('monitoring.warning')" />
          </el-radio-group>
        </el-form-item>
        <el-form-item
          :label="$t('monitoring.desc')"
          prop="desc"
        >
          <el-input
            v-model="form.desc"
            type="textarea"
          />
        </el-form-item>

      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="resetForm('form')">{{ $t('monitoring.reset') }}</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >{{ $t('monitoring.submit') }}</el-button>
      </div>
    </el-dialog>

  </span>
</template>

<script>
export default {
  data() {
    const ipreg = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/
    const descreg = /^[\u4E00-\u9FA5A-Za-z0-9,]+$/
    const validateIPAddress = (rule, value, callback) => {
      if (!ipreg.test(value)) {
        callback(new Error('请正确输入IP地址'))
      } else {
        callback()
      }
    }
    const validateDesc = (rule, value, callback) => {
      if (!descreg.test(value)) {
        callback(new Error('请正确输入描述'))
      } else {
        callback()
      }
    }
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        ip: '',
        type: '',
        desc: ''
      },
      formLabelWidth: '120px',
      rules: {
        ip: [{ required: true, validator: validateIPAddress, trigger: 'blur' }],
        type: [{ required: true, trigger: 'blur' }],
        desc: [{ required: false, validator: validateDesc, trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm(form) {
      this.$refs[form].resetFields()
    }
  }
}

</script>

<style scoped>
.line {
  text-align: center;
}
</style>

