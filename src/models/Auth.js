import API from "../service/API"
class Auth {
  constructor() {
    /** @type {string} */
    this.token = localStorage.getItem('token')
    API.defaults.headers.token = this.token
  }

  /**
   * @param {string} email
   * @param {string} password
   * @returns 
   */
  async login(email, password) {
    const { data: token } = await API.post(`/auth/login`, { email, password })
    this.token = token
    localStorage.setItem('token', token)
    API.defaults.headers.token = token
    return token
  }
  async isAuthenticated() {
    return API.get(`/auth`)
      .then(() => true)
      .catch(() => false)
  }
}


export default new Auth()