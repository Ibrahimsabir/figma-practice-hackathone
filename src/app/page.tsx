import Hero from "./components/hero";
import HeroNext from "./components/heronext";
import BestSeller from "./components/bestseller";
import { Frame } from "./components/frame";
import Category from "./components/category";
import OurProducts from "./components/ourproducts";
import NewArrival from "./components/newarrival";


export default function Home() {
  return (
   <div className="max-w-full h-full flex-grow justify-start items-center ">
    <Hero/><br />
    <HeroNext/><br />
    <Category/><br />
    <BestSeller/><br />
    <Frame/><br />
    <OurProducts/><br />
    <NewArrival/>

    
  
        
   </div>
  );
}
