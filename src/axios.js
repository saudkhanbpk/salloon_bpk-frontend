import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4600/",
  // baseURL: "https://lime-glorious-ant.cyclic.app"
  // baseURL: "https://salloon2k22.herokuapp.com/"
  // baseURL: "http://ec2-54-178-59-138.ap-northeast-1.compute.amazonaws.com:4600/",

  // baseURL:  "https://saloon-app-backend.herokuapp.com/",
});

export default instance;
