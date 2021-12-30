import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";
const initialState = {
  user: {
    localId: null,
    email: null,
    idToken: null,
    refreshToken: null,
  },
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },
    [register.fulfilled]: (state, { payload }) => {
      return { ...state, isLoading: false, user: payload };
    },
    [register.rejected]: (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    },
  },
});
export default authSlice.reducer;
