<template>
  <span align="center">
    <el-button
      type="primary"
      size="small"
      style="margin-right:10px"
      @click="dialogRedactVisible = true"
    >编辑</el-button>
    <el-dialog
      v-dialogDrag
      title="编辑"
      :visible.sync="dialogRedactVisible"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :disabled="isable"
        :model="form"
        label-width="120px"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input
            v-model="form.name"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item label="邮箱号码">
          <el-input
            v-model="form.email"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input
            v-model="form.phonenumber"
            style="width:80%"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.pwd1"
            style="width:80%"
          />
        </el-form-item>

        <el-form-item label="权限">

          <el-radio-group v-model="form.roles">
            <el-radio label="高级管理员" />
            <el-radio label="普通管理员" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="描述">
          <el-input
            v-model="form.description"
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
        @click="save()"
      >保存</el-button>
      <el-button @click="handleClose">取消</el-button>

    </el-dialog>
  </span>
</template>

<script>
export default {
  data() {
    return {
      isable: true,
      dialogRedactVisible: false,
      form: {
        username: 'admin',
        name: '师明骏',
        email: '672536763@qq.com',
        phonenumber: '17361041429',
        pwd1: 'Smj710814',

        roles: '高级管理员',
        description: '高级管理员，不能访问权限管理'
      }
    }
  },
  methods: {
    save() {
      this.isable = true
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    redact() {
      this.isable = false
      this.$message({
        type: 'success',
        message: '开始编辑'
      })
    },
    handleClose(done) {
      this.dialogRedactVisible = false
      this.$message('退出编辑')
    }
  }
}

</script>

<style>
</style>
