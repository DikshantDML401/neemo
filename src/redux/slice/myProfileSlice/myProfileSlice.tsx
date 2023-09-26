import {createSlice} from '@reduxjs/toolkit';
interface MyProfilePayload {
  name: string;
  email: string;
}

// Define a type for the slice state
interface MyProfilSlice {
  userProfileData: MyProfilePayload;
}

// Define the initial state using that type
const initialState: MyProfilSlice = {
  userProfileData: {
    name: '',
    email: '',
  },
};

export const MyProfilSlice = createSlice({
  name: 'MyProfilSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userProfileDataResetSlice: state => {
      state.userProfileData = {
        name: '',
        email: '',
      };
    },
    userProfileDataChange: (state, {payload}) => {
      return {
        ...state,
        userProfileData: {
          ...state.userProfileData,
          [payload?.key]: payload?.value,
        },
      };
    },
  },
});

export const {userProfileDataChange, userProfileDataResetSlice} =
  MyProfilSlice.actions;

export default MyProfilSlice.reducer;
