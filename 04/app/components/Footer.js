import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-screen md:h-[60vh] max-md:flex max-md:gap-3 max-md:flex-col bg-black text-white'>
        {/*  */}
        <div className=' md:h-[94%] flex justify-center items-center'>

          <div className='w-[80vw] max-md:w-[90vw] max-md:flex-col max-md:gap-12 md:h-full flex gap-3 justify-center  pt-20 items-start m-auto'>
            {/*  */}
            <div className="demo flex flex-col gap-3 w-full justify-between md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Exclusive</div>
              <div className="demo text-lg font-bold">Subscribe</div>
              <div className="demo flex flex-col gap-2">
                <p className='text-sm'>Get 10% off your first order</p>
                <div className='flex justify-between p-2 px-3 border border-white rounded-lg w-full'>Enter Your Email <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /><path d="M6 12h16" /></svg></div>
              </div>
            </div>
            {/*  */}
            <div className="demo flex flex-col gap-3 w-full justify-between md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Support</div>
              {/* <div className="demo flex flex-col gap-2"> */}
                <p className='text-sm px-2'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p className='text-sm px-2'>exclusive@gmail.com</p>
                <p className='text-sm px-2'>+88015-88888-9999</p>
              {/* </div> */}
            </div>
            {/*  */}
            <div className="demo flex flex-col gap-3 w-full justify-between md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Account</div>
              {/* <div className="demo text-lg font-bold">Subscribe</div> */}
              {/* <div className="demo flex flex-col gap-2"> */}
                <p className='text-sm'>My Account</p>
                <p className='text-sm'>Whislist</p>
                <p className='text-sm'>Login/Register</p>
                <p className='text-sm'>Cart</p>
                <p className='text-sm'>Shop</p>
                {/* </div> */}
            </div>
            {/*  */}

            <div className="demo flex flex-col gap-3 w-full justify-between md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Quick Links</div>
              {/* <div className="demo text-lg font-bold">Subscribe</div> */}
              {/* <div className="demo flex flex-col gap-2"> */}
                <p className='text-sm'>Privacy Policy</p>
                <p className='text-sm'>Term of Use</p>
                <p className='text-sm'>FAQS</p>
                <p className='text-sm'>Contact</p>
                {/* </div> */}
            </div>
            {/*  */}
            <div className="demo flex flex-col gap-3 w-full justify-between md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Download App</div>
              <img src="/Qr.png" className='w-[50%]' alt="qr_code" />
                <p className='text-sm'>Save 3$ with every new Sign Up in the App.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='border-t md:h-[6%] max-md:py-3 border-t-slate-500'>
          <div className='w-[80vw] gap-2 text-[10px] h-full m-auto flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copyright"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
            Copyright Rimel 2022. All right reserved
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer