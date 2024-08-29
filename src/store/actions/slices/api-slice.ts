import { APIEnpoint } from "@/APIEndpoints";
// import { DashboardMetrics, ExpenseByCategorySummary, NewProduct, Product, User } from "@/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APIEnpoint.BackendURL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<any, void>({
      query: () => ({
        url: APIEnpoint.blogs,
        method: "GET"
      }),
      providesTags: ["DashboardMetrics"],
    }),
    // getProducts: build.query<any[], string | void>({
    //   query: (search) => ({
    //     url: APIEnpoint.products,
    //     params: search ? { search } : {},
    //     method: "GET"
    //   }),
    //   providesTags: ["Products"],
    // }),
    // createProduct: build.mutation<any, any>({
    //   query: (newProduct) => ({
    //     url: APIEnpoint.products,
    //     method: "POST",
    //     body: newProduct,
    //   }),
    //   invalidatesTags: ["Products"],
    // }),
    // getUsers: build.query<any[], void>({
    //   query: () => ({
    //     url: APIEnpoint.users,
    //     method: "GET"
    //   }),
    //   providesTags: ["Users"],
    // }),
    // getExpensesByCategory: build.query<any[], void>({
    //   query: () => ({
    //     url: APIEnpoint.expenses,
    //     method: "GET"
    //   }),
    //   providesTags: ["Expenses"],
    // }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  // useGetProductsQuery,
  // useCreateProductMutation,
  // useGetUsersQuery,
  // useGetExpensesByCategoryQuery,
} = api;