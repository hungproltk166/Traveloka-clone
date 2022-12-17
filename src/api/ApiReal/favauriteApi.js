const { default: axiosClient } = require("../axiosClient");

const favauriteApi = {
  post: (data) => {
    const url = `/favaurite`;
    return axiosClient.post(url, data);
  },
  getAll: () => {
    const url = `/favaurite`;
    return axiosClient.get(url);
  },
  delete: (data) => {
    const url = `/favaurite/${data}`;
    return axiosClient.post(url);
  },
};

export default favauriteApi;
