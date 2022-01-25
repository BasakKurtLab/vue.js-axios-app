import axios from "axios"

const instance = axios.create({
  baseURL : "https://vue-myblog-5a0a3-default-rtdb.firebaseio.com/",
})
// instance.defaults.headers.common[""]

export default instance;
