import First from "@/components/First";
import Image from "next/image";
import border from "../utils/border.png";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="absolute circle-blur right-0 w-32 h-16 blur-[259px] max600:hidden"></div>
      <div className="flex flex-col -ml-3 max600:ml-0 max600:hidden">
        <Image src={border} alt='border'/>
        <Image src={border} alt='border'/>
        <Image src={border} alt='border' />
        <Image src={border} alt='border' className='h-[30vh]'/>
      </div>
      <div className="w-full">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Footer/>
      </div>
    </div>
  );
}
