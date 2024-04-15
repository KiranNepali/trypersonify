import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import OpeningImg from "../assets/OpeningBg.png";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Opening() {
  const container = useRef(null);
  const scaleUp = useRef(null);
  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "80% bottom",
        scrub: 1,
        pin: scaleUp.current,
      },
    });
    tl1.to(scaleUp.current, {
      scale: 6.5,
      duration: 10,
    });
    tl1.to(container.current, {
      zIndex: "-1",
    });
  });

  return (
    <>
      <div
        ref={container}
        className="md:h-[170vh] h-[140vh] w-full relative top-0 left-0 z-50 overflow-hidden"
      >
        {/* opening part  */}
        <div
          ref={scaleUp}
          className=" opening-font  absolute top-0 left-0 w-full h-screen"
        >
          <div className="absolute  leading-none top-[5%] left-[10%] md:top-[25%] md:left-[20%] text-zinc-100  z-[2] ">
            <span className="text-[1.5rem]  md:text-[3.5vw]">WE</span>
            <br />
            <span className="text-[2.5rem] md:text-[6vw] font-semibold md:ml-9">
              CREATE
            </span>
          </div>
          <div className="absolute leading-none right-[10%] md:right-[20%] top-[16%] md:top-[70%]   text-zinc-100  z-[2] ">
            <span className="text-[1.5rem] md:text-[3.5vw]">PERSONAL</span>
            <br />
            <span className="text-[2.5rem] md:text-[6vw] font-semibold md:ml-[6rem] transform">
              BRAND
            </span>
          </div>
          <div className="opening w-full h-screen">
            <img
              className="w-full h-full object-cover object-center"
              src={OpeningImg}
              alt="openingImg"
            />
          </div>
        </div>
        {/* opening part ends  */}
      </div>
    </>
  );
}

export default Opening;
