import React, { useEffect, useRef } from "react";
import OpeningAnim from "../anim/OpeningAnim.js";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PlanetImg from "../assets/planet.png";
import { Link } from "react-scroll";

export default function OpeningSpotlight() {
  // useEffect(() => {
  //   OpeningAnim();
  // }, []);
  useEffect(() => {
    // Check if the screen width is greater than or equal to a certain threshold
    if (window && window.innerWidth >= 1024) {
      OpeningAnim(); // Call your OpeningAnim function
    }
  }, []);
  const scroll = useRef(null);
  useGSAP(() => {
    gsap.to(scroll.current, {
      repeat: -1,
      y: "8px",
      yoyo: true,
      duration: 0.8,
      ease: "linear",
    });
  });
  return (
    <div className="fixed top-0 left-0  w-full h-screen">
      <div id="container" className="absolute w-full h-screen">
        <img
          className="object w-full block lg:hidden h-full object-cover object-center"
          src="https://i.pinimg.com/originals/c2/91/0d/c2910d9584868f67b910834f98997f1d.jpg"
          alt=""
        />
      </div>
      <img
        className="earth w-[10rem] h-[10rem]  md:w-[11rem] md:h-[11rem] absolute top-0 left-0 right-0 bottom-0 m-auto z-0 "
        src={PlanetImg}
      />
      <Link
        to="home"
        spy={true}
        offset={-70}
        duration={500}
        className="absolute cursor-pointer left-[50%] flex justify-center items-center flex-col gap-1 -translate-x-[50%] z-20  bottom-[3%] text-zinc-300 hover:text-white duration-200"
      >
        <span className="font-bold tracking-widest text-[15px]">
          Scroll Down
        </span>
        <div ref={scroll} className="w-[1.5rem] h-[1.5rem]">
          <Icon
            className="w-full h-full object-cover object-center"
            icon="mingcute:arrows-down-line"
          />
        </div>
      </Link>

      {/* text  */}
      <div className="absolute w-full leading-none flex-col  bottom-[14%] left-[50%]  -translate-x-[50%] flex justify-center items-center">
        <h1 className="uppercase welcome font-semibold tracking-wide text-nowrap text-[1.5rem] md:text-[3vw] text-zinc-100">
          Welcome to personify
        </h1>
        <span className="uppercase text-zinc-300 font-medium tracking-[3px] md:tracking-[4px] text-[10px] text-nowrap md:text-[14px] italic leading-10">
          #Nepal's no.1 personal branding agency.
        </span>
      </div>
    </div>
  );
}
