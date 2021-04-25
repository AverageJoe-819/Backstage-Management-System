<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <mallki class-name="mallki-text"
              text="用户个人信息" />
      <el-switch v-model="value1"
                 active-text="隐藏"
                 inactive-text="显示"
                 style="float: right; padding: 3px 0">
      </el-switch>
    </div>
    <div>
      <div class="text item">
        邮箱号码：{{email}}
      </div>
      <div class="text item">
        手机号码：{{phone}}
      </div>
    </div>
  </el-card>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  components: { Mallki },
  data () {
    return {
      value1: true,
      email: '672536763@qq.com',
      phone: '17361041429'
    }
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