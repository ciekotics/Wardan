import { APIEnpoint } from "@/APIEndpoints";
import { Blog } from "@/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APIEnpoint.BackendURL }),
  reducerPath: "api",
  tagTypes: ["Blogs"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<Blog, void>({
      query: () => ({
        url: APIEnpoint.blogs,
        method: "GET"
      }),
      providesTags: ["Blogs"],
    }),
    addBlog: build.mutation<void, Blog>({
      query: (newBlog) => ({
        url: APIEnpoint.blogs,
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useAddBlogMutation,
} = api;