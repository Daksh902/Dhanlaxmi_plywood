import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const { data } = await axiosInstance.get('/projects');
  return data;
});

const projectSlice = createSlice({
  name: 'projects',
  initialState: { projects: [], loading: false },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
  },
});

export default projectSlice.reducer;
