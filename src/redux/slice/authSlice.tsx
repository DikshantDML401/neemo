import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface Error {
  message: string;
  code: number;
}

interface SignUp {
  loginType: string;
  email: string;
  password: string;
  confirmPassword: string;
  deviceToken: string;
  role: string;
}

interface AuthSliceState {
  userSignUpData: SignUp;
  isLoggedIn: boolean;
  error: Error | {};
  apiError: {[x: string]: any} | undefined;
}

const initialState: AuthSliceState = {
  userSignUpData: {
    loginType: 'EMAIL',
    role: 'U',
    email: '',
    password: '',
    confirmPassword: '',
    deviceToken: 'dhjjhhhjhkjhdskhhsdkhdsh',
  },
  apiError: undefined,
  isLoggedIn: false,
  error: {},
};

const AuthSliceState = createSlice({
  name: 'AuthSliceState',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<SignUp>) => {
      state.userSignUpData = action.payload;
      state.isLoggedIn = true;
    },
    userSignUpHandleChangeData: (state, {payload}) => {
      return {
        ...state,
        userSignUpData: {
          ...state.userSignUpData,
          [payload?.key]: payload?.value,
        },
      };
    },
    handleApiError: (state, {payload}) => {
      state.apiError = payload;
    },
  },
});

export const {setAuthentication, handleApiError, userSignUpHandleChangeData} =
  AuthSliceState.actions;

export const selectCount = (state: RootState) => state.AuthSliceState;

export default AuthSliceState.reducer;
