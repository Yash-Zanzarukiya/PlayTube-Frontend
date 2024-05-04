import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  userData: null,
};

export const register = createAsyncThunk("user/register", async (data) => {
  try {
    const response = await axiosInstance.post("/users/register", data);
    toast.success("Account Created successfully 🥳");
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const channelProfile = createAsyncThunk("user/channelprofile", async (username) => {
  try {
    const response = await axiosInstance.get(`/users/c/${username}`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //register user
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.status = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
      state.userData = action.payload;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    //get Channel Profile
    builder.addCase(channelProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(channelProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
      state.userData = action.payload;
    });
    builder.addCase(channelProfile.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default userSlice.reducer;
