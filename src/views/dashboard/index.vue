<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col span="12">
        <div class=" clearfix">
          <pan-thumb
            :image="avatar"
            style="float: left;"
          >
            <br>
            <br>
            {{ $t('dashboard.yourroles') }} ：
            <span
              v-for="item in roles"
              :key="item"
              class="pan-info-roles"
            >{{ item }}</span>
          </pan-thumb>
          <div class="info-container">
            <span class="display_name">{{ name }}</span>
            <span
              v-for="item in roles"
              :key="item"
              style="font-size:20px;padding-top:20px;display:inline-block;"
              class="pan-info-roles"
            >{{ item }} {{ $t('dashboard.dashboard') }}</span>
          </div>
        </div>

      </el-col>
      <el-col span="12">
        <info-card />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col
        style="margin-top:30px;"
        span="7"
      >
        <todo-list />
      </el-col>

      <el-col
        style="margin-top:30px;"
        span="11"
      >

        <message-card />
      </el-col>
      <el-col
        style="margin-top:30px;"
        span="6"
      >
        <box-card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from './components/PanThumb'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import MessageCard from './components/MessageCard'
import InfoCard from './components/InfoCard'

export default {
  name: 'Dashboard',
  components: { PanThumb, BoxCard, TodoList, MessageCard, InfoCard },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles',
      'email',
      'phonenumber',
      'address',
      'time'
    ])
  }
}
</script>
<style lang="scss" scoped>
.dashboard-editor-container {
  // background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }

  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
