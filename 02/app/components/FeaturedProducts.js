import React from 'react'
import ProductsCards from './ProductsCards'
import Link from 'next/link'


const FeaturedProducts = () => {
  return (
    <>
      <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-between m-auto py-6'>
        <div className="demo text-2xl font-bold">Featured Products</div>
        <div className='flex gap-2 items-center'>
          <div className="demo bg-[#F5F5F5] p-2 flex justify-center items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-left"><path d="m16 3 4 4-4 4" /><path d="M20 7H4" /><path d="m8 21-4-4 4-4" /><path d="M4 17h16" /></svg></div>
        </div>
      </div>
      <Link href="/product_1">
        <div className='w-[80vw] flex flex-wrap md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
          <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
          <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
          <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
          <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
        </div>
      </Link>
      <div className='w-[80vw] max-md:w-[90vw] m-auto md:py-5 max-md:py-20 flex  justify-center'>
        <Link href='allproduct'><button className='w-[20vw] max-md:w-[70vw] p-3 rounded-lg text-white text-sm font-semibold bg-[#DB4444]'>View All Products</button></Link>
      </div>
    </>
  )
}

export default FeaturedProducts