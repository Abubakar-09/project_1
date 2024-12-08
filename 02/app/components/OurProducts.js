import React from 'react'
import ProductsCards from './ProductsCards'
import Link from 'next/link'

const OurProducts = () => {
  return (
    <>
      <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-center m-auto py-6'>
        <div className="demo text-2xl font-bold">Our Products</div>
      </div>
      <Link href='/product_1'>
      <div className='w-[80vw] flex flex-wrap md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_5.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_6.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_2.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_1.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_6.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_5.png' />
        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
      </div>
      </Link>
      <div className='w-[80vw] max-md:w-[90vw] m-auto md:py-5 max-md:py-20 flex  justify-center'>
        <Link href='/allproduct'><button className='w-[20vw] max-md:w-[70vw] p-3 rounded-lg text-white text-sm font-semibold bg-[#DB4444]'>View All Products</button></Link>
      </div>
    </>
  )
}

export default OurProducts