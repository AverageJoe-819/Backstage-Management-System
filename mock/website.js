const Mock = require('mockjs')

const List = []

List.push(Mock.mock({
  url: 'http://www.xiaoma.com/',
  IP: '192.168.1.103',
  connection: 'keep-alive',
  date: '2021-5-13 20:38:11',
  title: '小马大学',
  subdomain: '5',
  type: 'text/html; charset=UTF-8',
  encoding: 'gzip',
  code: '200',
  transfer: 'chunked',
  x: 'PHP/5.6.40-38+ubuntu20.04.1+deb.sury.org+1',
  country: 'CN',
  server: 'nginx/1.19.0',
  port: '9493',
  components: 'nginx/1.19.0',
  htmlcode: '1'
}))

module.exports = [
  {
    url: '/Backstage-Management-System/website/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          items: items
        }
      }
    }
  }]