import { APIEnpoint } from "@/APIEndpoints";
import { Blog } from "@/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APIEnpoint.BackendURL }),
  reducerPath: "api",
  tagTypes: ["Blogs"],
  endpoints: (build) => ({
    getAllBlogs: build.query<{ blogs: Blog[] }, {
      search?: string
      limit?: number
      offset?: number
    }>({
      query: (params) => {
        const customParams = { ...params }
        Object.keys(customParams).forEach((key) => {
          if (
            customParams[key as keyof object] === null ||
            customParams[key as keyof object] === undefined ||
            customParams[key as keyof object] === '' ||
            customParams[key as keyof object] === '[]'
          ) {
            delete customParams[key as keyof object]
          }
        })
        return {
          url: APIEnpoint.blogs,
          method: "GET",
          params: customParams,
        }
      },
      providesTags: ["Blogs"],
    }),
    addBlog: build.mutation<{
      message: string
      submit: boolean
    }, FormData>({
      query: (formData) => ({
        url: APIEnpoint.blogs,
        method: "POST",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Blogs"],
    }),
    deleteBlog: build.mutation<{ message: string }, { id: number }>({
      query: (params) => ({
        url: APIEnpoint.blogs,
        method: "DELETE",
        body: params,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
} = api;
