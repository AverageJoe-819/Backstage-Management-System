<template>
  <div
    class="app-container"
    style="padding-top:30px;
       padding-left:30px"
  >
    <el-row>
      <el-col span="12">
        <mallki
          class-name="mallki-text"
          text="网站维护 Website Maintenance"
          style="font-size:30px"
        />
        <pie0-chart />
      </el-col>
      <el-col span="12">
        <mallki
          class-name="mallki-text"
          text="用户监控 User Monitoring"
          style="font-size:30px"
        />
        <pie5-chart />
      </el-col>
    </el-row>
    <el-row>

      <el-col span="12">
        <mallki
          class-name="mallki-text"
          text="入侵检测 Intrusion Detection"
          style="font-size:30px"
        />
        <pie1-chart />
      </el-col>
      <el-col span="12">
        <mallki
          class-name="mallki-text"
          text="漏洞扫描 Leak Scanning"
          style="font-size:30px"
        />
        <pie2-chart />
      </el-col>
    </el-row>

    <el-row>
      <el-col span="12">
        <mallki
          class-name="mallki-text"
          text="用户管理 User Management"
          style="font-size:30px"
        />
        <pie3-chart />
      </el-col>
      <el-col span="12">
        <mallki
          class-name="mallki-text"
          text="权限管理 Role Management"
          style="font-size:30px"
        />
        <pie4-chart />
      </el-col>
    </el-row>
  </div>
</template>
  <!-- <el-collapse v-model="activeNames"
               v-loading="listLoading"
               style="padding:30px;
               border-bottom:0px"
               @change="handleChange">

    <el-collapse-item name="1">
      <template slot="title">
        <mallki class-name="mallki-text"
                text="入侵检测 Intrusion Detection"
                style="font-size:30px" />
      </template>
      <div>
        共进行入侵检测
        <el-tag>{{ intrusionSuccessNum + intrusionFailNum }}次</el-tag>
        ，其中连接成功
        <el-tag type="success">
          {{ intrusionSuccessNum }}次
        </el-tag>
        ，连接失败
        <el-tag type="danger">
          {{ intrusionFailNum }}次
        </el-tag>
      </div>
      <pie1-chart />
    </el-collapse-item>

    <el-collapse-item name="2">
      <template slot="title">
        <mallki class-name="mallki-text"
                text="漏洞检测 Leak Detection"
                style="font-size:30px" />
      </template>
      <div>
        共检测出漏洞
        <el-tag>
          {{ leakHighNum+leakLowNum+leakMidNum }}个
        </el-tag>
        ，其中高风险漏洞

        <el-tag type="danger">
          {{ leakHighNum }}个
        </el-tag>
        ，中风险漏洞
        <el-tag type="warning">
          {{ leakMidNum }}个
        </el-tag>
        ，低风险漏洞
        <el-tag type="success">
          {{ leakLowNum }}个
        </el-tag>
      </div>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template slot="title">
        <mallki class-name="mallki-text"
                text="用户管理 User Management"
                style="font-size:30px" />
      </template>
      <div>
        黑名单中共纳入IP<el-tag>
          {{ blacklistDangerNum+blacklistWarningNum }}个
        </el-tag>
        其中高危IP
        <el-tag type="danger">
          {{ blacklistDangerNum }}个
        </el-tag>
        ,嫌疑IP
        <el-tag type="warning">
          {{ blacklistWarningNum }}个
        </el-tag>
        ，已封禁IP
        <el-tag type="danger">
          {{ blacklistBanNum }}个
        </el-tag>
        ，已启用IP
        <el-tag type="success">
          {{blacklistUseNum}}个
        </el-tag>
      </div>
    </el-collapse-item>
    <el-collapse-item name="4">
      <template slot="title">
        <mallki class-name="mallki-text"
                text="权限管理 Roles Management"
                style="font-size:30px" /> -->

      <!-- 共拥有管理员
      <el-tag>
        {{ superadminNum+adminNum+editorNum }}
      </el-tag>
      ，其中超级管理员
      <el-tag type="success">
        {{ superadminNum }}
      </el-tag>
      ，高级管理员
      <el-tag type="warning">
        {{ adminNum }}
      </el-tag>
      ，普通管理员
      <el-tag type="danger">
        {{ editorNum }}
      </el-tag>
    </el-collapse-item>

  </el-collapse>
