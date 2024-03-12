import qs from 'qs';
import { store } from 'store/store';
import ConfigureAxios from './fetchApi';

const axiosConfig = new ConfigureAxios({
  configure: {
    method: 'GET',
    baseURL: process.env.REACT_APP_URL,
    timeout: 10000,
    paramsSerializer: qs.stringify,
  },
  setAccessToken() {
    return store.getState().auth.token ?? '';
  },
  setRefreshToken() {
    return '';
  },
});

const fetchAPI = axiosConfig.create();

axiosConfig.accessToken({
  setCondition(config) {
    return config?.url?.search(/^http/g) === -1;
  },
});

export default fetchAPI;
