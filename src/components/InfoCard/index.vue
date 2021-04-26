<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <mallki class-name="mallki-text"
              text="用户信息" />
    </div>
    <el-row>
      <el-col class="text item"
              span="12">
        邮箱号码：{{ email }}
      </el-col>
      <el-col class="text item"
              span="12">
        登录地址：{{ address }}
      </el-col>
    </el-row>
    <el-row>
      <el-col class="text item"
              span="12">
        手机号码：{{ phonenumber }}
      </el-col>
      <el-col class="text item"
              span="12">
        登录时间：{{ time }}
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  components: { Mallki },
  computed: {
    ...mapGetters([
      'email',
      'phonenumber',
      'address',
      'time'
    ])
  },
  methods: {

  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  height: 150px;
}
</style>
