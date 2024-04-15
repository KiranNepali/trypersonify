import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
function About() {
  const text = useRef(null);
  const container = useRef(null);
  useGSAP(
    () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (!isMobile) {
        const splitText = new SplitType(text.current);
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: "top 50%",
            end: "top top",
          },
        });
        tl1.from(
          ".char",
          {
            opacity: 0.5,
            y: 100,
            x: "-50",
            duration: 6,
            ease: true,
            stagger: 0.05,
          },
          "about"
        );
      }
    },
    { scope: container }
  );
  return (
    <div
      id="about"
      ref={container}
      className="w-full  flex justify-center items-center border-b-[1px] border-zinc-100 bg-[#FFFFFF]"
    >
      <div className="w-full px-[5vw] md:px-[15vw] py-[10rem] md:h-[80vh]  flex justify-center items-center">
        <div className="w-full lg:w-[45vw] gap-[1rem] flex flex-col justify-center items-center text-center">
          <div className="text-[13px] font-bold uppercase text-zinc-400">
            Who we are
          </div>
          <h2
            ref={text}
            className="font-bold w-full  md:text-[1.5vw] text-zinc-800 text-[15px] leading-[3rem] md:leading-[4rem]"
          >
            We're dedicated to empowering individuals in crafting compelling
            personal brand that capture their unique narratives, values, and
            goals. Our team offers scientific strategies and expert support to
            help you shine and thrive in today's competitive world.
          </h2>
        </div>
      </div>
      {/* <ul className="circles hidden md:block">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
    </div>
  );
}

export default About;
