import { ChevronDown } from 'lucide-react';

const Top = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='relative flex text-[10px] lg:text-sm items-center w-[80vw] m-auto h-[48px] justify-center bg-black text-white'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-bold'>Shop Now</span> </p>
          <p className='absolute right-2 flex items-center'>English 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"  stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          </p>
        </div>
      </div>
    </>
  )
}

export default Top