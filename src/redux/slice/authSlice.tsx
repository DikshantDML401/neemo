import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface Error {
  message: string;
  code: number;
}
interface SignUp {
  loginType: string;
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
  role: string;
}

interface AuthSliceState {
  [s: string]: any;
  userSignUpDate: SignUp;
  isLoggedin: boolean;
  error: Error | {};
}

const initialState: AuthSliceState = {
  userSignUpDate: {
    loginType: 'EMAIL',
    role: 'U',
    email: '',
    password: '',
    confirmPassword: '',
    deviceToken: 'aa',
    error: {},
  },
};
