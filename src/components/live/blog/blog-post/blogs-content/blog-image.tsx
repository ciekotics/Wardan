'use client'

import { useGetBlogQuery } from '@/store/actions/slices/api-slice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const BlogImage = () => {
  const param = useParams();
  const id = Number(param?.["post-id"]);

  const { data: blogData } = useGetBlogQuery(
    {
      id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (blogData?.blogs?.[0]?.banner) {
    return (
      <Image 
        src={blogData?.blogs?.[0]?.banner}
        alt=''
        width={400}
        height={400}
      />
    )
  }
  return null
}

export default BlogImage