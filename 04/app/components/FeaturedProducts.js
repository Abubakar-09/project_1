import React from 'react'
import ProductsCards from './ProductsCards'


const FeaturedProducts = () => {
  return (
    <>
      <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center m-auto py-6'>
        <div className="demo w-6 rounded-lg h-10 bg-[#DB4444]"></div>
        <div className="demo text-sm font-semibold">Our Products</div>
      </div>
      <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-between m-auto py-6'>
        <div className="demo text-2xl font-bold">Explore Our Products</div>
        <div className='flex gap-2 items-center'>
          <div className="demo bg-[#F5F5F5] p-2 flex justify-center items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-left"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg></div>
        </div>
      </div>
      <div className='w-[80vw] flex flex-wrap md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
        <ProductsCards review="100" />
        <ProductsCards img="/tv.png" />
        <ProductsCards name="Demo product 2" price="500$" />
        <ProductsCards name="Demo product 2" price="200$" />
        <ProductsCards name="testing props demo" />
        <ProductsCards name="Demo product 2" />
        <ProductsCards />
        <ProductsCards />
      </div>
      <div className='w-[80vw] max-md:w-[90vw] m-auto md:py-5 max-md:py-20 flex  justify-center'>
        <button className='w-[20vw] max-md:w-[70vw] p-3 rounded-lg text-white text-sm font-semibold bg-[#DB4444]'>View All Products</button>
      </div>
    </>
  )
}

export default FeaturedProducts