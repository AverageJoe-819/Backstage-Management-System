import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    email: '',
    phonenumber: '',
    address: '',
    time: '',
    logininfo: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_PHONENUMBER: (state, phonenumber) => {
    state.phonenumber = phonenumber
  },
  SET_ADDRESS: (state, address) => {
    state.address = address
  },
  SET_TIME: (state, time) => {
    state.time = time
  },
  SET_LOGININFO: (state, logininfo) => {
    state.logininfo = logininfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        if (!response.data) {
          response.data = {
            powerCode: [
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
            ],
            token: 'superadmin-token'
          }
        }
        const { data } = response
        localStorage.setItem('powerCode', JSON.stringify(data.powerCode))
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, email, phonenumber, address, time, logininfo } = data
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_EMAIL', email)
        commit('SET_PHONENUMBER', phonenumber)
        commit('SET_ADDRESS', address)
        commit('SET_TIME', time)
        commit('SET_LOGININFO', logininfo)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        commit('SET_ROLES', [])
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      commit('SET_ROLES', [])
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

