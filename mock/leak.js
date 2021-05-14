const { RuleTester } = require('eslint')
const Mock = require('mockjs')

const List = []
const count = 500

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment(0)',
    "name|1": ['SQL中可能允许远程执行代码漏洞', '跨站点脚本编制', '失效的身份认证', '失效的会话管理', '失效的访问控制', 'SQL注入', 'OS注入', 'XSS跨站脚本攻击', '敏感数据泄露', 'XML外部实体攻击', '安全配置错误', '不安全的反序列化', '使用含已知漏洞的组件', '不足的日志记录和监控'],
    "url|1": ['http://www.xiaoma.com/', 'http://www.xiaoma.com/student/', 'http://www.xiaoma.com/system/', 'http://www.xiaoma.com/register/', 'http://www.xiaoma.com/login/', 'http://www.xiaoma.com/news/', 'http://www.xiaoma.com/activity/'],
    description: '@cword(20,30)',
    method: '@cword(20,30)',
    'status|1': ['高', '中', '低'],
  }))
}

module.exports = [
  {
    url: '/Backstage-Management-System/leak/list',
    type: 'get',
    response: config => {
      const { status, name, url, page = 1, limit = 20 } = config.query

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
