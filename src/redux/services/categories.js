import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories = createApi({
    reducerPath:"categories",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/products/"}),
    endpoints:(builder)=>({
     getAllCAtegories:builder.query({
       query:()=>"categories"
     })
    })
})

export const {useGetAllCAtegoriesQuery} = categories