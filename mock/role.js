const Mock = require('mockjs')

const data = Mock.mock({
  'items': [{
    role: 'superadmin',
    username: '纪四维',
    description: '超级管理员，能访问所有路由'
  }, {
    role: 'admin',
    username: '师明骏',
    description: '高级管理员，不能访问权限管理'
  }, {
    role: 'editor',
    username: '杜敏俐',
    description: '普通管理员，不能访问权限管理和用户管理'
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
