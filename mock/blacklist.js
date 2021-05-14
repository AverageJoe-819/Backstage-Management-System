const Mock = require('mockjs')
//模拟黑名单的数据规则
const List = []
const count = 500

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    "handler|1": ['师明骏', '纪四维'],
    "submitter|1": ['师明骏', '杜敏俐'],
    "description|1": ['访问次数过多', '浏览次数过多', '访问频率过高', '浏览频率过高', '非正常时间访问', '非正常时间访问', '高危IP', '嫌疑IP', '停留时间过长'],
    ip: '@ip', // 赋值的int型无法使用indexOf 需要转str
    'status1|1': ['高危', '嫌疑'],
    'status2|1': ['已启用', '已禁用'],
    time: '@now'
  }))
}
module.exports = [
  {
    url: '/Backstage-Management-System/blacklist/list',
    type: 'get',
    response: config => {
      const { status1, status2, ip, orderBy, orderField, page = 1, limit = 20 } = config.query

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
//导出的配置