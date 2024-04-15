import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import HeroImg from "../assets/hero.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero({ openingRef }) {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline({ repeat: -1 });
      tl1
        .to(".text", {
          y: "-100%",
          duration: 2,
          ease: "expo.inOut",
          delay: 1,
        })
        .to(".text", {
          y: "-200%",
          duration: 2,
          ease: "expo.inOut",
        })
        .to(".text", {
          y: "-300%",
          duration: 2,
          ease: "expo.inOut",
        });
      gsap.to(openingRef.current, {
        display: "none",
        scrollTrigger: {
          trigger: ".desc",
          start: "top top",
          end: "top top",
          scrub: 0.2,
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div
        id="home"
        ref={container}
        className="w-full py-[3rem] md:py-[0] md:h-[80vh] flex-col  md:flex-row px-[5vw] lg:px-[15vw] flex gap-[4rem] justify-center items-center border-b-[1px] border-zinc-100 bg-[#FFFFFF] overflow-hidden"
      >
        {/* left part  */}
        <div className="w-full  h-full flex flex-col gap-[1rem] justify-center items-start md:pl-[5vw]">
          {/* title  */}
          <h1 className="font-bold w-full text-[2rem] text-nowrap md:text-[3rem]">
            Your expert partner in
            <div className=" relative flex justify-start items-center h-[3rem] gap-3  md:h-[4rem] overflow-hidden">
              <h1 className="tracking-wider">personal</h1>
              <div className=" text w-full h-full flex justify-start items-center relative md:leading-[4rem] flex-col">
                <h1 className="one w-full h-full">branding</h1>
                <h1 className="two w-full h-full">growth</h1>
                <h1 className="three w-full h-full">profile</h1>
                <h1 className="three w-full h-full ">branding</h1>
              </div>
            </div>
          </h1>
          {/* title ends  */}

          <p className="desc text-[#808080] font-medium">
            "Personify is a personal branding agency. We help professional
            individuals harness the power of their personal brands, increasing
            recognition and ROI (Return on Investment)."
          </p>

          <a
            href="https://wa.me/9840255777"
            target="_blank"
            className="mt-[2rem]  font-semibold text-zinc-600 flex justify-center items-center hover:text-black"
          >
            <span className="text-[14px]">Get a free consultation</span>
            <div className="w-[2rem]  pt-0.5 flex justify-center items-center">
              <Icon
                icon="ri:arrow-drop-right-line"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </a>
        </div>

        {/* right part  */}
        <div className="w-full px-[10px] md:px-0 md:w-[40vw] order-first md:order-2 h-[30rem] md:h-full  md:overflow-visible flex  justify-center md:justify-start items-center">
          <div className="md:w-[20vw] w-full h-full relative md:h-[25vw]">
            <img
              className="w-full h-full  object-cover object-center rounded-md"
              src={HeroImg}
              alt=""
            />
            <div className="absolute  w-[3rem] py-[1rem] font-bold text-[11px] shadow-lg  text-zinc-800 rounded-full flex justify-center  items-center   flex-col bg-[#FFFFFF]   top-[10%]  left-0 -translate-x-[50%]">
              <span>P</span>
              <span>E</span>
              <span>R</span>
              <span>S</span>
              <span>O</span>
              <span>N</span>
              <span>I</span>
              <span>F</span>
              <span>Y</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
