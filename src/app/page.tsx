import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
   <div className="max-w-full max-h-screen flex justify-start items-center ">
    <Hero />
   </div>
  );
}