</template> -->

<script>
import { fetchIntrusionList } from '@/api/intrusion'
import { fetchLeakList } from '@/api/leak'
import { fetchBlackList } from '@/api/blacklist'
import { fetchRolesList } from '@/api/role'
import Pie0Chart from './components/Pie0Chart'
import Pie1Chart from './components/Pie1Chart'
import Pie2Chart from './components/Pie2Chart'
import Pie3Chart from './components/Pie3Chart'
import Pie4Chart from './components/Pie4Chart'
import Pie5Chart from './components/Pie5Chart'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {

  components: { Mallki, Pie0Chart, Pie1Chart, Pie2Chart, Pie3Chart, Pie4Chart, Pie5Chart },
  data() {
    return {
      listLoading: true,
      intrusionSuccessNum: 0,
      intrusionFailNum: 0,
      leakHighNum: 0,
      leakMidNum: 0,
      leakLowNum: 0,
      blacklistDangerNum: 0,
      blacklistWarningNum: 0,
      blacklistBanNum: 0,
      blacklistUseNum: 0,
      superadminNum: 0,
      adminNum: 0,
      editorNum: 0
    }
  },
  async created() {
    this.listLoading = true
    const [intrusionSuccessNum, intrusionFailNum, leakHighNum, leakMidNum, leakLowNum, blacklistBanNum, blacklistUseNum, blacklistDangerNum, blacklistWarningNum, superadminNum, adminNum, editorNum] = await Promise.all([
      this.intrusionSuccess(),
      this.intrusionFail(),
      this.leakHigh(),
      this.leakMid(),
      this.leakLow(),
      this.blacklistBan(),
      this.blacklistUse(),
      this.blacklistDanger(),
      this.blacklistWarning(),
      this.superadmin(),
      this.admin(),
      this.editor()
    ])
    this.intrusionSuccessNum = intrusionSuccessNum
    this.intrusionFailNum = intrusionFailNum
    this.leakHighNum = leakHighNum
    this.leakMidNum = leakMidNum
    this.leakLowNum = leakLowNum
    this.blacklistDangerNum = blacklistDangerNum
    this.blacklistWarningNum = blacklistWarningNum
    this.blacklistBanNum = blacklistBanNum
    this.blacklistUseNum = blacklistUseNum
    this.superadminNum = superadminNum
    this.adminNum = adminNum
    this.editorNum = editorNum
    console.log(intrusionSuccessNum, intrusionFailNum, leakHighNum, leakMidNum, leakLowNum, blacklistBanNum, blacklistUseNum, blacklistDangerNum, blacklistWarningNum, superadminNum, adminNum, editorNum, 'intrusionFailNum')
    setTimeout(() => {
      this.listLoading = false
    }, 1.5 * 1000)
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    async intrusionSuccess() {
      let total = 0
      await fetchIntrusionList({ page: 1, limit: 9999, status: '成功' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async intrusionFail() {
      let total = 0
      await fetchIntrusionList({ page: 1, limit: 9999, status: '失败' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async leakHigh() {
      let total = 0
      await fetchLeakList({ page: 1, limit: 9999, status: '高' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async leakMid() {
      let total = 0
      await fetchLeakList({ page: 1, limit: 9999, status: '中' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async leakLow() {
      let total = 0
      await fetchLeakList({ page: 1, limit: 9999, status: '低' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async blacklistBan() {
      let total = 0
      await fetchBlackList({ page: 1, limit: 9999, status2: '已禁用' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async blacklistUse() {
      let total = 0
      await fetchBlackList({ page: 1, limit: 9999, status2: '已启用' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async blacklistDanger() {
      let total = 0
      await fetchBlackList({ page: 1, limit: 9999, status1: '高危' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async blacklistWarning() {
      let total = 0
      await fetchBlackList({ page: 1, limit: 9999, status1: '嫌疑' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async admin() {
      let total = 0
      await fetchRolesList({ role: 'admin' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async editor() {
      let total = 0
      await fetchRolesList({ role: 'editor' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async superadmin() {
      let total = 0
      await fetchRolesList({ role: 'superadmin' }).then(response => {
        total = response.data.total
      })
      return total
    }
  }
}
</script>
