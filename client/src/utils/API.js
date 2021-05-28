import axios from "axios";

export default {
  getSkills: function () {
    return axios.get("/skills");
  },
  getDays: function () {
    return axios.get("/day");
  },
  getTimes: function () {
    return axios.get("/time");
  },
  getSkillsData: function (id) {
    return axios.get("/skillsList/" + id);
  },
  getUsers: function () {
    return axios.get("/users");
  },
  getUserSkills: function (id) {
    return axios.get("/userSkills/" + id);
  },

  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  saveUserSkills: function (userskillData) {
    return axios.post("/api/userSkill", userskillData);
  },
  saveUserDays: function (userdayData) {
    return axios.post("/api/userDay", userdayData);
  },
  saveUserTimes: function (usertimeData) {
    return axios.post("/api/userTime", usertimeData);
  },

  loginCred: function (userData) {
    return axios.post("api/users/login", userData);
  },
};
