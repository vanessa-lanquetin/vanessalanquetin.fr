import axios from "axios"
export default axios.create({
  baseURL: import.meta.env.VUE_APP_SERVER_URL +':' + import.meta.env.VUE_APP_SERVER_PORT
})