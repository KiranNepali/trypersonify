import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Preloader from "../assets/preloader.gif";

function PreLoaderOpening() {
  const preloader = useRef(null);

  useGSAP(() => {
    const tl1 = gsap.timeline();
    tl1.to(preloader.current, {
      opacity: 0,
      // ease: Expo.easeInOut,
      ease: "easeOut",
      duration: 4,
      delay: 5,
      zIndex: "-3",
    });
  });
  return (
    <div
      ref={preloader}
      className="w-full h-screen bg-black text-white top-0 left-0 fixed z-[60] flex justify-center items-center"
    >
      <div className="h-[17rem] w-[17rem] md:w-[18rem] md:h-[18rem]">
        <img
          className="object-center w-full h-full object-cover"
          src={Preloader}
          alt="preloader"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default PreLoaderOpening;
