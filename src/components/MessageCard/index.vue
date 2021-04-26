<template>
  <el-card class="login-card">
    <div slot="header"
         class="clearfix">
      <mallki class-name="mallki-text"
              text="历次登录信息" />

    </div>
    <div id="tablebody">
      <el-table :data="list"
                highlight-current-row
                class="table">
        <el-table-column align="center"
                         label="序号"
                         type="index"
                         width="48" />

        <el-table-column label="登录IP"
                         width="80"
                         align="center">
          <template slot-scope="scope">
            {{ scope.row.IP }}
          </template>
        </el-table-column>
        <el-table-column label="在线时长"
                         width="77"
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
        time1: '1.5h',
        IP: '192.168.3.103',
        time2: ' 4/26 17:11 '
      }, {
        time1: '3.0h  ',
        IP: '192.168.3.103',
        time2: ' 4/26 20:05 '
      }, {
        time1: '3.0h  ',
        IP: '192.168.3.103',
        time2: ' 4/26 20:05 '
      }, {
        time1: '3.0h  ',
        IP: '192.168.3.103',
        time2: ' 4/26 20:05 '
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
  height: 460px;
}
#tablebody {
  padding: 0px;
}
</style>
