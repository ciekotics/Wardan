import { APIEnpoint } from "@/APIEndpoints";
import { Blog } from "@/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APIEnpoint.BackendURL }),
  reducerPath: "api",
  tagTypes: ["Blogs"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<{ blogs: Blog[] }, void>({
      query: () => ({
        url: APIEnpoint.blogs,
        method: "GET",
      }),
      providesTags: ["Blogs"],
    }),
    addBlog: build.mutation<void, FormData>({
      query: (formData) => ({
        url: APIEnpoint.blogs,
        method: "POST",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useAddBlogMutation,
} = api;
