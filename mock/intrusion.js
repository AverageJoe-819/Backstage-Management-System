const Mock = require('mockjs')

const data = Mock.mock({
  'items|300': [{
    id: '@id',
    content: '@sentence(10, 20)',
    'status|1': ['成功', '失败'],
    server: '@sentence(1)',
    time: '@datetime',
    protocol: '@sentence(1)',
    ip: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/Backstage-Management-System/intrusion/list',
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
