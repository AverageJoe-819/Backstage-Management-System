<template>
  <el-card>
    <div style="background-color=white ">
      <mallki
        class-name="mallki-text"
        text="历次登录信息"
      />
    </div>
    <el-table
      :data="list"
      style="width: 100%;padding-top: 15px;stripe:true;"
      fit
    >
      <el-table-column
        label="序号"
        min-width="50"
        align="center"
        type="index"
      />
      <el-table-column
        label="IP地址"
        width="200"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column
        label="登录时间"
        width="250"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  components: { Mallki },
  data() {
    return {
      list: [{
        address: '127.0.0.0',
        time: '2021.4.23.19:56'
      }, {
        address: '127.0.0.1',
        time: '2021.4.23.19:57'
      }, {
        address: '127.0.0.2',
        time: '2021.4.23.19:58'
      }, {
        address: '127.0.0.0',
        time: '2021.4.23.19:56'
      }, {
        address: '127.0.0.0',
        time: '2021.4.23.19:56'
      }, {
        address: '127.0.0.0',
        time: '2021.4.23.19:56'
      }, {
        address: '127.0.0.0',
        time: '2021.4.23.19:56'
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
</style>
