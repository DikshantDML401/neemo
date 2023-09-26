import {configureStore} from '@reduxjs/toolkit';
// import authSliceReducer from './path/to/authSliceReducer';
import AuthSliceState from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    AuthSliceState: AuthSliceState,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
