<template>
  <el-collapse
    v-model="activeNames"
    v-loading="listLoading"
    style="padding:30px;
               border-bottom:0px;
               "
    @change="handleChange"
  >

    <el-collapse-item name="1">
      <template slot="title">
        <mallki
          class-name="mallki-text"
          text="入侵检测 Intrusion Detection"
          style="font-size:30px"
        />
      </template>
      <div style="font-size:20px">
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
      <div style="font-size:20px"> 检测涉及目的IP
        <el-tag type="primary">
          500个</el-tag>
      </div>
      <div style="font-size:20px">包含中间件<el-tag>8个</el-tag>，分别为：
        <el-tag>
          tomcat<span>
            <svg-icon icon-class="Tomcat" />
          </span>
        </el-tag>,<el-tag>jetty<span>
          <svg-icon icon-class="J" />
        </span>
        </el-tag>,<el-tag> apache<span>
          <svg-icon icon-class="apache" />
        </span></el-tag>, <el-tag>JBOSS<span>
          <svg-icon icon-class="JJ" />
        </span></el-tag>, <el-tag>weblogic<span>
          <svg-icon icon-class="Weblogic" />
        </span></el-tag>,<el-tag> websphere<span>
          <svg-icon icon-class="sphere" />
        </span></el-tag>, <el-tag>glassfish<span>
          <svg-icon icon-class="fish" />
        </span></el-tag>, <el-tag>nginx<span>
          <svg-icon icon-class="Nginx" />
        </span></el-tag>
      </div>
      <div style="font-size:20px">包含端口服务共
        <span>
          <el-tag>8个</el-tag>,分别为：<el-tag>FTP</el-tag>、<el-tag>WWW</el-tag>、<el-tag>EPMAP</el-tag>、<el-tag>NETBIOS-NS</el-tag>、<el-tag>SMB</el-tag>、<el-tag>CIFS</el-tag>、<el-tag>DCE-RPC</el-tag>、<el-tag>MYSQL</el-tag>、<el-tag>UNKNOWN</el-tag>
        </span>
      </div>
    </el-collapse-item>

    <el-collapse-item name="2">
      <template slot="title">
        <mallki
          class-name="mallki-text"
          text="漏洞检测 Leak Detection"
          style="font-size:30px"
        />
      </template>
      <div style="font-size:20px">
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
      <div style="font-size:20px">检测出漏洞类型共<el-tag>14种</el-tag>，分别为：
        <el-tag>SQL中可能允许远程执行代码漏洞</el-tag>、
        <el-tag>跨站点脚本编制</el-tag>、
        <el-tag>失效的身份认证</el-tag>、
        <el-tag>失效的会话管理</el-tag>、
        <el-tag>失效的访问控制</el-tag>、
        <el-tag>SQL注入</el-tag>、
        <el-tag>OS注入</el-tag>、
        <el-tag>敏感数据泄露</el-tag>、
        <el-tag>XSS跨站脚本攻击</el-tag>、
        <el-tag>XEE外部实体攻击</el-tag>、
        <el-tag>不安全的反序列化</el-tag>、
        <el-tag>安全配置错误</el-tag>、
        <el-tag>使用含已知漏洞的组件</el-tag>、
        <el-tag>不足的日志记录和监控</el-tag>
      </div>
      <div style="font-size:20px">存在漏洞的页面共
        <el-tag>7个</el-tag>，分别为：
        <el-tag>http://www.xiaoma.com/</el-tag>、
        <el-tag>http://www.xiaoma.com/student/</el-tag>、
        <el-tag>http://www.xiaoma.com/system/</el-tag>、
        <el-tag>http://www.xiaoma.com/register/</el-tag>、
        <el-tag>http://www.xiaoma.com/login/</el-tag>、
        <el-tag>http://www.xiaoma.com/news/</el-tag>、
        <el-tag>http://www.xiaoma.com/activity/</el-tag>
      </div>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template slot="title">
        <mallki
          class-name="mallki-text"
          text="用户管理 User Management"
          style="font-size:30px"
        />
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
          {{ blacklistUseNum }}个
        </el-tag>
      </div>
    </el-collapse-item>
    <el-collapse-item name="4">
      <template slot="title">
        <mallki
          class-name="mallki-text"
          text="权限管理 Roles Management"
          style="font-size:30px"
        />
      </template>
      共拥有管理员
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
</template>

<script>
import { fetchIntrusionList } from '@/api/intrusion'
import { fetchLeakList } from '@/api/leak'
import { fetchBlackList } from '@/api/blacklist'
import { fetchRolesList } from '@/api/role'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {

  components: { Mallki },
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
      await fetchIntrusionList({ page: 1, limit: 9999, status: '正常' }).then(response => {
        total = response.data.total
      })
      return total
    },
    async intrusionFail() {
      let total = 0
      await fetchIntrusionList({ page: 1, limit: 9999, status: '恶意' }).then(response => {
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
