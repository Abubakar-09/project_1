import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <>
      <div className='max-md:hidden'>
        <div className='border-b border-b-slate-600 h-[10vh]'>
          <div className="w-[80vw] m-auto flex items-end py-2 h-full">
            <div className=" flex text-sm justify-between h-11 items-center w-full">
              <div className="test font-extrabold text-xl">Exclusive</div>
              <div className="test">
                <ul className='flex gap-10'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Sign Up</li>
                </ul>
              </div>
              <div className="test relative flex gap-1 items-center pr-10">
                <div className='flex justify-between bg-[#F5F5F5] p-2 rounded-lg w-[10vw]'>
                  <p>Search</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>
                <div className="test h-full relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </div>
                <div className="test h-full relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden border-b border-b-slate-600'>
        <div className=" w-[90vw] m-auto h-[8vh] justify-between pb-3 flex items-end">
          <p className="font-extrabold text-xl">Exclusive</p>
          <Sheet>
            <SheetTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </SheetTrigger>
            <SheetContent>
              <div className="w-[80%] m-auto h-full gap-10 flex justify-center items-center flex-col">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Sign Up</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}

export default Navbar