<template>
  <div class="app-container">
    <div align="center">
      <el-button
        type="primary"
        icon="el-icon-user"
        size="medium"
        @click="dialogFormVisible = true"
      >
        {{ $t('management2.adduser') }}</el-button>
    </div>
    <el-dialog
      v-dialogDrag
      :title="$t('management2.adduser')"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item
          :label="$t('management2.username')"
          prop="username"
        >
          <el-input
            v-model="form.username"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.name')"
          prop="cname"
        >

          <el-input
            v-model="form.cname"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.email')"
          prop="email"
        >

          <el-input
            v-model="form.email"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.phonenumber')"
          prop="phone"
        >

          <el-input
            v-model="form.phone"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.pwd1')"
          prop="password"
        >
          <el-input
            v-model="form.password"
            size="small"
            :type="passwordType"
            style="width:80%"
          />
          <span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <el-form-item
          :label="$t('management2.pwd2')"
          prop="pwd2"
        >
          <el-input
            v-model="form.pwd2"
            size="small"
            type="password"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.roles')"
          prop="roleName"
        >

          <el-radio-group v-model="form.roleName">
            <el-radio :label="0">
              {{ $t('management2.editor') }}
            </el-radio>
            <el-radio :label="1">
              {{ $t('management2.admin') }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          :label="$t('management2.description')"
          prop="description"
        >
          <el-input
            v-model="form.description"
            type="textarea"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('form')"
          >{{ $t('management2.submit') }}</el-button>
          <el-button @click="resetForm('form')">{{ $t('management2.reset') }}</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

  </div>
</template>

<script>
import { adduserList } from '@/api/role'

export default {
  data() {
    const pwdreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
    const usernamereg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
    const emailreg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const phonenumberreg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|4|5|6|7|8|9])\d{8}$/
    const descreg = /^[\u4E00-\u9FA5A-Za-z0-9,]+$/
    const validateUsername = (rule, value, callback) => {
      if (!usernamereg.test(value)) {
        callback(new Error('请正确输入用户名'))
      } else {
        callback()
      }
    }
    const validateName = (rule, value, callback) => {
      if (!usernamereg.test(value)) {
        callback(new Error('请正确输入姓名'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!emailreg.test(value)) {
        callback(new Error('请正确输入邮箱号码'))
      } else {
        callback()
      }
    }
    const validatePhonenumber = (rule, value, callback) => {
      if (!phonenumberreg.test(value)) {
        callback(new Error('请正确输入电话号码'))
      } else {
        callback()
      }
    }
    const validatePwd1 = (rule, value, callback) => {
      if (!pwdreg.test(value)) {
        callback(new Error('请正确输入密码'))
      } else {
        if (this.form.pwd2 !== '') {
          this.$refs.form.validateField('pwd2')
        }
        callback()
      }
    }
    const validatePwd2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const validateDescription = (rule, value, callback) => {
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
        username: '',
        cname: '',
        email: '',
        phone: '',
        roleName: '',
        description: '',
        password: '',
        pwd2: ''
      },
      formLabelWidth: '120px',
      passwordType: 'password',
      rules: {
        username: [{
          required: true, validator: validateUsername, trigger: 'blur'
        }],
        cname: [{
          required: true, validator: validateName, trigger: 'blur'
        }],
        email: [{
          required: false, validator: validateEmail, trigger: 'blur'
        }],
        phone: [{
          required: false, validator: validatePhonenumber, trigger: 'blur'
        }],
        password: [
          { required: true, validator: validatePwd1, trigger: 'blur' }],
        pwd2: [
          { required: true, validator: validatePwd2, trigger: 'blur' }

        ],
        roleName: [
          { required: true, message: '请选择权限类型', trigger: 'blur' }],
        description: [
          {
            required: false, validator: validateDescription, trigger: 'blur'
          }]
      }
    }
  },
  methods: {
    async submitForm() {
      const response = await adduserList(
        this.form
      )
      if (response.data.code === 20000) {
        this.dialogFormVisible = false
        this.$message({
          type: 'success',
          message: '注册成功'
        })
      } else {
        this.$message({
          type: 'danger',
          message: '注册失败'
        })
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.pwd1.focus()
      })
    },
    handleClose(done) {
      this.dialogFormVisible = false
      this.$message('退出注册'
      )
    },
    resetForm(form) {
      this.$refs[form].resetFields()
      this.$message({
        type: 'success',
        message: '重置成功'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

