import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const  allProduct  = createApi({
  reducerPath:"allProduct",
  baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
  endpoints:(builder)=>({
      getAllProducts:builder.query({
        query: () => "products"
      })
  })
})


export const {useGetAllProductsQuery} =  allProduct

