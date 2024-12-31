'use client'

import { PRODUCT_PAGE_DATA } from '@/config/constants/product-page-data'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import SubscribeUs from './subscribe-us'

const AllItems = () => {
  const [toReadMore, setToReadMore] = useState<string[]>([])
  return (
    <>
      <article id='all-items__content'>
        {PRODUCT_PAGE_DATA.map((item, index) => {
          return (
            <section className={`all-items__content--info ${item.title.split(' ')[0].toLowerCase()}-bg`} key={index}>
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
                <div className={`description ${toReadMore.includes(item.title.toLowerCase()) ? 'more' : 'less'}`}>
                  {item.description}
                </div>
                <div className="actions">
                  <div className="btn__order-now">Order Now <IoIosArrowForward /></div>
                  <div className="btn__read-more" onClick={() => setToReadMore(p => p.includes(item.title.toLowerCase()) ? p.filter(i => i !== item.title.toLowerCase()) : [...p, item.title.toLowerCase()])}>{toReadMore.includes(item.title.toLowerCase()) ? 'Read Less' : 'Read More'}</div>
                </div>
              </div>
            </section>
          )
        })}

      </article>
      <SubscribeUs />
    </>
  )
}

export default AllItems