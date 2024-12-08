'use client'
import React from 'react'
import ProductsCards from '../components/ProductsCards'
import ProductDetail from '../components/ProductDetail'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const page = () => {
    const Params = useParams()
    console.log(Params)
    return (
        <>
            <ProductDetail img={Params.product} />
            <div className="demo md:py-10">
                <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-between m-auto md:pt-28 py-6'>
                    <div className="demo text-xl md:text-3xl font-extrabold">Featured Products</div>
                    <div className='flex font-bold underline text-sm items-center'>
                        View All
                    </div>
                </div>
                <Link href='/product_1'>
                <div className='w-[80vw] flex flex-wrap md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
                    <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                    <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                    <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                    <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                </div>
                </Link>
            </div>
        </>
    )
}

export default page