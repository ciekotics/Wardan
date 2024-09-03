import { useGetAllBlogsQuery } from '@/store/actions/slices/api-slice';
import React from 'react'

const TopNewsItem = () => {
  const {
    data: allBlogs,
    isSuccess,
    isLoading,
    isError,
  } = useGetAllBlogsQuery({});

  // if (isLoading) {
  //   return <LoadingSkeleton />;
  // }

  if (isError) {
    return <div>Error loading blogs</div>;
  }
  return (
    <div className='top-news__item'>
      <div className='content'>
      <p className="title loading"></p>
      <p className="date loading"></p>
      </div>
    </div>
  )
}

export default TopNewsItem