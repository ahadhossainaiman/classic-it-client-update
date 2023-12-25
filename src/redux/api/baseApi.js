import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://classic-it-server-ebon.vercel.app",
  }),
  tagTypes: ["login", "logout", "cart"],
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
    setCurrentUser: builder.mutation({
      query: ({ email, username, photoUrl }) => ({
        url: "/setcurrentuser",
        method: "POST",
        body: { email, username, photoUrl },
      }),
      providesTags: ["login", "cart"],
    }),

    deleteCurrentUser: builder.mutation({
      query: (email) => ({
        url: `/deletecurrentitem`,
        method: "DELETE",
        body: { email },
      }),
      invalidatesTags: ["login", "logout", "cart"],
    }),

    getCurrentUser: builder.query({
      query: () => ({ url: `/setcurrentuser` }),
      providesTags: ["login", "logout", "cart"],
    }),
    getProducts: builder.query({
      query: () => ({ url: `/products` }),
      providesTags: ["login", "logout"],
    }),

    createCart: builder.mutation({
      query: ({ email, image, title, size, color, qt, id, price }) => ({
        url: "/addtocart",
        method: "POST",
        body: { email, image, title, size, color, qt, id, price },
      }),
      invalidatesTags: ["cart"],
    }),
    getCart: builder.query({
      query: () => ({ url: `/addtocart` }),
      providesTags: ["login", "logout", "cart"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useSetCurrentUserMutation,
  useGetCurrentUserQuery,
  useDeleteCurrentUserMutation,
  useGetProductsQuery,
  useCreateCartMutation,
  useGetCartQuery,
} = baseApi;

export default baseApi;
