import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './slices/allProductSclice'
import { allProduct } from './services/product';
export const store = configureStore({
  reducer: {
    products:productsSlice,
    [allProduct.reducerPath]: allProduct.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allProduct.middleware),
})