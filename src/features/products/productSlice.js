import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (pageNumber) => {
  const { data } = await axiosInstance.get(`/products?pageNumber=${pageNumber}`);
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: false, pages: 1 },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.pages = action.payload.pages;
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
