const { RuleTester } = require('eslint')
const Mock = require('mockjs')

const List = []

List.push(Mock.mock(
  {
    id: '1',
    name: 'SQL注入',
    url: 'http://www.xiaoma.com/news/',
    description: 'SQL注入就是指Web应用程序对用户输入的数据的合法性没有进行判断，前端传入后端的参数是攻击者可控的，并且参数中带有数据库查询，攻击者可以通过构造不同的SQL语句来实现对数据库的任意操作',
    method: '使用正则表达式匹配union、sleep、select等关键字，如果匹配到，那么就退出程序;也可以使用PHP中mysql_real_escape_string()函数过滤一些特殊字符',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '2',
    name: 'SQL注入',
    url: 'http://www.xiaoma.com/login/',
    description: 'SQL注入就是指Web应用程序对用户输入的数据的合法性没有进行判断，前端传入后端的参数是攻击者可控的，并且参数中带有数据库查询，攻击者可以通过构造不同的SQL语句来实现对数据库的任意操作',
    method: '过滤危险字符:使用正则表达式匹配union、sleep、select等关键字，如果匹配到，那么就退出程序；也可以使用PHP中mysql_real_escape_string()函数过滤一些特殊字符',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '3',
    name: 'SQL注入',
    url: 'http://www.xiaoma.com/system/',
    description: 'SQL注入就是指Web应用程序对用户输入的数据的合法性没有进行判断，前端传入后端的参数使攻击者可控的，并且参数中带有数据库查询，攻击者可以通过构造不同的SQL语句来实现对数据库的任意操作',
    method: '过滤危险字符:使用正则表达式匹配union、sleep、select等关键字，如果匹配到，那么就退出程序；也可以使用PHP中mysql_real_escape_string()函数过滤一些特殊字符',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '4',
    name: 'OS指令执行',
    url: 'http://www.xiaoma.com/news/',
    description: 'OS指令执行是为了通过网络接口在web服务器执行OS命令的一种技术。如果应用程序使用外部输入的字符串或受外部影响的字符串组装命令，并且没有经过正确的过滤，就可能导致OS命令的注入攻击',
    method: '过滤&、&&、|、||等字符，最好使用白名单；过滤方法不止在前端进行验证，还可以在服务器端再进行一次验证；要用最小权限去运行程序，不要给予程序多余的权；在命令执行错误时不要显示过多的细节，这样攻击者就不能通过错误提示得到更多的信息',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '5',
    name: 'OS指令执行',
    url: 'http://www.xiaoma.com/login/',
    description: 'OS指令执行是为了通过网络接口在web服务器执行OS命令的一种技术。如果应用程序使用外部输入的字符串或受外部影响的字符串组装命令，并且没有经过正确的过滤，就可能导致OS命令的注入攻击',
    method: '过滤&、&&、|、||等字符，最好使用白名单；过滤方法不止在前端进行验证，还可以在服务器端再进行一次验证；要用最小权限去运行程序，不要给予程序多余的权；在命令执行错误时不要显示过多的细节，这样攻击者就不能通过错误提示得到更多的信息',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '6',
    name: 'OS指令执行',
    url: 'http://www.xiaoma.com/system/',
    description: 'OS指令执行是为了通过网络接口在web服务器执行OS命令的一种技术。如果应用程序使用外部输入的字符串或受外部影响的字符串组装命令，并且没有经过正确的过滤，就可能导致OS命令的注入攻击',
    method: '过滤&、&&、|、||等字符，最好使用白名单；过滤方法不止在前端进行验证，还可以在服务器端再进行一次验证；要用最小权限去运行程序，不要给予程序多余的权；在命令执行错误时不要显示过多的细节，这样攻击者就不能通过错误提示得到更多的信息',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '7',
    name: '失效的身份验证',
    url: 'http://www.xiaoma.com/system/',
    description: '用户身份认证是一个应用程序中最关键的过程，有缺陷的设计会严重破坏这个过程。在开发Web应用程序时，开发人员通常会建立自定义的认证方案。但这些自定义的方案往往在如下方面存在漏洞：退出、密码管理、超时、记住我、秘密问题、帐户更新等等。因此攻击者就可以通过破坏密码、密钥、会话令牌或攻击其他的漏洞去冒充其他用户的身份',
    method: '区分公共区域和受限区域:站点的公共区域允许匿名用户访问，但是站点的受限区域只允许指定用户访问;支持密码的有效期:向用户提供可以在一段时间后修改密码的功能;能够禁用账户:在收到攻击后可以禁用账户来避免遭受进一步的损失;要求用户使用强密码;不要在网络上以纯文本方式传输用户名和密码:使用SSL对数据流进行加密，也可以对cookie进行加密',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '8',
    name: '暴力破解',
    url: 'http://www.xiaoma.com/login/',
    description: '暴力破解或称为穷举法，是一种针对于密码的破译方法，即将密码进行逐个推算直到找出真正的密码为止。例如一个已知是四位并且全部由数字组成的密码，其可能共有10000种组合，因此最多尝试10000次就能找到正确的密码。理论上利用这种方法可以破解任何一种密码，问题只在于如何缩短试误时间。有些人运用计算机来增加效率，有些人辅以字典来缩小密码组合的范围',
    method: '建议各位用ECS或其他VPS的站长不要将密码长度设置低于12位，同时也要数字、大小写字母、符号，混合组成，保证安全性;将SSH终端服务的端口由22修改为别的端口以防攻击黑客直接猜解您的服务器密码',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '9',
    name: '敏感数据泄露',
    url: 'http://www.xiaoma.com/system/',
    description: '攻击者不是直接攻击密码，而是在传输过程中或从客户端窃取密钥、发起中间人攻击，或从服务器端窃取明文数据，还有可能由于管理员的安全性不高，使用弱密码，被攻击者暴力破解，进入到数据库拿到敏感信息',
    method: '对系统处理、存储或传输的数据分类，并根据分类进行访问控制；对重要数据进行加密存放，数据在传输过程中使用密文进行传输；及时清理没有用的敏感数据，只能使用指定用户访问敏感数据',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '10',
    name: 'XML外部实体注入',
    url: 'http://www.xiaoma.com/news/',
    description: '如果攻击者可以上传XML文档或者在XML文档中添加恶意内容，通过易受攻击的代码、依赖项或集成，他们就能够攻击含有缺陷的XML处理器。XXE缺陷可用于提取数据、执行远程服务器请求、扫描内部系统、执行拒绝服务攻击和其他攻击',
    method: '尽可能使用简单的数据格式(如：JSON)，避免对敏感数据进行序列化；禁止使用外部实体，例如libxml_disable_entity_loader(true)；过滤用户提交的XML数据，防止出现非法内容',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '11',
    name: 'XML外部实体注入',
    url: 'http://www.xiaoma.com/login/',
    description: '如果攻击者可以上传XML文档或者在XML文档中添加恶意内容，通过易受攻击的代码、依赖项或集成，他们就能够攻击含有缺陷的XML处理器。XXE缺陷可用于提取数据、执行远程服务器请求、扫描内部系统、执行拒绝服务攻击和其他攻击',
    method: '尽可能使用简单的数据格式(如：JSON)，避免对敏感数据进行序列化；禁止使用外部实体，例如libxml_disable_entity_loader(true)；过滤用户提交的XML数据，防止出现非法内容',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '12',
    name: 'XML外部实体注入',
    url: 'http://www.xiaoma.com/system/',
    description: '如果攻击者可以上传XML文档或者在XML文档中添加恶意内容，通过易受攻击的代码、依赖项或集成，他们就能够攻击含有缺陷的XML处理器。XXE缺陷可用于提取数据、执行远程服务器请求、扫描内部系统、执行拒绝服务攻击和其他攻击',
    method: '尽可能使用简单的数据格式(如：JSON)，避免对敏感数据进行序列化；禁止使用外部实体，例如libxml_disable_entity_loader(true)；过滤用户提交的XML数据，防止出现非法内容',
    status: '中'
  }
))

