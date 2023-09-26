import {configureStore} from '@reduxjs/toolkit';
// import authSliceReducer from './path/to/authSliceReducer';
import authSliceReducer from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
