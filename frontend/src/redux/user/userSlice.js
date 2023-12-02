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
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  UpdateUserFailure,
  UpdateUserStart,
  UpdateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
