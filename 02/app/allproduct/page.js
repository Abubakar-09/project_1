import React from 'react'
import ProductsCards from '../components/ProductsCards'
import Link from 'next/link'


const page = () => {
    return (
        <>
            <div className='py-16'>
                <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-center m-auto'>
                    <div className="demo text-2xl font-bold">All Products</div>
                </div>
                <Link href='/product_2'>
                    <div className='w-[80vw] flex flex-wrap md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_2.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_3.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_5.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_1.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_3.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_6.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_4.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_2.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_3.png' />
                        <ProductsCards name='Libarry Stool Chair' price='$20' img='product_5.png' />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default page