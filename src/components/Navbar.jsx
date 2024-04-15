import { useGSAP } from "@gsap/react";
import { Icon, InlineIcon } from "@iconify/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import LogoImg from "../assets/logopng.png";
// react scroll
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const NavbarLinksData = [
    { link: "Home" },
    {
      link: "About us",
    },
    {
      link: "Our services",
    },
    {
      link: "Our works",
    },
    {
      link: "Reviews",
    },
    {
      link: "Blog",
    },
  ];

  const sideNav = useRef();
  const { contextSafe } = useGSAP();

  const handleHam = contextSafe(() => {
    gsap.to(sideNav.current, {
      display: "flex",
      position: "fixed",
      right: 0,
      duration: 0.5,
      ease: "easeInOut",
    });
  });
  const handleCLose = contextSafe(() => {
    gsap.to(sideNav.current, {
      position: "hidden",
      right: "-100%",
      duration: 0.5,
      ease: "easeInOut",
    });
  });
  const scrollNav = contextSafe(() => {
    gsap.to(sideNav.current, {
      position: "hidden",
      right: "-100%",
      duration: 0.4,
      ease: "easeInOut",
    });
  });

  return (
    <>
      {/* side nav  */}
      <div
        ref={sideNav}
        className="bg-[#FFFFFF]  absolute z-[1000] top-0 -right-[100%] hidden h-screen w-full  flex-col"
      >
        <div className="w-full h-[4rem] flex justify-end items-center px-[5vw]">
          <div onClick={handleCLose} className="w-[2.5rem] h-[2.5rem]">
            <Icon
              className="object-cover object-center w-full h-full"
              icon="charm:cross"
            />
          </div>
        </div>
        <div className="w-full h-full  flex flex-col gap-[1rem] justify-center items-center">
          {NavbarLinksData.map((item, index) => {
            return (
              <Link
                // key="index"
                onClick={scrollNav}
                activeClass="active"
                to={
                  index === 0
                    ? "home"
                    : index === 1
                    ? "about"
                    : index === 2
                    ? "services"
                    : index === 3
                    ? "works"
                    : index === 4
                    ? "testimonials"
                    : index === 5
                    ? "blog"
                    : ""
                }
                spy={true}
                // smooth={true}
                offset={-70}
                duration={500}
                key={index}
                href=""
                className="text-zinc-600  text-[1.5rem] hover:text-black font-black"
              >
                {item.link}
              </Link>
            );
          })}
          <a
            href="https://wa.me/9840255777"
            target="_blank"
            className=" mt-11 border-2 border-zinc-100 shadow-md cursor-pointer bg-green-400 px-5 py-2 rounded-full flex justify-center items-center gap-2"
          >
            <Icon icon="logos:whatsapp-icon" width={20} />
            <span className="text-[16px] text-zinc-700  font-bold ">
              Free consultation
            </span>
          </a>
        </div>
      </div>
      {/* side nav ends  */}
      <div className="w-full h-[4rem] md:h-[4rem] px-[5vw] md:px-[15vw] border-b-[1px] border-zinc-100 flex items-center justify-center  sticky top-0 left-0  bg-[#FFFFFF] z-[100]">
        <div className="w-full flex justify-between items-center overflow-hidden">
          {/* logo  */}
          <Link
            to="home"
            spy={true}
            // smooth={true}
            offset={-70}
            duration={500}
            className="font-black text-lg md:text-xl cursor-pointer"
          >
            <img
              className="object-cover object-center w-[6rem] md:w-[6rem] "
              src={LogoImg}
              alt=""
            />
          </Link>
          {/* logo ends  */}

          {/* nav links  */}
          <div className=" xl:flex justify-center items-center gap-[3vw] hidden ">
            {NavbarLinksData.map((item, index) => {
              return (
                <Link
                  // ref={link}
                  // key="index"
                  activeClass="active"
                  to={
                    index === 0
                      ? "home"
                      : index === 1
                      ? "about"
                      : index === 2
                      ? "services"
                      : index === 3
                      ? "works"
                      : index === 4
                      ? "testimonials"
                      : index === 5
                      ? "blog"
                      : "#"
                  }
                  spy={true}
                  // smooth={true}
                  offset={-70}
                  duration={500}
                  key={index}
                  href=""
                  className="text-zinc-700 hover:text-black font-bold text-[15px] underline_hover_effect"
                >
                  {item.link}
                </Link>
              );
            })}
            <Link
              to="contact"
              spy={true}
              // smooth={true}
              offset={-70}
              duration={500}
              className="bg-[#111111] font-bold border-[1px] text-[15px]   border-zinc-800 hover:text-black duration-300 w-[8rem] text-center py-[6px] text-[#FFFFFF] hover:bg-white "
              href=""
            >
              Contact us
            </Link>
          </div>
          {/* hamburger  */}
          <div
            onClick={handleHam}
            className="xl:hidden flex justify-center items-center w-[2rem] h-[2rem] cursor-pointer"
          >
            <Icon
              icon="mdi:hamburger-menu"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
