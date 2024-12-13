import React from 'react'
import ProductsCards from './ProductsCards'

const Category = () => {
    return (
        <>
            <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center m-auto py-6'>
                <div className="demo w-6 rounded-lg h-10 bg-[#DB4444]"></div>
                <div className="demo text-sm font-semibold">Categories</div>
            </div>
            <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-between m-auto py-6'>
                <div className="demo text-2xl font-bold">Browser by Category</div>
                <div className='flex gap-2 items-center'>
                    <div className="demo bg-[#F5F5F5] p-2 flex justify-center items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-left"><path d="m16 3 4 4-4 4" /><path d="M20 7H4" /><path d="m8 21-4-4 4-4" /><path d="M4 17h16" /></svg></div>
                </div>
            </div>
            <div className='w-[80vw]  flex max-md:flex-wrap md:py-2 gap-y-7 max-md:gap-y-[23px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
                <div className='border hover:bg-[#DB4444] md:w-[10vw] hover:text-white rounded-lg flex border-black text-black text-sm flex-col justify-center p-5 gap-4 items-center'>
                    <div className="demo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
                    <div className="demo">Phone</div>
                </div>
                <div className='border hover:bg-[#DB4444] md:w-[10vw] hover:text-white rounded-lg flex border-black text-black text-sm flex-col justify-center p-5 gap-4 items-center'>
                    <div className="demo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-minimal"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg></div>
                    <div className="demo">computer</div>
                </div>
                <div className='border hover:bg-[#DB4444] md:w-[10vw] hover:text-white rounded-lg flex border-black text-black text-sm flex-col justify-center p-5 gap-4 items-center'>
                    <div className="demo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-watch"><circle cx="12" cy="12" r="6"/><polyline points="12 10 12 12 13 13"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/></svg></div>
                    <div className="demo">Watch</div>
                </div>
                <div className='border hover:bg-[#DB4444] md:w-[10vw] hover:text-white rounded-lg flex border-black text-black text-sm flex-col justify-center p-5 gap-4 items-center'>
                    <div className="demo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg></div>
                    <div className="demo">Camera</div>
                </div>
                <div className='border hover:bg-[#DB4444] md:w-[10vw] hover:text-white rounded-lg flex border-black text-black text-sm flex-col justify-center p-5 gap-4 items-center'>
                    <div className="demo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
                    <div className="demo">Phone</div>
                </div>
                <div className='border hover:bg-[#DB4444] md:w-[10vw] hover:text-white rounded-lg flex border-black text-black text-sm flex-col justify-center p-5 gap-4 items-center'>
                    <div className="demo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
                    <div className="demo">Phone</div>
                </div>
            </div>
        </>
    )
}

export default Category