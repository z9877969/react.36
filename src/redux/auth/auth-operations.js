import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "../../utils/services/firebaseApi";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const data = await registerApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
