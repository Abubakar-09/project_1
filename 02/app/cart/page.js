import React from 'react'

const page = () => {
  return (
    <>
      <div className="md:w-[80vw] py-16 flex gap-2 max-md:flex-col max-md:gap-28 m-auto w-[90vw] md:h-screen">
        <div className="d flex flex-col gap-4 md:w-[70%] w-[100%]">
          <div className="text-2xl font-extrabold">Bag</div>
          <div className="flex gap-2 h-[20vh]">
            <div className="w-[20%] bg-[url('/product_4.png')] bg-cover bg-center"></div>
            <div className="w-[60%] h-full flex flex-col items-start justify-between">
              <div className="d">Library Stool Chair</div>
              <div className="d text-slate-6000 text-sm">
                <p>Ashen Slate/Cobalt Bliss</p>
                <p>Size L Quantity 1</p>
              </div>
              <div className="d flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
            <div className="w-[20%]">MRP: $99</div>
          </div>
          <div className="w-full h-[1px] bg-slate-600"></div>
          <div className="flex gap-2 h-[20vh]">
            <div className="w-[20%] bg-[url('/product_3.png')] bg-cover bg-center"></div>
            <div className="w-[60%] h-full flex flex-col items-start justify-between">
              <div className="d">Library Stool Chair</div>
              <div className="d text-slate-6000 text-sm">
                <p>Ashen Slate/Cobalt Bliss</p>
                <p>Size L Quantity 1</p>
              </div>
              <div className="d flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
            <div className="w-[20%]">MRP: $99</div>
          </div>
        </div>
        <div className="d md:w-[30%] w-[100%] flex flex-col gap-3">
          <div className="d text-black font-extrabold">Summary</div>
          <div className="d text-sm flex justify-between">Subtotal <p>$350 usd</p></div>
          <div className="d text-sm flex justify-between">Estimated Delivery and Handling <p>free</p></div>
          <div className="w-full h-[1px] bg-slate-500"></div>
          <div className="d text-sm flex justify-between">Total <p>$350 usd</p></div>
          <div className="w-full h-[1px] bg-slate-500"></div>
          <button className="p-2 w-full rounded-full bg-[#029FAE] text-white flex justify-center">Member Checkout</button>
        </div>
      </div>
    </>
  )
}

export default page