List.push(Mock.mock(
  {
    id: '13',
    name: '失效的访问控制',
    url: 'http://www.xiaoma.com/system/',
    description: '攻击者通过修改 URL、内部应用程序状态或 HTML 页面绕过访问控制检查，或简单地使用自定义的 API 攻击工具；特权提升:在不登录的情况下假扮用户，或以用户身份登录时充当管理员；元数据操作:如重放或篡改 JWT 访问控制令牌，以此来修改cookie提升权限',
    method: '除公有资源外，其他资源默认情况下拒绝访问；使用一次性的访问控制机制，并在整个应用程序中不断重用它们；建立访问控制模型以强制执行所有权记录，而不是接受用户创建、读取、更新或删除的任何记录；当用户注销后，服务器上的JWT令牌应失效',
    status: '高'
  }
))



List.push(Mock.mock(
  {
    id: '14',
    name: '安全配置错误',
    url: 'http://www.xiaoma.com/',
    description: '攻击者能够通过未修复的漏洞、访问默认账户、不再使用的页面、未受保护的文件和目录、开放的不必要的端口等来取得对系统的未授权的访问，比如如果由于管理员的疏忽，/etc/passwd文件具有777的访问权限，这样攻击者就可以在拿到普通用户的身份后通过修改该文件拿到root权限',
    method: '使用的服务不包含任何不必要的功能、组件、文档和示例。移除或不安装不适用的功能和框架；及时检测系统服务版本，为已发现的漏洞打补丁；在对文件等分配权限时，根据其工作需要采取最小权限原则的方法',
    status: '低'
  }
))

