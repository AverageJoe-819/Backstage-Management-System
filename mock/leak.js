const { RuleTester } = require('eslint')
const Mock = require('mockjs')

const List = []
const count = 500

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@sentence(1)',
    url: '@sentence(3)',
    description: '@sentence(8, 10)',
    method: '@sentence(8,10)',
    'status|1': ['高', '中', '低'],
  }))
}

module.exports = [
  {
    url: '/Backstage-Management-System/leak/list',
    type: 'get',
    response: config => {
      const { status, name, url, page = 1, limit = 20 } = config.query

      let mockList = List.filter(item => {
        if (status && item.status !== status) return false
        if (name && item.name.indexOf(name) < 0) return false
        if (url && item.url.indexOf(url) < 0) return false
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
