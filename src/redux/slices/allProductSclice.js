import { createSlice } from "@reduxjs/toolkit";

// export  const  getAllProducts = createAsyncThunk("fetchAllProduct",async()=>{
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()
//     return data
// })

const initialState = {
  products: JSON.parse(localStorage.getItem("basket")) || [],
  totalCount:JSON.parse(localStorage.getItem("count")) || 0,
};
console.log();

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let exsistsProduct = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (exsistsProduct) {
        exsistsProduct.count++;
        state.totalCount++;
      } else {
        state.totalCount++;
        state.products.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("count", JSON.stringify(state.totalCount));
      localStorage.setItem("basket", JSON.stringify(state.products));
    },
    decrimentCount: (state, action) => {
      let findCount = state.products.find((item) => item.id == action.payload);
      findCount.count += 1;
      state.totalCount++;
      localStorage.setItem("count",JSON.stringify(state.totalCount))
      localStorage.setItem("basket", JSON.stringify(state.products));
    },
    increMentCount: (state, action) => {
      let findCount = state.products.find((item) => item.id == action.payload);
      findCount.count -= 1;
      state.totalCount--;
      if (findCount.count == 0) {
        state.products = state.products.filter(
          (item) => item.id != findCount.id
        );
      }
      localStorage.setItem("count",JSON.stringify(state.totalCount))
      localStorage.setItem("basket", JSON.stringify(state.products));
    },
  },
});

export const { addToBasket, decrimentCount, increMentCount } =
  productsSlice.actions;

export default productsSlice.reducer;
