const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  email: state => state.user.email,
  phonenumber: state => state.user.phonenumber,
  address: state => state.user.address,
  time: state => state.user.time,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes
}
export default getters
