

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import orderReducer from './orderSlice';
import categoryReducer from './categorybrandSlice';
import refundReducer from './refundSlice';
import vendorReducer from './vendorSlice'; 
import brandReducer from './brandSlice'; 
import productCategorySlice from './categorySlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    vendorOrder: orderReducer,
    category: categoryReducer,
    refund: refundReducer,
    vendor: vendorReducer, // Add your vendor reducer here
    brand: brandReducer, // Add your brand reducer here
    productCategory: productCategorySlice, // Add your brand reducer here
  },
});

export default store;
