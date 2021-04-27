const Mock = require('mockjs')

const data = Mock.mock({
  'items|300': [{
    name: '@id',
    role: '@sentence(10, 20)',
    descripution: '@integer(300, 5000)'
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
