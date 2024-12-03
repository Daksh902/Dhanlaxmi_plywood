// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import projectReducer from './features/projects/projectSlice';
import testimonialReducer from './features/testimonials/testimonialSlice'; 
import contactReducer from './features/contact/contactSlice';
import adminReducer from './features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    projects: projectReducer,
    testimonials: testimonialReducer, 
    contact: contactReducer,
    admin: adminReducer,
  },
});
