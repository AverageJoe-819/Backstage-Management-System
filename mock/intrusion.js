const { RuleTester } = require('eslint')
const Mock = require('mockjs')

const List = []


List.push(Mock.mock({
  id: '1',
  ip: '192.168.1.103',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.username',
  content: '3120170906313',
  status: '正常',
  time: '2021-05-16 23:23:23'
}))

List.push(Mock.mock({
  id: '2',
  ip: '192.168.1.103',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: 'smj999819',
  status: '正常',
  time: '2021-05-16 23:23:23'
}))

List.push(Mock.mock({
  id: '3',
  ip: '192.168.3.9',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.username',
  content: '; and 1=1 and 1=2',
  status: '恶意',
  time: '2021-05-16 23:25:51'
}))

List.push(Mock.mock({
  id: '4',
  ip: '192.168.3.9',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: '<script>alter(123)<script>',
  status: '恶意',
  time: '2021-05-16 23:26:01'
}))

List.push(Mock.mock({
  id: '5',
  ip: '192.168.3.9',
  url: 'http://www.xiaoma.com/news/',
  data: 'news.search',
  content: 'and 1=(select count(*) from admin where len(*)>0)',
  status: '恶意',
  time: '2021-05-16 23:27:36'
}))

List.push(Mock.mock({
  id: '6',
  ip: '192.168.101.61',
  url: 'http://www.xiaoma.com/news/',
  data: 'news.search',
  content: '比赛',
  status: '正常',
  time: '2021-05-16 23:33:41'
}))

List.push(Mock.mock({
  id: '7',
  ip: '192.168.101.61',
  url: 'http://www.xiaoma.com/news/',
  data: 'news.search',
  content: '书法比赛',
  status: '正常',
  time: '2021-05-16 23:33:46'
}))

List.push(Mock.mock({
  id: '8',
  ip: '192.168.101.61',
  url: 'http://www.xiaoma.com/news/',
  data: 'news.search',
  content: '比赛时间',
  status: '正常',
  time: '2021-05-16 23:34:02'
}))

List.push(Mock.mock({
  id: '9',
  ip: '192.168.1.107',
  url: 'http://www.xiaoma.com/news/',
  data: 'news.search',
  content: '足球',
  status: '正常',
  time: '2021-05-16 23:46:19'
}))

List.push(Mock.mock({
  id: '10',
  ip: '192.168.1.107',
  url: 'http://www.xiaoma.com/news/',
  data: 'news.search',
  content: '计算机学院',
  status: '正常',
  time: '2021-05-16 23:46:45'
}))

List.push(Mock.mock({
  id: '11',
  ip: '192.168.1.103',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.username',
  content: '3120170906313',
  status: '正常',
  time: '2021-05-17 00:01:09'
}))

List.push(Mock.mock({
  id: '12',
  ip: '192.168.1.103',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: 'smj999819',
  status: '正常',
  time: '2021-05-17 00:01:29'
}))

List.push(Mock.mock({
  id: '13',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.username',
  content: '31200170906111',
  status: '正常',
  time: '2021-05-17 00:04:33'
}))

List.push(Mock.mock({
  id: '14',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.username',
  content: '3120170906111',
  status: '正常',
  time: '2021-05-17 00:04:41'
}))


List.push(Mock.mock({
  id: '15',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: 'wx19990121',
  status: '正常',
  time: '2021-05-17 00:04:55'
}))

List.push(Mock.mock({
  id: '16',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: 'wangxue19990121',
  status: '正常',
  time: '2021-05-17 00:05:57'
}))



List.push(Mock.mock({
  id: '17',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: 'WX19990121',
  status: '正常',
  time: '2021-05-17 00:06:11'
}))

List.push(Mock.mock({
  id: '18',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login',
  data: 'login.password',
  content: 'WX999121',
  status: '正常',
  time: '2021-05-17 00:07:12'
}))

List.push(Mock.mock({
  id: '19',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login',
  data: 'login.password',
  content: 'WX19990121',
  status: '恶意',
  time: '2021-05-17 00:07:45'
}))

List.push(Mock.mock({
  id: '20',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.username',
  content: '3120170906305',
  status: '正常',
  time: '2021-05-17 00:08:21'
}))

List.push(Mock.mock({
  id: '20',
  ip: '192.168.101.67',
  url: 'http://www.xiaoma.com/login/',
  data: 'login.password',
  content: 'hexinda0912',
  status: '正常',
  time: '@now()'
}))


module.exports = [
  {
    url: '/Backstage-Management-System/intrusion/list',
    type: 'get',
    response: config => {
      const { status, ip, url, data, orderBy, orderField, page = 1, limit = 10 } = config.query

      let mockList = List.filter(item => {
        if (status && item.status !== status) return false
        if (ip && item.ip.toString().indexOf(ip) < 0) return false
        if (url && item.url.toString().indexOf(url) < 0) return false
        if (data && item.data.toString().indexOf(data) < 0) return false
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
