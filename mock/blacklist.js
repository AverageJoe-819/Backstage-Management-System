const Mock = require('mockjs')

const List = []
const count = 500

List.push(Mock.mock({
  id: '1',
  handler: '师明骏',
  submitter: '师明骏',
  description: '登录界面输入非法，存在恶意输入的情况',
  ip: '192.168.1.103', // 赋值的int型无法使用indexOf 需要转str
  status1: '高危',
  status2: '已禁用',
  time: '2021-5-17 11:01:08'
}))

List.push(Mock.mock({
  id: '2',
  handler: '师明骏',
  submitter: '杜敏俐',
  description: '访问次数过多',
  ip: '192.168.3.9', // 赋值的int型无法使用indexOf 需要转str
  status1: '嫌疑',
  status2: '已启用',
  time: '2021-5-17 11:55:24'
}))

List.push(Mock.mock({
  id: '3',
  handler: '纪四维',
  submitter: '杜敏俐',
  description: '访问次数过多',
  ip: '192.168.101.61', // 赋值的int型无法使用indexOf 需要转str
  status1: '嫌疑',
  status2: '已启用',
  time: '2021-5-17 17:31:19'
}))

List.push(Mock.mock({
  id: '4',
  handler: '纪四维',
  submitter: '师明骏',
  description: '非正常时间高频率登录',
  ip: '192.168.1.107', // 赋值的int型无法使用indexOf 需要转str
  status1: '嫌疑',
  status2: '已禁用',
  time: '2021-5-18 09:14:21'
}))

List.push(Mock.mock({
  id: '5',
  handler: '纪四维',
  submitter: '纪四维',
  description: '登录界面提交错误密码次数过多',
  ip: '192.168.101.67', // 赋值的int型无法使用indexOf 需要转str
  status1: '嫌疑',
  status2: '已禁用',
  time: '2021-5-18 10:52:11'
}))

module.exports = [
  {
    url: '/Backstage-Management-System/blacklist/list',
    type: 'get',
    response: config => {
      const { status1, status2, ip, orderBy, orderField, page = 1, limit = 10 } = config.query

      let mockList = List.filter(item => {
        if (status1 && item.status1 !== status1) return false
        if (status2 && item.status2 !== status2) return false
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
