import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

export const fetchTestimonials = createAsyncThunk('testimonials/fetchTestimonials', async () => {
  const { data } = await axiosInstance.get('/testimonials');
  return data;
});

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: { testimonials: [], loading: false },
  extraReducers: (builder) => {
    builder.addCase(fetchTestimonials.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTestimonials.fulfilled, (state, action) => {
      state.testimonials = action.payload;
      state.loading = false;
    });
  },
});

export default testimonialSlice.reducer;
