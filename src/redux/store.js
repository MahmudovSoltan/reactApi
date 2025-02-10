import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './slices/allProductSclice'
import { allProduct } from './services/product';
import { categories } from './services/categories';
export const store = configureStore({
  reducer: {
    products:productsSlice,
    [allProduct.reducerPath]: allProduct.reducer,
    [categories.reducerPath]:categories.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allProduct.middleware).concat(categories.middleware),
})