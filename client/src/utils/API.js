import axios from "axios";

export default {
  getSkills: function() {
    return axios.get("/skills");
  },
  getSkillsData: function(id) {
    return axios.get("/skillsList/" + id);
  },
  getUsers: function() {
    return axios.get("/users");
  },
  getUserSkills: function(id) {
    return axios.get("/userSkills/" + id);
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
