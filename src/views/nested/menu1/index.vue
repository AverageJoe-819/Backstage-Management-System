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
        <el-tag>{{ NewconNum+OldconNum }}</el-tag>
        个，其中版本已更新至最新的
        <el-tag type="success">
          {{ NewconNum }}
        </el-tag>
        个，未更新至最新的
        <el-tag type="danger">
          {{ OldconNum }}
        </el-tag>
        个。
      </div>
      <el-row style="font-size:20px">
        <el-col span="4">
          <strong>{{ con1 }}</strong>
          <span>
            <svg-icon icon-class="Nginx" />
          </span>
          <div>
            <strong>{{ con2 }}</strong>
            <span>
              <svg-icon icon-class="apache" />
            </span>
          </div>
          <div>
            <strong>{{ con3 }}</strong>
            <span>
              <svg-icon icon-class="PHP" />
            </span>
          </div>
          <div>
            <strong>{{ con4 }}</strong>
            <span>
              <svg-icon icon-class="Dw" />
            </span>
          </div>
          <strong>{{ con5 }}</strong>
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

          <strong>{{ newcon1 }}</strong>
          <span>
            <svg-icon icon-class="Nginx" />
          </span>
          <div>
            <strong>{{ newcon2 }}</strong>
            <span>
              <svg-icon icon-class="apache" />
            </span>
          </div>
          <div>
            <strong>{{ newcon3 }}</strong>
            <span>
              <svg-icon icon-class="PHP" />
            </span>
          </div>
          <div>
            <strong>{{ newcon4 }}</strong>
            <span>
              <svg-icon icon-class="Dw" />
            </span>
          </div>
          <strong>{{ newcon5 }}</strong>
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
        <el-tag>{{ browse_sum }}</el-tag>
        个，访问人数达
        <el-tag type="success">
          {{ visit_sum }}
        </el-tag>
        个，访问人数达
        <el-tag type="danger">
          {{ visitor_sum }}
        </el-tag>
        个，新访问人数达<el-tag type="danger">
          {{ newvisitor_sum }}
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
        检测涉及源IP<strong> {{ ip_sum }} </strong>个,分别为：
        <strong> {{ ip1 }} 、 </strong>
        <strong> {{ ip2 }} 、 </strong>
        <strong> {{ ip3 }} 、 </strong>
        <strong> {{ ip4 }} 、 </strong>
        <strong> {{ ip5 }} ；</strong>
      </div>
      <div style="font-size:20px">
        涉及页面URL<strong> {{ url_sum }} </strong>个,分别为：
        <strong> {{ url1 }} 、 </strong>
        <strong> {{ url2 }} ； </strong>
      </div>
      <div style="font-size:20px">
        涉及参数名<strong> {{ data_sum }} </strong>个,分别为：
        <strong>{{ data1 }} 、
        </strong>
        <strong>{{ data2 }} 、
        </strong>
        <strong>{{ data3 }} ;
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
      <div style="font-size:20px">检测出漏洞类型共<strong> {{ leak_sum }} </strong>种，分别为：
        <strong> {{ leak1 }}、 </strong>
        <strong> {{ leak2 }}、 </strong>
        <strong> {{ leak3 }}、 </strong>
        <strong> {{ leak4 }}、 </strong>
        <strong> {{ leak5 }}、 </strong>
        <strong> {{ leak6 }}、 </strong>
        <strong> {{ leak7 }}、 </strong>
        <strong> {{ leak8 }}、 </strong>
        <strong> {{ leak9 }}、 </strong>
        <strong> {{ leak10 }}、 </strong>
        <strong> {{ leak11 }}、 </strong>
        <strong> {{ leak12 }}； </strong>
      </div>
      <div style="font-size:20px">存在漏洞的页面共
        <strong> {{ url1_sum }} </strong>个，分别为：
        <strong> {{ url3 }} 、 </strong>
        <strong> {{ url1 }} 、 </strong>
        <strong> {{ url4 }} 、 </strong>
        <strong> {{ url2 }} 、 </strong>
        <strong> {{ url5 }} </strong>
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
          {{ blacklistDangerNum+blacklistWarningNum }}
        </el-tag>
        个，其中高危IP
        <el-tag type="danger">
          {{ blacklistDangerNum }}
        </el-tag>
        个,嫌疑IP
        <el-tag type="warning">
          {{ blacklistWarningNum }}
        </el-tag>
        个，已封禁IP
        <el-tag type="danger">
          {{ blacklistBanNum }}
        </el-tag>
        个，已启用IP
        <el-tag type="success">
          {{ blacklistUseNum }}
        </el-tag>个
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
          {{ role1+role2+role3 }}
        </el-tag>
        名，其中超级管理员
        <el-tag type="success">
          {{ role1 }}
        </el-tag>
        名，高级管理员
        <el-tag type="warning">
          {{ role2 }}
        </el-tag>
        名，普通管理员
        <el-tag type="danger">
          {{ role3 }}
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
      editorNum: 0,
      NewconNum: 3,
      OldconNum: 2,
      con1: 'nginx/1.19.0',
      con2: 'apache/2.12.1',
      con3: 'PHP/7.1.3',
      con4: 'DreamWeaver/3.7.8',
      con5: 'Ubuntu/3.8.2',
      newcon1: 'nginx/1.21.0',
      newcon2: 'apache/2.12.1',
      newcon3: 'PHP/7.4.5',
      newcon4: 'DreamWeaver/3.7.8',
      newcon5: 'Ubuntu/3.9.2',
      browse_sum: 225,
      visit_sum: 43,
      visitor_sum: 23,
      newvisitor_sum: 7,
      ip_sum: 5,
      ip1: '192.168.1.103',
      ip2: '192.168.1.103',
      ip3: '192.168.101.61',
      ip4: '192.168.101.61',
      ip5: '192.168.101.67',
      url_sum: 2,
      url1: 'http://www.xiaoma.com/news/',
      url2: 'http://www.xiaoma.com/login/',
      data_sum: 3,
      data1: 'news.search',
      data2: 'login.username',
      data3: 'login.password',
      leak_sum: 12,
      leak1: 'SQL注入',
      leak2: 'OS命令执行',
      leak3: '失效的身份验证',
      leak4: '暴力破解',
      leak5: '敏感数据泄露',
      leak6: 'XML外部实体注入',
      leak7: '失效的访问控制',
      leak8: '安全配置错误',
      leak9: 'XSS跨站脚本攻击',
      leak10: '使用含有已知漏洞的组件',
      leak11: 'CFRS攻击',
      leak12: '不足的日志记录及监控',
      url1_sum: 5,
      url3: 'http://www.xiaoma.com/',
      url4: 'http://www.xiaoma.com/students/',
      url5: 'http://www.xiaoma.com/system/',
      role1: 1,
      role2: 1,
      role3: 1
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
