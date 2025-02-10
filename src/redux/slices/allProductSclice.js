import { createSlice } from "@reduxjs/toolkit";


const calculateTotalPrice = (basket) => {
  return basket.reduce((total, item) => total + item.price * item.count, 0);
};
const initialState = {
  products: JSON.parse(localStorage.getItem("basket")) || [],
  totalCount:JSON.parse(localStorage.getItem("count")) || 0,
  totalAmount:calculateTotalPrice(JSON.parse(localStorage.getItem("basket")))
};


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
      state.totalAmount = calculateTotalPrice(state.products)
    },
    decrimentCount: (state, action) => {
      let findCount = state.products.find((item) => item.id == action.payload);
      findCount.count += 1;
      state.totalCount++;
      localStorage.setItem("count",JSON.stringify(state.totalCount))
      localStorage.setItem("basket", JSON.stringify(state.products));
      state.totalAmount = calculateTotalPrice(state.products)
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
      state.totalAmount = calculateTotalPrice(state.products)
    },
    deleteProduct:(state,action)=>{
      let deleteItem = state.products.filter((item)=>item.id !== action.payload.id)
      state.products = deleteItem
      state.totalCount -= action.payload.count
      localStorage.setItem("count",JSON.stringify(state.totalCount))
      localStorage.setItem("basket", JSON.stringify(state.products));
      state.totalAmount = calculateTotalPrice(state.products)
    },
    clearBasket:(state)=>{
      state.products = []
      state.totalCount =0
      localStorage.setItem("count",JSON.stringify(state.totalCount))
      localStorage.setItem("basket", JSON.stringify(state.products));
      state.totalAmount = calculateTotalPrice(state.products)
    }
  },
});

export const { addToBasket, decrimentCount, increMentCount,deleteProduct,clearBasket } =
  productsSlice.actions;

export default productsSlice.reducer;
