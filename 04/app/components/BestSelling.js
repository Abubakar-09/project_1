import React from 'react'
import ProductsCards from './ProductsCards'

const BestSelling = () => {
    return (
        <>
            <div className='my-10'>
                <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center m-auto py-6'>
                    <div className="demo w-6 rounded-lg h-10 bg-[#DB4444]"></div>
                    <div className="demo text-sm font-semibold">This Month</div>
                </div>
                <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-between m-auto py-6'>
                    <div className="demo text-2xl font-bold">Best Selling Products</div>
                    <div className='flex gap-2 items-center'>
                        <button className='w-[10vw] max-md:w-[30vw] p-3 rounded-lg text-white text-sm font-semibold bg-[#DB4444]'>View All</button>
                    </div>
                </div>
                <div className='w-[80vw] flex flex-wrap md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
                    <ProductsCards review="100" />
                    <ProductsCards img="/tv.png" />
                    <ProductsCards name="Demo product 2" price="500$" />
                    <ProductsCards name="Demo product 2" price="200$" />
                </div>
            </div>
        </>
    )
}

export default BestSelling