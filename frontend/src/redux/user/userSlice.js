import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateUserStart: (state) => {
      state.loading = true;
    },
    UpdateUserSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    UpdateUserFailure: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signOut :(state) => {
      state.currentUser =null;
      state.loading =false;
      state.error =false;
    },
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  UpdateUserFailure,
  UpdateUserStart,
  UpdateUserSuccess,
  signOut
} = userSlice.actions;
export default userSlice.reducer;
