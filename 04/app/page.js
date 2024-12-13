import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";
import BestSelling from "./components/BestSelling";
import FleashSale from "./components/FleashSale";
import Category from "./components/Category";
import HeroSection from "./components/HeroSection";
import Music_Box from "./components/Music_Box";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] bg-slate-500 h-[1px]"></div>
      <FleashSale />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] bg-slate-500 h-[1px]"></div>
      <Category />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] bg-slate-500 h-[1px]"></div>
      <BestSelling />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] bg-slate-500 h-[1px]"></div>
      <Music_Box/>
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] bg-slate-500 h-[1px]"></div>
      <FeaturedProducts />
      <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
    </>
  );
}
