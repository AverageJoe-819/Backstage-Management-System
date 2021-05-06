<template>
  <div style="padding:30px;">
    <div>
      <h2>入侵检测</h2>
      <span>
        共进行入侵检测
        <el-tag>1000次</el-tag>
        ，其中连接成功

        <el-tag type="success">
          500次
        </el-tag>
        ，连接失败
        <el-tag type="danger">
          500次
        </el-tag>
      </span>
    </div>
    <div>
      <h2>漏洞检测</h2>
      <span>
        共检测出漏洞
        <el-tag>1000个</el-tag>
        ，其中高风险漏洞

        <el-tag type="danger">
          200个
        </el-tag>
        ，中风险漏洞
        <el-tag type="warning">
          300个
        </el-tag>
        ，低风险漏洞
        <el-tag type="success">
          500个
        </el-tag>
      </span>
      <div>
        涉及漏洞的页面
        <el-tag>10个</el-tag>
        涉及漏洞的种类<el-tag>10种</el-tag>
      </div>
      <h2>用户监控</h2>
      累计浏览次数<el-tag>102400次</el-tag>，访问次数<el-tag>81212次</el-tag>，访问人数<el-tag>39280人</el-tag>
    </div>
    <div>近七日内，新增浏览次数<el-tag>102400次</el-tag>，新增访问次数<el-tag>81212次</el-tag>，新增访问人数<el-tag>39280人</el-tag>
    </div>
    <div>共封禁高危IP<el-tag type="danger">1000个</el-tag>,嫌疑IP<el-tag type="warning">1000个</el-tag>
    </div>
  </div>
</template>
