const Mock = require('mockjs')

const List = []
const count = 500

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment(1)',
    "content|1": ['text/html ：HTML格式;charset:utf-8;', 'text/plain ：纯文本格式;charset:utf-8;', 'text/xml ：XML格式;charset:utf-8;', 'image/gif ：gif图片格式;charset:utf-8;', 'application/xhtml+xml ：XHTML格式;charset:utf-8;', 'application/xml ： XML数据格式;charset:utf-8;', 'application/atom+xml：Atom XML聚合格式;charset:utf-8;', 'application/json：JSON数据格式;charset:utf-8;', 'application/pdf：pdf格式;charset:utf-8;', 'application/msword：Word文档格式;charset:utf-8;'],
    ip: '@ip', // 赋值的int型无法使用indexOf 需要转str
    "middleware|1": ['tomcat', 'jetty', 'apache', 'JBOSS', 'weblogic', 'websphere', 'glassfish', 'nginx'],
    "protocol|1": ['ftp(21/tcp)', 'www(80/tcp)', 'epmap(135/tcp)', 'netbios-ns(137/tcp)', 'smb(139/tcp)', 'cifs(445/tcp)', 'dce-rpc(1025/tcp)', 'mysql(3306/tcp)', 'unknown(5555/tcp)'],
    'status|1': ['成功', '失败'],
    time: '@now()'
  }))
}

module.exports = [
  {
    url: '/Backstage-Management-System/intrusion/list',
    type: 'get',
    response: config => {
      const { status, ip, orderBy, orderField, page = 1, limit = 20 } = config.query

      let mockList = List.filter(item => {
        if (status && item.status !== status) return false
        if (ip && item.ip.toString().indexOf(ip) < 0) return false
        return true
      })

      if (orderBy && orderField) { // 时间排序
        const sortDownDate = (a, b) => {
          return Date.parse(a.time) - Date.parse(b.time);
        }

        const sortUpDate = (a, b) => {
          return Date.parse(b.time) - Date.parse(a.time);
        }

        const sortFun = orderBy == 'asc' ? sortDownDate : sortUpDate

        mockList = mockList.sort(sortFun)
      }

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
