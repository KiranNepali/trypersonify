import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import WorkImg1 from "../assets/works/DeshBandu.jpeg";
import WorkImg2 from "../assets/works/thomas.png";
import WorkImg3 from "../assets/works/Bittu.jpeg";
import WorkImg4 from "../assets/works/Krishna.jpg";
import WorkImg5 from "../assets/works/DrRam.jpeg";

function Works() {
  // projects data
  const worksData = [
    {
      name: "Dr.Ram",
      img: WorkImg1,
      category: "Recent work",
      title: "Crafting Personal Brand: Empowerment.",
    },
    {
      name: "Thomas",
      img: WorkImg2,
      category: "Recent work",
      title: "Crafting Personal Brand: Empowerment.",
    },
    {
      name: "Desh Bandu",
      img: WorkImg3,
      category: "Recent work",
      title: "Crafting Personal Brand: Empowerment.",
    },
    {
      name: "Krishna",
      img: WorkImg4,
      category: "Recent work",
      title: "Crafting Personal Brand: Empowerment.",
    },
    {
      name: "",
      img: WorkImg5,
      category: "Recent work",
      title: "Crafting Personal Brand: Empowerment.",
    },
  ];

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      const work = document.querySelectorAll(".works");
      work.forEach(function (elem) {
        elem.addEventListener("mouseenter", function (e) {
          gsap.to(elem.childNodes[0], {
            opacity: 1,
            scale: 1,
            duration: 0.5,
          });
        });
        elem.addEventListener("mouseleave", function () {
          gsap.to(elem.childNodes[0], {
            opacity: 0,
            scale: 0,
          });
        });
        elem.addEventListener("mousemove", function (e) {
          gsap.to(elem.childNodes[0], {
            duration: 0.5,
            yoyo: true,
            x: e.clientX - elem.getBoundingClientRect().x,
            y: e.clientY - elem.getBoundingClientRect().y,
            ease: "power3.out",
          });
        });
      });
    }
  }, []);

  // Animation
  const container = useRef(null);
  useGSAP(
    () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (!isMobile) {
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            // markers: true,
            scrub: 0.5,
            start: "top 60%",
            end: "top top",
          },
        });
        tl1.from(
          ".works",
          {
            opacity: 0.5,
            y: 100,
            x: "-50",
            duration: 8,
            ease: "easeInOut",
            stagger: 3,
            delay: 1,
          },
          "works"
        );
      }
    },
    { scope: container.current }
  );

  return (
    <div
      ref={container}
      className=" w-full relative  py-[6rem]  flex justify-center items-center flex-col  px-[5vw] md:px-[15vw] border-b-[1px] border-zinc-100 overflow-hidden bg-[#FFFFFF]"
    >
      <div className="w-full flex justify-start items-center">
        <div className="text-[13px] top font-bold uppercase text-zinc-400">
          Our portfolio
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-[1rem]">
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 auto-rows-[20rem] gap-5">
          {worksData.map((item, i) => (
            <a
              href={` ${
                i === 0
                  ? "https://deshbandhu.vercel.app/"
                  : i === 1
                  ? "https://thomasbosc.com/en#back-at-it-again-with-the-white-vans"
                  : i === 3
                  ? "https://krishna-personifye.vercel.app/"
                  : i === 4
                  ? "https://drram-personify.vercel.app/"
                  : "https://bittu.personifye.com/"
              }`}
              target="_blank"
              key={i}
              className={`works  w-full flex flex-col gap-[1rem] justify-start items-center relative cursor-pointer ${
                i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
              } ${i === 2 ? "md:row-span-2" : ""}`}
            >
              {/* view circle  */}
              <div className="absolute top-0 left-0 scale-0 flex justify-center items-center translate-x-[-50%] translate-y-[-50%] text-center  rounded-full bg-zinc-100  text-black font-medium text-[12px] opacity-0 w-[4rem] h-[4rem]">
                View
              </div>
              {/* img  */}
              <div className="w-full h-full overflow-hidden flex justify-center items-center">
                <img
                  className="object-cover object-top md:object-center hover:scale-[10rem] w-full h-full"
                  src={item.img}
                  alt="project"
                  loading="lazy"
                />
              </div>
              {/* description  */}
              <div className="flex flex-col justify-center items-start w-full ">
                <h2 className="text-[10px] font-bold uppercase text-gray-600">
                  {item.category}
                </h2>
                {/* <p className="font-bold text-[15px]">{item.title}</p> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
