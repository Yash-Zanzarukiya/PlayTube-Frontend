import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axios.helper";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: null,
};

export const publishVideo = createAsyncThunk("video/publishVideo", async (data) => {
  try {
    const response = await axiosInstance.post(`/videos`, data);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const getVideo = createAsyncThunk("video/getVideo", async (videoId) => {
  try {
    const response = await axiosInstance.get(`/videos/${videoId}`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const getAllVideos = createAsyncThunk("video/getAllVideos", async () => {
  try {
    // TESTME : Not Implemented
    const response = await axiosInstance.get(`/videos`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const updateVideo = createAsyncThunk("video/updateVideo", async (videoId, data) => {
  try {
    const response = await axiosInstance.patch(`/videos/${videoId}`, data);
    toast.success(response.data.message);
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const deleteVideo = createAsyncThunk("video/deleteVideo", async (videoId) => {
  try {
    const response = await axiosInstance.delete(`/videos/${videoId}`);
    toast.success(response.data.message);
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const togglePublish = createAsyncThunk("video/togglePublish", async (videoId) => {
  try {
    // THINKME : how it will work
    const response = await axiosInstance.patch(`/videos/toggle/publish/${videoId}`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const updateView = createAsyncThunk("video/updateView", async (videoId) => {
  try {
    const response = await axiosInstance.patch(`/videos/view/${videoId}`);
    toast.success(response.data.message);
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    // Get video
    builder.addCase(getVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(getVideo.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // Publish video
    builder.addCase(publishVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(publishVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(publishVideo.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // Get All videos
    builder.addCase(getAllVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(getAllVideos.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // delete video
    builder.addCase(deleteVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = null;
      state.status = true;
    });
    builder.addCase(deleteVideo.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // update video
    builder.addCase(updateVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(updateVideo.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // toggle Publish video
    builder.addCase(togglePublish.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(togglePublish.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(togglePublish.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // update view
    builder.addCase(updateView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateView.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
    });
    builder.addCase(updateView.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default videoSlice.reducer;
