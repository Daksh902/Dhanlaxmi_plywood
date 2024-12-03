import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

export const submitContact = createAsyncThunk('contact/submitContact', async (contactData) => {
  await axiosInstance.post('/contact', contactData);
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: { success: false, loading: false },
  extraReducers: (builder) => {
    builder.addCase(submitContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(submitContact.fulfilled, (state) => {
      state.success = true;
      state.loading = false;
    });
  },
});

export default contactSlice.reducer;
