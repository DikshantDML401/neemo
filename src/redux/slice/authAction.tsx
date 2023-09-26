import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import authService from '../../api/services/auth.service';

interface SignUpPayload {
  loginType: string;
  role: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  deviceToken: string;
}

interface LoginResponse {
  data: {[x: string]: string};
  code: number;
  message: string;
}
// Thunk for user sign up
export const userSignUp = createAsyncThunk<
  LoginResponse,
  SignUpPayload,
  {rejectValue: SerializedError}
>('user/signup', async (data: SignUpPayload, thunkApi: any) => {
  try {
    const response = await authService.userSignUp(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error as SerializedError);
  }
});
