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
  userSignUpData: SignUp;
  isLoggedIn: boolean;
  error: Error | {};
}

const initialState: AuthSliceState = {
  userSignUpData: {
    loginType: 'EMAIL',
    role: 'U',
    email: '',
    password: '',
    confirmPassword: '',
    token: '',
  },
  isLoggedIn: false,
  error: {},
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<SignUp>) => {
      state.userSignUpData = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const {setAuthentication} = authSlice.actions;

export default authSlice.reducer;
