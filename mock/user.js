const Mock = require('mockjs')

const tokens = {
  admin: {
    token: 'admin-token',
    powerCode: [
      'website',
      'detection1',
      'detection2',
      'monitoring',
      'management1',
      'assessment',
      'menu1',
      'menu2',
      'link',
      'csdn'
    ]
  },
  editor: {
    token: 'editor-token',
    powerCode: [
      'detection1',
      'detection2',
      'website',
      'monitoring',
      'assessment',
      'menu1',
      'menu2',
      'link',
      'csdn'
    ]
  },
  superadmin: {
    token: 'superadmin-token',
    powerCode: [
      'website',
      'detection1',
      'detection2',
      'monitoring',
      'management1',
      'management2',
      'assessment',
      'menu1',
      'menu2',
      'link',
      'csdn'
    ]
  }
}

const users = Mock.mock({
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a administrator',
    avatar: 'https://i.loli.net/2021/04/23/qLgueryNcS3ija8.gif',
    name: '师明骏',
    email: '672536763@qq.com',
    phonenumber: '17361041429',
    address: '192.168.3.103',
    time: '@now'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://i.loli.net/2021/04/23/YdJb6WsXP1meqT3.gif',
    name: '杜敏俐',
    email: '1078435904@qq.com',
    phonenumber: '18109076061',
    address: '192.168.3.103',
    time: '@now'
  },
  'superadmin-token': {
    roles: ['superadmin'],
    introduction: 'I am a super administrator',
    avatar: 'https://i.loli.net/2021/04/26/CUXqbw4MWKGtkAD.gif',
    name: '纪四维',
    email: 'jisiweiok@163.com',
    phonenumber: '18980838692',
    address: '192.168.3.103',
    time: '@now',
  }
})

const data = Mock.mock({
  'logininfo': [{
    'ip|1': ['192.168.3.103', '192.168.1.61', '192.168.101.67'],
    'time1|1-60': 60,
    'time2|1': ['2021-5-21 13:35:27', '2021-5-21 11:45:23', '2021-5-21 12:11:07']
  }, {
    'ip|1': ['192.168.3.103', '192.168.1.61', '192.168.101.67'],
    'time1|1-60': 60,
    'time2|1': ['2021-5-20 12:14:53', '2021-5-20 15:21:34', '2021-5-20 09:16:33']
  }, {
    'ip|1': ['192.168.3.103', '192.168.1.61', '192.168.101.67'],
    'time1|1-60': 60,
    'time2|1': ['2021-5-19 14:25:12', '2021-5-19 11:13:23', '2021-5-19 14:41:12']
  }, {
    'ip|1': ['192.168.3.103', '192.168.1.61', '192.168.101.67'],
    'time1|1-60': 60,
    'time2|1': ['2021-5-18 13:35:27', '2021-5-18 11:45:23', '2021-5-18 12:11:07']
  }, {
    'ip|1': ['192.168.3.103', '192.168.1.61', '192.168.101.67'],
    'time1|1-60': 60,
    'time2|1': ['2021-5-17 15:45:33', '2021-5-17 12:26:13', '2021-5-17 17:41:23']
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
      const logininfo = data.logininfo
      return {
        code: 20000,
        data: {
          logininfo: logininfo
        }
      }
    }
  }
]
