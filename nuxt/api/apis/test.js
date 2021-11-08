function TestApi(axios) {
  const url = '/index';
  return axios.get(url);
}

export default {
  TestApi
};