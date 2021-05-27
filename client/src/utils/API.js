import axios from "axios";

export default {
  getSkills: function() {
    return axios.get("/skills");
  },
  getUsers: function() {
    return axios.get("/users");
  },
  getUserSkills: function() {
    return axios.get("/userSkills");
  },
  
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  saveUserSkills: function (userskillData) {
    return axios.post("/api/userSkill", userskillData);
  },

  loginCred: function (userData) {
    return axios.post("api/users/login", userData);
  }
};
