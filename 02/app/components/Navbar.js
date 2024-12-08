import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"


const Navbar = () => {
  return (
    <>
      <div className='max-md:hidden'>
        <div className="bg-[#F0F2F3]">
          <div className='w-[80vw] m-auto flex justify-between items-center h-[10vh] 2xl:h-[7vh]'>
            <Link href='/'><div className="d font-semibold flex gap-2 items-center text-xl">
              <img src="/Icon.png" className='' alt="LOGO" />
              Comforty
            </div>
            </Link>
            <div className="d">
              <button className="p-2 px-3 text-sm text-black border-[1px] flex items-center gap-2 bg-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                Cart
                <p className="p-1 rounded-full h-[30%] text-white text-sm bg-[#007580]">2</p>
              </button>
            </div>
          </div>
        </div>
        <div className="border-b border-b-slate-600">
          <div className='flex justify-between text-sm w-[80vw] m-auto h-[10vh] 2xl:h-[7vh] items-center'>
            <div className="d">
              <ul className="flex gap-4 items-center">
                <Link href='/'><li className="hover:text-[#007580] cursor-pointer">Home</li></Link>
                <Link href='/about'><li className="hover:text-[#007580] cursor-pointer">About</li></Link>
                <Link href='/contact'><li className="hover:text-[#007580] cursor-pointer">Contact</li></Link>
                <Link href='/allproduct'><li className="hover:text-[#007580] cursor-pointer">All Products</li></Link>
                <Link href='/faqs'><li className="hover:text-[#007580] cursor-pointer">faq's</li></Link>
              </ul>
            </div>
            <div className="d text-slate-500">Contact: <span className="text-black">09281932121</span></div>
          </div>
        </div>
      </div>
      <div className='md:hidden border-b border-b-slate-600'>
        <div className=" w-[90vw] m-auto h-[10vh] justify-between flex items-center">
          <Link href='/'><div className="d font-semibold flex gap-2 items-center text-xl">
            <img src="/Icon.png" className='w-[10vw]' alt="LOGO" />
            Comforty
          </div>
          </Link>
          <Sheet>
            <SheetTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </SheetTrigger>
            <SheetContent className='bg-white'>
              <div className="w-[80%] m-auto h-full gap-10 flex justify-center items-center flex-col">
                <button className="p-2 px-3 text-sm text-black flex items-center gap-2 bg-white border border-black rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                  Cart
                  <p className="p-1 rounded-full h-[80%] flex items-center text-white text-sm bg-[#007580]">2</p>
                </button>
                <Link href='/'><p>Home</p></Link>
                <Link href='/about'><p>About</p></Link>
                <Link href='/contact'><p>Contact</p></Link>
                <Link href='/allproduct'><p>All Products</p></Link>
                <Link href='/faqs'><p>FAQ's</p></Link>
                <div className="d flex gap-2 text-slate-500">Contact: <span className="text-black">09281932121</span></div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}

export default Navbar