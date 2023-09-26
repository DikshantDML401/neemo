import axios, {AxiosInstance} from 'axios';
import {getBaseUrl} from './constants';
import {handleApiError} from '../redux/slice/authSlice';
import {store} from '../redux/store/store';
import {getLocalStorage} from './asyncStorage/storage';

// Create an Axios instance with the specified base URL
const instance: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

// Add request interceptor
instance.interceptors.request.use(
  async config => {
    // Get the token from local storage
    const token = await getLocalStorage('token'); // Corrected the typo in 'getLocalStorage'
    if (token) {
      // Add the token to the request headers for authorization
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  },
);

// Add response interceptor
instance.interceptors.response.use(
  response => {
    // Return the data from the response
    return response?.data;
  },
  error => {
    // Handle response error
    console.log(error, 'response======>');
    if (error?.response?.data) {
      // Handle response error code based on response
      store.dispatch(handleApiError(error?.response.data));
      return Promise.reject(error?.response?.data);
    } else {
      return Promise.reject(error);
    }
  },
);

export default instance;
