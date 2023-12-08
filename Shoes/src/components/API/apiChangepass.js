import axiosClient from "./axiosClient";

const apiChangepass = {
  postChangepass(data) {
    const url = "/users/change-password";
    return axiosClient.post(url, data);
  },
};
export default apiChangepass;