const Mock = require('mockjs')

const data = Mock.mock({
  'items|300': [{
    title: '@sentence(3, 5)',
    'status|1': ['高', '中', '低'],
    page: '@sentence(3,5)',
    time: '@datetime',
    description: '@sentence(10,20)',
    method: '@sentence(10,20)'
  }]
})

module.exports = [
  {
    url: '/Backstage-Management-System/leak/list',
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
