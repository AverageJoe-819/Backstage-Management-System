<template>
  <el-card class="login-card">
    <div slot="header"
         class="clearfix">
      <mallki class-name="mallki-text"
              text="登录信息" />

    </div>
    <div>
      <el-table :data="list"
                highlight-current-row
                fit
                class="table">
        <el-table-column align="center"
                         label="序号"
                         type="index"
                         width="50" />

        <el-table-column label="登录IP"
                         width="150"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.IP }}
          </template>
        </el-table-column>
        <el-table-column label="在线时长"
                         width="80"
                         align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.time1 }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center"
                         prop="time"
                         label="登录时间">
          <template slot-scope="scope">

            <span>{{ scope.row.time2 }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  components: { Mallki },
  data () {
    return {
      list: [{
        IP: '192.168.3.103',
        time1: '01h21m',
        time2: '2021/4/26 20:11 '
      }, {
        IP: '192.168.3.103',
        time1: '03h13m',
        time2: '2021/4/26 14:05 '
      }, {
        IP: '192.168.3.103',
        time1: '02h46m',
        time2: '2021/4/25 12:34 '
      }, {
        IP: '192.168.3.103',
        time1: '10h11m',
        time2: '2021/4/24 13:44 '
      }, {
        IP: '192.168.3.103',
        time1: '02h03m',
        time2: '2021/4/24 13:44 '
      }]
    }
  }
}
</script>
<style lang="scss" >
.mallki-text {
  font-size: 20px;
  font-weight: bold;
}
.login-card {
  height: 440px;
}
</style>

