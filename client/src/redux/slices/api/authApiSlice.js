import { apiSlice } from "../apiSlice";

const AUTH_URL = "/user";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //login
    //mutation is a function that takes an object with a query key that is a function that returns an object with a url key that is a string
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    //register
    register: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    //logout
    logout: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApiSlice;
