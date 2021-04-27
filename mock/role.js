const Mock = require('mockjs')

const data = Mock.mock({
  'items|5': [{
    role: '@id',
    username: '@sentence(10, 20)',
    descripution: '@sentence(1)'
  }]
})

module.exports = [
  {
    url: '/Backstage-Management-System/role/list',
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
