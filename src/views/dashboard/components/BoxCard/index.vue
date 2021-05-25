<template>
  <el-card
    class="box-card-component"
    style="height:440px"
  >
    <div
      slot="header"
      class="box-card-header"
    >
      <img src="https://i.loli.net/2021/05/25/D5AiCrVP9ZhfLde.png">
    </div>
    <div style="position:relative;">
      <mallki
        class-name="mallki-text"
        :text="$t('dashboard.xiaoma')"
      />
      <div
        style="padding-top:35px;"
        class="progress-item"
      >
        <span>Vue</span>
        <el-progress :percentage="60.5" />
      </div>
      <div class="progress-item">
        <span>JavaScript</span>
        <el-progress :percentage="31.3" />
      </div>
      <div class="progress-item">
        <span>SCSS</span>
        <el-progress :percentage="8" />
      </div>
      <div class="progress-item">
        <span>HTML</span>
        <el-progress :percentage="0.2" />
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {
  components: { Mallki },

  filters: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" >
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;
    ::v-deep .pan-info {
      box-shadow: none !important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px) {
    .mallki-text {
      display: none;
    }
  }
}
</style>
