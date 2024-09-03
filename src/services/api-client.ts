import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3a63a5d707b411299fc5f343880a3f9",
  },
});
