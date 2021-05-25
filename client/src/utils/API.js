import axios from "axios";

export default {
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  loginCred: function (userData) {
    return axios.post("api/users/login", userData);
  }
};
