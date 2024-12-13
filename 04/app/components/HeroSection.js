import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const HeroSection = () => {
    return (
        <>
            <div className='md:w-[80vw] flex xl:h-[40vh] md:h-[40vh] max-md:flex-col overflow-hidden w-[90vw] m-auto'>
                <div className="demo md:w-[20%] md:h-full md:border-r pt-5  md:border-r-black">
                    <ul className='text-[12px] md:h-full justify-between text-black flex flex-col gap-2'>
                        <li className='flex justify-between pr-4 items-center'>Women's Fashion <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></li>
                        <li className='flex justify-between pr-4 items-center'>Men's Fashion <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></li>
                        <li>Electronics</li>
                        <li>Home and Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby's & Toy's</li>
                        <li>Healthcare</li>
                        <li>Groceries</li>
                    </ul>
                </div>
                <div className="demo flex justify-center items-center md:w-[80%] pt-5">
                    <Carousel className='bg-black w-[80%] text-white max-md:w-[100%] md:px-5 md:h-full max-md:py-5 max-md:h-[70vh]'>
                        <CarouselContent >
                            <CarouselItem className='flex items-center max-md:flex-col h-[70vh] md:h-[40vh] justify-around'>
                                <div className="demo flex gap-3 text-sm justify-around md:h-[27vh] flex-col">
                                    <div className="demo">iphoen 14 Series</div>
                                    <div className="demo text-3xl font-extrabold">Upto 10% off <br /> Voucher</div>
                                    <div className="demo underline">Shop Now</div>
                                </div>
                                <div className="demo">
                                    <img src="/iphone.png" className='md:w-[25vw] w-[60vw]' alt="iphone" />
                                </div>
                            </CarouselItem>
                            <CarouselItem>...2</CarouselItem>
                            <CarouselItem>...3</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="max-md:absolute text-slate-700 max-md:top-[50%] max-md:left-1" />
                        <CarouselNext className="max-md:absolute text-slate-700 max-md:top-[50%] max-md:right-1" />
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default HeroSection