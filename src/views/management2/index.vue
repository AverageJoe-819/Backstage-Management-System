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
          {{ scope.row.role.roleName }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('management2.username')"
        width="200"
      >
        <template slot-scope="scope">
          {{ scope.row.cname }}
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
        :label="$t('management2.operation')"
        width="200"
      >
        <template slot-scope="scope">

          <el-button
            type="primary"
            size="small"
            style="margin-right:10px"
            @click="openredact( scope.row.userid)"
          >编辑</el-button>
          <el-dialog
            v-dialogDrag
            title="编辑"
            :visible.sync="dialogRedactVisible"
            :before-close="handleClose1"
          >
            <el-form
              ref="form"
              :disabled="isable"
              :model="form1"
              label-width="120px"
            >
              <el-form-item label="用户名">
                <el-input
                  v-model="form1.username"
                  style="width:80%"
                />
              </el-form-item>
              <el-form-item label="姓名">
                <el-input
                  v-model="form1.cname"
                  style="width:80%"
                />
              </el-form-item>
              <el-form-item label="邮箱号码">
                <el-input
                  v-model="form1.email"
                  style="width:80%"
                />
              </el-form-item>
              <el-form-item label="电话号码">
                <el-input
                  v-model="form1.phone"
                  style="width:80%"
                />
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  v-model="form1.password"
                  style="width:80%"
                />
              </el-form-item>

              <el-form-item label="权限">

                <el-radio-group v-model="form1.roleName">
                  <el-radio label="高级管理员" />
                  <el-radio label="普通管理员" />
                </el-radio-group>
              </el-form-item>

              <el-form-item label="描述">
                <el-input
                  v-model="form1.description"
                  type="textarea"
                  style="width:80%"
                />
              </el-form-item>

            </el-form>

            <el-button
              v-if="isable===true"
              type="primary"
              message="1"
              @click="redact()"
            >编辑</el-button>
            <el-button
              v-if="isable===false"
              type="primary"
              @click="sumbitredact()"
            >保存</el-button>
            <el-button @click="handleClose1">取消</el-button>

          </el-dialog>

          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope.row.userid)"
          >
            {{ $t('management2.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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
      :before-close="handleClose2"
    >
      <el-form
        ref="form"
        :model="form2"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item
          :label="$t('management2.username')"
          prop="username"
        >
          <el-input
            v-model="form2.username"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.name')"
          prop="cname"
        >

          <el-input
            v-model="form2.cname"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.email')"
          prop="email"
        >

          <el-input
            v-model="form2.email"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.phonenumber')"
          prop="phone"
        >

          <el-input
            v-model="form2.phone"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.pwd1')"
          prop="password"
        >
          <el-input
            v-model="form2.password"
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
            v-model="form2.pwd2"
            size="small"
            type="password"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item
          :label="$t('management2.roles')"
          prop="roleName"
        >

          <el-radio-group v-model="form2.roleName">
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
            v-model="form2.description"
            type="textarea"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('form2')"
          >{{ $t('management2.submit') }}</el-button>
          <el-button @click="resetForm('form2')">{{ $t('management2.reset') }}</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
import { fetchRolesList, deleteuserid } from '@/api/role'
import { postuserid, saveredact } from '@/api/role'
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
      list: null,
      listLoading: true,
      visibile: false,
      isable: true,
      dialogRedactVisible: false,
      form1: {
        userid: '',
        username: '',
        cname: '',
        email: '',
        phone: '',
        password: '',
        roleName: '',
        description: ''
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      form2: {
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
  created() {
    this.getList()
  },
  methods: {
    async openredact(userid) {
      const response = await postuserid({
        userid: userid
      })
      if (response.data.code === 20000) {
        this.dialogRedactVisible = true
        this.form1.userid = response.data.data.userid
        this.form1.username = response.data.data.username
        this.form1.cname = response.data.data.cname
        this.form1.phone = response.data.data.phone
        this.form1.email = response.data.data.email
        this.form1.password = response.data.data.password
        this.form1.roleName = response.data.data.role.roleName
        this.form1.description = response.data.data.description
      } else {
        this.$message({
          type: 'danger',
          message: '打开失败'
        })
      }
    },
    async sumbitredact() {
      const response = await saveredact(
        this.form1
      )
      if (response.data.code === 20000) {
        this.$message({
          type: 'success',
          message: '保存成功'
        })
        this.getList()
      } else {
        this.$message({
          type: 'danger',
          message: '保存失败'
        })
      }
      this.isable = true
    },

    redact() {
      this.isable = false
      this.$message({
        type: 'success',
        message: '开始编辑'
      })
    },
    handleClose1(done) {
      this.dialogRedactVisible = false
      this.$message('退出编辑')
    },
    handleClose2(done) {
      this.dialogFormVisible = false
      this.$message('退出注册')
    },
    getList() {
      this.listLoading = true
      fetchRolesList().then(response => {
        this.list = response.data.data
        this.listLoading = false
      })
    },
    async handleDelete(userid) {
      const response = await deleteuserid({
        userid: userid
      })
      if (response.data.code === 20000) {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getList()
      } else {
        this.$message({
          type: 'danger',
          message: '删除失败'
        })
      }
    },
    async submitForm() {
      const response = await adduserList(
        this.form2
      )
      if (response.data.code === 20000) {
        this.dialogFormVisible = false
        this.$message({
          type: 'success',
          message: '注册成功'
        })
        this.getList()
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
        this.$refs.password.focus()
      })
    },

    resetForm(form2) {
      this.$refs[form2].resetFields()
      this.$message({
        type: 'success',
        message: '重置成功'
      })
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
