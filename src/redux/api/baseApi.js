import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["login",'logout'],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ email, password, username, photoUrl }) => ({
        url: "/register",
        method: "POST",
        body: { email, password, username, photoUrl },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
      providesTags: ["login"],
    }),
    getUser: builder.query({
      query: () => ({ url: `/user` }),
      invalidatesTags: ["login"],
    }),
    setCurrentUser:builder.mutation({
      query: ({ email, username, photoUrl }) => ({
        url: "/setcurrentuser",
        method: "POST",
        body: { email, username, photoUrl },
      }),
      providesTags: ["login"],
    }),
    
    deleteCurrentUser: builder.mutation({
      query: (email) => ({ 
        url: `/deletecurrentitem`, 
        method: "DELETE",
        body: {email},
      }),
      invalidatesTags: ["login",'logout'],
    }),
    
    getCurrentUser: builder.query({
      query: () => ({ url: `/setcurrentuser` }),
      providesTags:[ "login",'logout'],
    }),
    getProducts: builder.query({
      query: () => ({ url: `/products` }),
      // providesTags:[ "login",'logout'],
    }),

     createCart: builder.mutation({
       query: ({email,image,title,size,color,qt}) => ({
      url: "/addtocart",
      method: "POST",
      body: { email,image,title,size,color,qt },
    }),
    // providesTags: ["login"],
  }),
    
  }),
  
});

export const { useCreateUserMutation,
   useLoginUserMutation,
    useGetUserQuery,
    useSetCurrentUserMutation,
    useGetCurrentUserQuery,
    useDeleteCurrentUserMutation,
    useGetProductsQuery,
    useCreateCartMutation
} =
  baseApi;

export default baseApi;
