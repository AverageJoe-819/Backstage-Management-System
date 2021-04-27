const Mock = require('mockjs')
const data = Mock.mock({
  'items|100': [{
    id: '@id',
    content: '@sentence(10, 20)',
    'status1|1': ['高危', '嫌疑'],
    'status2|1': ['已禁用', '已启用'],
    descripution: '@sentence(3)',
    time: '@datetime',
    protocol: '@sentence(1)',
    ip: '@integer(300, 5000)',
    handler: '@cname',
    submitter: '@cname'
  }]
})

module.exports = [
  {
    url: '/Backstage-Management-System/blacklist/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
