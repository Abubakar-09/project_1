import Image from 'next/image';
import React from 'react';

const Music_Box = () => {
  return (
    <>
      <div className="w-[80vw] m-auto max-md:w-[90vw] bg-black text-white flex max-md:flex-col rounded-xl max-md:py-8 md:h-[60vh] overflow-hidden">
        {/* Left Column */}
        <div className="md:w-[50%] flex md:gap-3 gap-5 flex-col justify-center items-start p-5 max-md:py-10">
          <p className='text-sm font-bold text-green-500'>Categories</p>
          <h1 className="text-5xl font-bold mb-4 max-md:text-3xl">
            Enhance Your <br /> Music Experience
          </h1>
          <div className=" flex gap-2 pb-2">
            <div className="flex flex-col justify-center items-center text-black bg-white md:w-[5vw] w-[17vw] py-2  md:py-3 max-md:text-[9px] text-sm rounded-full">
              <p className='text-[16px] max-md:text-[13px] font-bold'>23</p>
              <p>Hour</p>
            </div>
            <div className="flex flex-col justify-center items-center text-black bg-white md:w-[5vw] w-[17vw] py-2  md:py-3 max-md:text-[9px] text-sm rounded-full">
              <p className='text-[16px] max-md:text-[13px] font-bold'>13</p>
              <p>Min</p>
            </div>
            <div className="flex flex-col justify-center items-center text-black bg-white md:w-[5vw] w-[17vw] py-2  md:py-3 max-md:text-[9px] text-sm rounded-full">
              <p className='text-[16px] max-md:text-[13px] font-bold'>53</p>
              <p>Sec</p>
            </div>
            <div className="flex flex-col justify-center items-center text-black bg-white md:w-[5vw] w-[17vw] py-2  md:py-3 max-md:text-[9px] text-sm rounded-full">
              <p className='text-[16px] max-md:text-[13px] font-bold'>23</p>
              <p>MSec</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-6 text-sm py-2 rounded-lg font-semibold hover:bg-green-600 max-md:px-4 max-md:py-2">
            Buy Now
          </button>
        </div>

        {/* Right Column */}
        <div className="md:w-[50%] flex justify-center items-center relative">
          {/* Blur Background */}
          <div className="absolute w-[100%] h-[100%] top-0 right-0 bg-white blur-3xl opacity-30 rounded-full z-10"></div>
          
          {/* Image Container */}
          <div className="relative w-[80%] h-[80%] max-md:w-[80%] z-20 max-md:h-[50vh]">
            <Image
              src="/music_box.png"
              alt="Music Box"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Music_Box;