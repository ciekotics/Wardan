import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className="banner-content">
          <div className="title">
            <h2>Our Products</h2>
            <h6>Manufactured and Packaged by Wardan Spices Pvt. Ltd.</h6>
            <h5>- Bringing Freshness in your Kitchen</h5>
            <h5>- 100% Organic</h5>
          </div>

          <div className="product-btn">
            <Image
              src={'/images/100-perc-natural.png'}
              alt='100% natural'
              width={130}
              height={60}
            />
            <div className="btn">Explore Products</div>
          </div>
        </div>
      </section>
      <div className='all-product__description'>
        <div className="jars">
          <div className="jar">
            <Image
              src={'/images/jar-about-1.png'}
              alt='jar-1'
              width={100}
              height={100}
            />
          </div>
          <div className="jar">
            <Image
              src={'/images/jar-about-2.png'}
              alt='jar-1'
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className='all-product__description-content'>
          <p className='all-product__description-content-p'>Welcome to our world of aromatic spices, where every blend is crafted to add flavor, depth, and a touch of magic to your culinary creations. Our carefully selected spices are sourced from the finest regions to ensure unmatched quality and freshness.</p>
          <div className="btns">
            <div className="btn">Whole Spices</div>
            <div className="btn">Mixed Spices</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner