'use client'

import { useGetDashboardMetricsQuery } from "@/store/actions/slices/api-slice"

const BlogHome = () => {
  const { data } = useGetDashboardMetricsQuery()

  console.log(data)
  return (
    <div>BlogHome</div>
  )
}

export default BlogHome