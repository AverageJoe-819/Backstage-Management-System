<template>
  <div
    v-loading="listLoading"
    class="container"
    :data="list"
  >
    <el-row
      :gutter="20"
      style="padding:50px;
            display:flex;
            flex-wrap:wrap"
      type="flex"
      align="top"
      class="row-container"
    >
      <el-col span="12">
        <el-card style="margin-bottom:20px;">
          <div
            slot="header"
            class="clearfix"
          >
            <mallki
              class-name="mallki-text"
              :text="$t('website.info')"
              style="font-size:30px"
            />
          </div>
          <el-row>
            <el-col span="8">
              <p>{{ $t('website.url') }}:</p>
              <p>{{ $t('website.ip') }}:</p>
              <p>{{ $t('website.connection') }}:</p>
              <p>{{ $t('website.date') }}:</p>
              <p>{{ $t('website.title') }}:</p>
              <p>{{ $t('website.subdomain') }}:</p>
              <p>{{ $t('website.type') }}:</p>
              <p>{{ $t('website.encoding') }}:</p>
              <p>{{ $t('website.code') }}:</p>
              <p>{{ $t('website.transfer') }}:</p>
              <p>{{ $t('website.x') }}:</p>
            </el-col>
            <el-col span="16">
              <p><strong>http://www.xiaoma.com/</strong></p>
              <p><strong>192.168.1.103</strong></p>
              <p><strong>keep-alive</strong></p>
              <p><strong>2021-5-13 20:38:11 </strong></p>
              <p><strong>{{ title }}</strong></p>
              <p><strong>5</strong></p>
              <p><strong>text/html; charset=UTF-8</strong></p>
              <p><strong>gzip</strong></p>
              <p><strong>200</strong></p>
              <p><strong>chunked</strong></p>
              <p><strong>PHP/5.6.40-38+ubuntu20.04.1+deb.sury.org+1</strong></p>
            </el-col>
          </el-row>
        </el-card>
        <el-card>
          <div
            slot="header"
            class="clearfix"
          >
            <mallki
              class-name="mallki-text"
              :text="$t('website.Portservices')"
              style="font-size:30px"
            />
          </div>
          <el-row>
            <el-col span="8">
              <p>{{ $t('website.country') }}:
              </p>
              <p>{{ $t('website.server') }}:
              </p>
              <p> {{ $t('website.port') }}:</p>
              <p>{{ $t('website.components') }}:
              </p>
            </el-col>
            <el-col span="16">
              <p><strong>CN</strong>
                <span>
                  <svg-icon icon-class="CN" />
                </span>
              </p>
              <p><strong>nginx/1.19.0</strong>
                <span>
                  <svg-icon icon-class="Nginx" />
                </span>
              </p>
              <p><strong>9493</strong></p>
              <p><strong>nginx/1.19.0</strong>
                <span>
                  <svg-icon icon-class="Nginx" />
                </span>、<strong>apache/2.12.1</strong>
                <span>
                  <svg-icon icon-class="apache" />
                </span>、<strong>PHP/7.1.3</strong>
                <span>
                  <svg-icon icon-class="PHP" />
                </span>、<strong>DreamWeaver/3.7.8</strong>
                <span>
                  <svg-icon icon-class="Dw" />
                </span>、<strong>Ubuntu/3.8.2</strong>
                <span>
                  <svg-icon icon-class="ubuntu" />
                </span>
              </p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col span="12">
        <el-card
          body-style=" background-color:#F2F6FC;
        height:660px;"
          style="overflow:scroll;overflow-x:hidden"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <mallki
              class-name="mallki-text"
              :text="$t('website.pagesource')"
              style="font-size:30px"
            />
          </div>

          <pre
            class="htmlcode"
            style="margin-top:0px;"
          >
            <code>
