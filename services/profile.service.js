import { axios, HeaderDefault } from "./base.service";

export function getProfile(payload) {
  return axios({
    url: `/user`,
    params: { payload },
    method: "get",
    ...HeaderDefault(),
  }).then((res) => res?.data?.data);
}
