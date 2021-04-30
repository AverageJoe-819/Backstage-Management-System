const Mock = require('mockjs')

const List = []
const count = 500

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    content: '@sentence(5,10)',
    ip: '@integer(300, 5000)', // 赋值的int型无法使用indexOf 需要转str
    middleware: '@name',
    protocol: '@name',
    'status|1': ['成功', '失败'],
    time: '@datetime'
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
