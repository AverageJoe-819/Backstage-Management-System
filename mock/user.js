const Mock = require('mockjs')

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  superadmin: {
    token: 'superadmin-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a administrator',
    avatar: 'https://i.loli.net/2021/04/23/qLgueryNcS3ija8.gif',
    name: '师明骏',
    email: '672536763@qq.com',
    phonenumber: '17361041429',
    address: '192.168.3.103',
    time: '2021/4/26 11:16'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://i.loli.net/2021/04/23/YdJb6WsXP1meqT3.gif',
    name: '杜敏俐',
    email: '1078435904@qq.com',
    phonenumber: '18109076061',
    address: '192.168.3.103',
    time: '2021/4/26 11:16'
  },
  'superadmin-token': {
    roles: ['superadmin'],
    introduction: 'I am a super administrator',
    avatar: 'https://i.loli.net/2021/04/26/CUXqbw4MWKGtkAD.gif',
    name: '纪四维',
    email: 'jisiweiok@163.com',
    phonenumber: '18980838692',
    address: '192.168.3.103',
    time: '2021/4/26 11:16',

  }
}
const data = Mock.mock({
  'items': [{
    ip: '192.168.3.103',
    time1: '1h2m',
    time2: '2021/4/27 18:13'
  }, {
    ip: '192.168.3.103',
    time1: '1h2m',
    time2: '2021/4/27 18:13'
  }, {
    ip: '192.168.3.103',
    time1: '1h2m',
    time2: '2021/4/27 18:13'
  }, {
    ip: '192.168.3.103',
    time1: '1h2m',
    time2: '2021/4/27 18:13'
  }, {
    ip: '192.168.3.103',
    time1: '1h2m',
    time2: '2021/4/27 18:13'
  }, {
    ip: '192.168.3.103',
    time1: '1h2m',
    time2: '2021/4/27 18:13'
  }]
})

module.exports = [
  // user login
  {
    url: '/Backstage-Management-System/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/Backstage-Management-System/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/Backstage-Management-System/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  {
    url: '/Backstage-Management-System/user/list',
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
