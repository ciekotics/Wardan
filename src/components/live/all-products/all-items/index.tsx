import { PRODUCT_PAGE_DATA } from '@/config/constants/product-page-data'
import Image from 'next/image'
import React from 'react'

const AllItems = () => {
  return (
    <article id='all-items__content'>
      {PRODUCT_PAGE_DATA.map((item, index) => {
        return (
          <section className='all-items__content--info' key={index}>
            <div className="image">
              <Image
                src={item.imgSrc}
                alt='Jeera Masala'
                width={400}
                height={400}
                priority
              />
            </div>
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="description">
                {item.description}
              </div>
              <div className="actions"></div>
            </div>
          </section>
        )
      })}

    </article>
  )
}

export default AllItems