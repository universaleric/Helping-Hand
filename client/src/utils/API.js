import axios from "axios";

export default {
  getSkills: function() {
    return axios.get("/skills");
  },
  
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  loginCred: function (userData) {
    return axios.post("api/users/login", userData);
  }
};
