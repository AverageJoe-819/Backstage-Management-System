<template>
  <el-collapse
    v-model="activeNames"
    v-loading="listLoading"
    style="padding:30px;
               border-bottom:0px;"
    @change="handleChange"
  >
    <el-collapse-item name="0">
      <template slot="title">
        <mallki
          class-name="mallki-text"
          text="门户网站 Protal Website"
          style="font-size:30px"
        />
      </template>
      <div style="font-size:20px">
        共包含组件
        <el-tag>5</el-tag>
        个，其中版本已更新至最新的
        <el-tag type="success">
          2
        </el-tag>
        个，未更新至最新的
        <el-tag type="danger">
          3
        </el-tag>
        个。
      </div>
      <el-row style="font-size:20px">
        <el-col span="4">
          <strong>nginx/1.19.0</strong>
          <span>
            <svg-icon icon-class="Nginx" />
          </span>
          <div>
            <strong>apache/2.12.1</strong>
            <span>
              <svg-icon icon-class="apache" />
            </span>
          </div>
          <div>
            <strong>PHP/7.1.3</strong>
            <span>
              <svg-icon icon-class="PHP" />
            </span>
          </div>
          <div>
            <strong>DreamWeaver/3.7.8</strong>
            <span>
              <svg-icon icon-class="Dw" />
            </span>
          </div>
          <strong>Ubuntu/3.8.2</strong>
          <span>
            <svg-icon icon-class="ubuntu" />
          </span>
        </el-col>
        <el-col span="2"> -->
          <div>--></div>
          <div>--></div>
          <div>--></div>
          <div>--></div>
        </el-col>
        <el-col span="4">

          <strong>nginx/1.21.0</strong>
          <span>
            <svg-icon icon-class="Nginx" />
          </span>
          <div>
            <strong>apache/2.12.1</strong>
            <span>
              <svg-icon icon-class="apache" />
            </span>
          </div>
          <div>
            <strong>PHP/7.4.5</strong>
            <span>
              <svg-icon icon-class="PHP" />
            </span>
          </div>
          <div>
            <strong>DreamWeaver/3.7.8</strong>
            <span>
              <svg-icon icon-class="Dw" />
            </span>
          </div>
          <strong>Ubuntu/3.9.2</strong>
          <span>
            <svg-icon icon-class="ubuntu" />
          </span>
        </el-col>
        <el-col span="2">
          <i class="el-icon-close" />
          <div><i class="el-icon-check" /></div>
          <div><i class="el-icon-close" /></div>
          <div><i class="el-icon-check" /></div>
          <div><i class="el-icon-close" /></div>
        </el-col>
      </el-row>

    </el-collapse-item>

    <el-collapse-item name="5">
      <template slot="title">
        <mallki
          class-name="mallki-text"
          text="用户监控 User Monitoring"
          style="font-size:30px"
        />
      </template>
      <div style="font-size:20px">
        近七日内，浏览人数达
        <el-tag>225</el-tag>
        个，访问人数达
        <el-tag type="success">
          43
        </el-tag>
        个，访问人数达
        <el-tag type="danger">
          23
        </el-tag>
        个，新访问人数达<el-tag type="danger">
          7
        </el-tag>个。
      </div>
    </el-collapse-item>
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
        <el-tag>{{ intrusionSuccessNum + intrusionFailNum }}</el-tag>
        次，其中正常访问
        <el-tag type="success">
          {{ intrusionSuccessNum }}
        </el-tag>
        次，疑似恶意访问
        <el-tag type="danger">
          {{ intrusionFailNum }}
        </el-tag>
        次。
      </div>
      <div style="font-size:20px">
        检测涉及源IP<strong> 5 </strong>个,分别为：
        <strong> 192.168.1.103 、 </strong>
        <strong> 192.168.3.9 、 </strong>
        <strong> 192.168.101.61 、 </strong>
        <strong> 192.168.1.107 、 </strong>
        <strong> 192.168.101.67 ；</strong>
      </div>
      <div style="font-size:20px">
        涉及页面URL<strong> 2 </strong>个,分别为：
        <strong> http://www.xiaoma.com/news/ 、 </strong>
        <strong> http://www.xiaoma.com/login/ ； </strong>
      </div>
      <div style="font-size:20px">
        涉及参数名<strong> 3 </strong>个,分别为：
        <strong>news.search 、
        </strong>
        <strong>login.username 、
        </strong>
        <strong>login.password ;
        </strong>
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
          {{ leakHighNum+leakLowNum+leakMidNum }}
        </el-tag>
        个，其中高风险漏洞

        <el-tag type="danger">
          {{ leakHighNum }}
        </el-tag>
        个，中风险漏洞
        <el-tag type="warning">
          {{ leakMidNum }}
        </el-tag>
        个，低风险漏洞
        <el-tag type="success">
          {{ leakLowNum }}
        </el-tag>
        个；
      </div>
      <div style="font-size:20px">检测出漏洞类型共<strong> 12 </strong>种，分别为：
        <strong> SQL注入、 </strong>
        <strong> OS命令执行、 </strong>
        <strong> 失效的身份验证、 </strong>
        <strong> 暴力破解、 </strong>
        <strong> 敏感数据泄露、 </strong>
        <strong> XML外部实体注入、 </strong>
        <strong> 失效的访问控制、 </strong>
        <strong> 安全配置错误、 </strong>
        <strong> XSS跨站脚本攻击、 </strong>
        <strong> 使用含有已知漏洞的组件、 </strong>
        <strong> CFRS攻击、 </strong>
        <strong> 不足的日志记录及监控； </strong>
      </div>
      <div style="font-size:20px">存在漏洞的页面共
        <strong> 5 </strong>个，分别为：
        <strong> http://www.xiaoma.com/ 、 </strong>
        <strong> http://www.xiaoma.com/news/ 、 </strong>
        <strong> http://www.xiaoma.com/students/ 、 </strong>
        <strong> http://www.xiaoma.com/login/ 、 </strong>
        <strong> http://www.xiaoma.com/system/ </strong>
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
      <div style="font-size:20px">
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
      <div style="font-size:20px">
        共拥有管理员
        <el-tag>
          3
        </el-tag>
        名，其中超级管理员
        <el-tag type="success">
          1
        </el-tag>
        名，高级管理员
        <el-tag type="warning">
          1
        </el-tag>
        名，普通管理员
        <el-tag type="danger">
          1
        </el-tag>名。
      </div>
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