List.push(Mock.mock(
  {
    id: '15',
    name: 'XSS 跨站脚本攻击',
    url: 'http://www.xiaoma.com/',
    description: '是一种针对网站的应用程序的安全漏洞攻击技术，是代码注入的一种。它允许用户将恶意代码注入网页，其他用户在访问时就会收到影响。恶意用户利用XSS代码攻击成功后，可以进行重定向、获取cookie值等内容',
    method: '对于截取cookie的XSS的防御可以在cookie上添加HttpOnly；过滤输入的数据',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '16',
    name: 'XSS 跨站脚本攻击',
    url: 'http://www.xiaoma.com/news/',
    description: '是一种针对网站的应用程序的安全漏洞攻击技术，是代码注入的一种。它允许用户将恶意代码注入网页，其他用户在访问时就会收到影响。恶意用户利用XSS代码攻击成功后，可以进行重定向、获取cookie值等内容',
    method: '对于截取cookie的XSS的防御可以在cookie上添加HttpOnly；过滤输入的数据',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '17',
    name: 'XSS 跨站脚本攻击',
    url: 'http://www.xiaoma.com/students/',
    description: '是一种针对网站的应用程序的安全漏洞攻击技术，是代码注入的一种。它允许用户将恶意代码注入网页，其他用户在访问时就会收到影响。恶意用户利用XSS代码攻击成功后，可以进行重定向、获取cookie值等内容',
    method: '对于截取cookie的XSS的防御可以在cookie上添加HttpOnly；过滤输入的数据',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '18',
    name: 'XSS 跨站脚本攻击',
    url: 'http://www.xiaoma.com/login/',
    description: '是一种针对网站的应用程序的安全漏洞攻击技术，是代码注入的一种。它允许用户将恶意代码注入网页，其他用户在访问时就会收到影响。恶意用户利用XSS代码攻击成功后，可以进行重定向、获取cookie值等内容',
    method: '对于截取cookie的XSS的防御可以在cookie上添加HttpOnly；过滤输入的数据',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '19',
    name: 'XSS 跨站脚本攻击',
    url: 'http://www.xiaoma.com/system/',
    description: '是一种针对网站的应用程序的安全漏洞攻击技术，是代码注入的一种。它允许用户将恶意代码注入网页，其他用户在访问时就会收到影响。恶意用户利用XSS代码攻击成功后，可以进行重定向、获取cookie值等内容',
    method: '对于截取cookie的XSS的防御可以在cookie上添加HttpOnly；过滤输入的数据',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '20',
    name: '不安全的反序列化',
    url: '未检测到',
    description: '无',
    method: '无',
    status: '无'
  }
))

List.push(Mock.mock(
  {
    id: '21',
    name: '使用含有已知漏洞的组件',
    url: 'http://www.xiaoma.com/student/',
    description: '由于现在的服务器都需要使用很多的组件，管理员并不能保证所使用的组件都是没有最新的，因此可能会存在一些版本是存在已知漏洞的(实际上比较新的版本的组件也是会存在漏洞的)，攻击者可以使用这些已知的漏洞来进行攻击，甚至获得管理员权限',
    method: '移除不使用的依赖、不需要的功能、组件、文件和文档；从官方渠道安全的获取组件，并使用签名机制来降低组件被篡改或加入恶意漏洞的风险；关注最新的漏洞报告，及时为需要的组件进行升级或者打补丁',
    status: '低'
  }
))

List.push(Mock.mock(
  {
    id: '22',
    name: 'CSRF攻击',
    url: 'http://www.xiaoma.com/login/',
    description: '攻击者盗用了你的身份，以你的名义发送恶意请求，对服务器来说这个请求是完全合法的，但是却完成了攻击者所期望的一个操作，比如以你的名义发送邮件、发消息，盗取你的账号，添加系统管理员，甚至于购买商品、虚拟货币转账等',
    method: '验证HTTP Referer字段;在请求地址中添加 token 并验证;在 HTTP 头中自定义属性并验证',
    status: '高'
  }
))

List.push(Mock.mock(
  {
    id: '22',
    name: '不足的日志记录和监控',
    url: 'http://www.xiaoma.com/system/',
    description: '攻击者依靠监控的不足和响应的不及时来达成他们的目标而不被知晓。比如日志没有记录登录失败，那么攻击者可能就可以通过暴力破解多次进行登录尝试，但是日志中却没有记录。这就可能让攻击者成功入侵系统并隐匿自己的行踪。这个看似危害不大但却是十分严重的危害，因为一个日志系统不完善的服务器很容易遭受攻击并且在遭受攻击后无法判断攻击来源，这样就无法做出相应的防御，很可能再次遭受同样的攻击',
    method: '确保所有登录、访问控制失败、输入验证失败能够被记录到日志中去，并保留足够的用户上下文信息，以识别可疑或恶意帐户，并为后期取证预留足够时间；建立有效的监控和告警机制，使可疑活动在可接受的时间内被发现和应对；完善日志系统，使其可以监控各种日志信息；及时对日志系统进行备份，并保存足够长时间',
    status: '低'
  }
))

module.exports = [
  {
    url: '/Backstage-Management-System/leak/list',
    type: 'get',
    response: config => {
      const { status, name, url, page = 1, limit = 10 } = config.query

      let mockList = List.filter(item => {
        if (status && item.status !== status) return false
        if (name && item.name.indexOf(name) < 0) return false
        if (url && item.url.indexOf(url) < 0) return false
        return true
      })

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
