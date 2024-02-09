import navImg from "/public/hero-image.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-start h-screen mt-10">
      <Image src={navImg} alt="nav" className="w-full md:w-3/4 lg:w-1/2" />
    </div>
  );
}