&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01
Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
&lt;html>&lt;!-- InstanceBegin template="/Templates/
main_dynamic_template.dwt.php"
codeOutsideHTMLIsLocked="false" -->
&lt;head>
&lt;meta http-equiv="Content-Type" content="text/html;
charset=iso-8859-2">
&lt;!-- InstanceBeginEditable name="document_title_rgn" --
>
&lt;title>Home of Acunetix Art&lt;/title>
&lt;!-- InstanceEndEditable -->
&lt;link rel="stylesheet" href="style.css" type="text/css">
&lt;!-- InstanceBeginEditable name="headers_rgn" -->
&lt;!-- here goes headers headers -->
&lt;!-- InstanceEndEditable -->
&lt;script language="JavaScript" type="text/JavaScript">
&lt;!--
function MM_reloadPage(init) { //reloads the window if
Nav4 resized
if (init==true) with (navigator) {if
((appName=="Netscape")(parseInt(appVersion)==4)) {
document.MM_pgW=innerWidth;
document.MM_pgH=innerHeight;
onresize=MM_reloadPage; }}
else if (innerWidth!=document.MM_pgW || innerHeight!
=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->&lt;/script>
&lt;/head>
&lt;body>
&lt;div id="mainLayer" style="position:absolute;
width:700px; z-index:1">
&lt;div id="masthead">
&lt;h1 id="siteName">&lt;a href="https://
www.acunetix.com/">&lt;img src="images/logo.gif"
width="306" height="38" border="0" alt="Acunetix website
security">&lt;/a>&lt;/h1>
&lt;h6 id="siteInfo">TEST and Demonstration site for &lt;a
href="https://www.acunetix.com/vulnerability-
scanner/">Acunetix Web Vulnerability Scanner&lt;/a>&lt;/h6>
&lt;div id="globalNav">
&lt;table border="0" cellpadding="0" cellspacing="0"
width="100%">&lt;tr>
&lt;td align="left">
&lt;a href="index.php">home&lt;/a> | &lt;a
href="categories.php">categories&lt;/a> | &lt;a
href="artists.php">artists
&lt;/a> | &lt;a href="disclaimer.php">disclaimer&lt;/a> |
&lt;a href="cart.php">your cart&lt;/a> |
&lt;a href="guestbook.php">guestbook&lt;/a> |
&lt;a href="AJAX/index.php">AJAX Demo&lt;/a>
&lt;/td>
&lt;td align="right">
&lt;/td>
&lt;/tr>&lt;/table>
&lt;/div>
&lt;/div>
&lt;!-- end masthead -->
&lt;!-- begin content -->
&lt;!-- InstanceBeginEditable name="content_rgn" -->
&lt;div id="content">
&lt;h2 id="pageName">welcome to our page&lt;/h2>
&lt;div class="story">
&lt;h3>Test site for Acunetix WVS.&lt;/h3>
&lt;/div>
&lt;/div>&lt;!-- InstanceEndEditable -->
&lt;!--end content -->
&lt;div id="navBar">
&lt;div id="search">
&lt;form action="search.php?test=query" method="post">
&lt;label>search art&lt;/label>
&lt;input name="searchFor" type="text" size="10">
&lt;input name="goButton" type="submit" value="go">
&lt;/form>
&lt;/div>
&lt;div id="sectionLinks">
&lt;ul>
&lt;li>&lt;a href="categories.php">Browse categories&lt;/
a>&lt;/li>
&lt;li>&lt;a href="artists.php">Browse artists&lt;/a>&lt;/li>
&lt;li>&lt;a href="cart.php">Your cart&lt;/a>&lt;/li>
&lt;li>&lt;a href="login.php">Signup&lt;/a>&lt;/li>
&lt;li>&lt;a href="userinfo.php">Your profifile&lt;/a>&lt;/li>
&lt;li>&lt;a href="guestbook.php">Our guestbook&lt;/a>&lt;/
li>
&lt;li>&lt;a href="AJAX/index.php">AJAX Demo&lt;/
a>&lt;/li>
&lt;/li>
&lt;/ul>
&lt;/div>
&lt;div class="relatedLinks">
&lt;h3>Links&lt;/h3>
&lt;ul>
&lt;li>&lt;a href="http://www.acunetix.com">Security art&lt;/
a>&lt;/li>
&lt;li>&lt;a href="https://www.acunetix.com/vulnerability-
scanner/php-security-scanner/">PHP scanner&lt;/a>&lt;/li>
&lt;li>&lt;a href="https://www.acunetix.com/blog/articles/
prevent-sql-injection-vulnerabilities-in-php-
applications/">PHP vuln help&lt;/a>&lt;/li>
&lt;li>&lt;a href="http://www.eclectasy.com/Fractal-
Explorer/index.html">Fractal Explorer&lt;/a>&lt;/li>
&lt;/ul>
&lt;/div>
&lt;div id="advert"> &lt;p>
&lt;object classid="clsid:D27CDB6E-
AE6D-11cf-96B8-444553540000" codebase="http://
download.macromedia.com/pub/shockwave/cabs/flflash/
swflflash.cab#version=6,0,29,0" width="107" height="66">
&lt;param name="movie" value="Flash/add.swf">
&lt;param name=quality value=high>
&lt;embed src="Flash/add.swf" quality=high
pluginspage="http://www.macromedia.com/shockwave/
download/index.cgi?P1_Prod_Version=ShockwaveFlash"
type="application/x-shockwave-flflash" width="107"
height="66">&lt;/embed>
&lt;/object>
&lt;/p>
&lt;/div>
&lt;/div>
&lt;!--end navbar -->
&lt;div id="siteInfo"> &lt;a href="http://
www.acunetix.com">About Us&lt;/a> | &lt;a
href="privacy.php">Privacy Policy&lt;/a> | &lt;a
href="mailto:wvs@acunetix.com">Contact Us&lt;/a> | &lt;a
href="/Mod_Rewrite_Shop/">Shop&lt;/a> | &lt;a href="/
hpp/">HTTP Parameter Pollution&lt;/a> | ©2019
Acunetix Ltd
&lt;/div>
&lt;br>
&lt;div style="background-color:lightgray;width:100%;text-
align:center;font-size:12px;padding:1px">
&lt;p style="padding-left:5%;padding-
right:5%">&lt;b>Warning&lt;/b>: This is not a real shop. This
is an example PHP application, which is intentionally
vulnerable to web attacks. It is intended to help you test
Acunetix. It also helps you understand how developer
errors and bad confifiguration may let someone break into
your website. You can use it to test other tools and your
manual hacking skills as well. Tip: Look for potential SQL
Injections, Cross-site Scripting (XSS), and Cross-site
Request Forgery (CSRF), and more.&lt;/p>&lt;/div>
&lt;/div>
&lt;/body>
&lt;!-- InstanceEnd -->&lt;/html>
            </code>
          </pre>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import Mallki from '@/components/TextHoverEffect/Mallki'
import { fetchWebsite } from '@/api/website'
export default {
  components: { Mallki },
  data() {
    return {
      list: null,
      listLoading: true,
      title: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchWebsite(this.listQuery).then(response => {
        this.list = response.data.items
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
        console.log(this.list)
      })
    }
  }
}

</script>

<style>
.row-container .el-card__body {
  padding: 0px 20px;
}
</style>
