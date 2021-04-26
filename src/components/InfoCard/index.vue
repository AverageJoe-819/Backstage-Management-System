<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <mallki class-name="mallki-text"
              text="用户个人信息" />
      <el-switch v-model="value"
                 active-text="隐藏"
                 inactive-text="显示"
                 active-value="0"
                 inactive-value="1"
                 @change="changeswitch(email,phonenumber)"
                 style="float: right; padding: 3px 0" />
    </div>
    <div>
      <div class="text item">
        邮箱号码：{{ email }}
      </div>
      <div class="text item">
        手机号码：{{ phonenumber }}
      </div>
    </div>
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
      'phonenumber'
    ])
  },
  methods: {

  },
  data () {
    return {
      value: true,
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
