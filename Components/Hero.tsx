import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I'M <span className="text-yellow-400">ANDY!</span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            💻Full-Stack Developer | Software Engineer | QA Engineer | AI |
            JavaScript | | Typescript /⚛️ React/React Native | Node/Express |
            mySQL / | Firebase🔥 |🐘Postgres🐘 | Docker🐳 | Tailwind | Bootstrap
            | Angular | Java Coral Springs, Florida.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black">
              Hire Me
            </button>
            <button className="flex items-center space-x-2">
              <ArrowUpTrayIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white  ">
                Download CV
              </p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-black relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
