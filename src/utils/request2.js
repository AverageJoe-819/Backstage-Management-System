import axios from 'axios'

const service2 = axios.create({
  baseURL: 'http://localhost:8080', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export default service2
