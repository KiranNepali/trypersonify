import React from "react";
import { Icon } from "@iconify/react";
import LogoImg from "../assets/LogoWhite.png";
import { Link } from "react-scroll";
import { SparklesCore } from "./ui/sparkles";
function Footer() {
  const socialIconsData = [
    {
      icon: "ic:twotone-facebook",
    },
    {
      icon: "uil:instagram",
    },
    {
      icon: "ri:whatsapp-fill",
    },
  ];

  const footerLinksData = [
    { link: "Home" },
    {
      link: "About us",
    },
    {
      link: "Our works",
    },
    {
      link: "Reviews",
    },
    {
      link: "Contact us",
    },
  ];
  return (
    <div id="footer" className="w-ful py-[3rem]  flex justify-center items-center px-[5vw] md:px-[15vw] bg-black  text-white overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center gap-[2rem]">
        <div className="font-bold w-full text-center flex justify-center items-center flex-col  text-[2rem] md:text-[4vw]">
          <img
            className="object-cover object-center w-[7rem] "
            src={LogoImg}
            alt=""
          />
          <div className="w-[40rem] h-20 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        {/* footer links  */}
        <div className="w-full flex md:flex-row flex-col justify-center items-center md:items-center gap-[1rem] md:gap-[5rem] text-[#808080] font-semibold text-[15px]">
          {footerLinksData.map((item, index) => {
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
                    ? "contact"
                    : ""
                }
                spy={true}
                // smooth={true}
                offset={-70}
                duration={500}
                key={index}
                href=""
                className="hover:text-white duration-150"
              >
                {item.link}
              </Link>
            );
          })}
        </div>

        {/* copyright part  */}
        <div className="w-full flex justify-center items-center text-[#808080] font-semibold">
          <span className="text-[12px]">
            © Copyright 2024 | Personify all rights reserved
          </span>
        </div>

        {/* social icons */}
        <div className="w-full flex justify-center items-center text-[#808080] font-semibold gap-[1rem] text-[18px]">
          {socialIconsData.map((item, index) => {
            return (
              <a
                key={index}
                href={`${
                  index === 2
                    ? "https://wa.me/9840255777"
                    : index === 0
                    ? "https://www.facebook.com/personify.website"
                    : index === 1
                    ? "https://www.instagram.com/personify.np?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    : ""
                }`}
                target="_blank"
              >
                <div
                  key={index}
                  className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] xl:w-[2rem] xl:wh-[2rem] hover:text-white duration-150 cursor-pointer"
                >
                  <Icon
                    icon={item.icon}
                    className="object-center object-cover w-full h-full"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
