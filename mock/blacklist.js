const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    handler: '@cname',
    submitter: '@cname',
    description: '@sentence(5, 10)',
    ip: '@integer(300, 5000)',
    'status1|1': ['高危', '嫌疑'],
    'status2|1': ['已启用', '已禁用'],
    time: '@datetime'
  }))
}
module.exports = [
  {
    url: '/Backstage-Management-System/blacklist/list',
    type: 'get',
    response: config => {
      const { status1, status2, ip, page = 1, limit = 20 } = config.query

      let mockList = List.filter(item => {
        if (status1 && item.status1 !== status1) return false
        if (status2 && item.status2 !== status2) return false
        if (ip && item.ip.indexOf(ip) < 0) return false
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
