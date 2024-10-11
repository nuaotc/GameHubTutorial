import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "850b34ed69f44942ba6427cebe0a1d34",
  },
});
