import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import HeroNext from "./components/heronext";


export default function Home() {
  return (
   <div className="max-w-full h-screen flex-grow justify-start items-center ">
    <Hero/><br />
    <HeroNext/>
  
        
   </div>
  );
}
