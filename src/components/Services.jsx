import React, { useEffect } from "react";
import { ServicesAnim } from "../anim/ServiceAnim";
import PersonalLogoImg from "../assets/Services/personal-logo.jpg";
import PersonalWebsiteImg from "../assets/Services/personal-website.jpg";

import SocialGrowthImg from "../assets/Services/social-growth.jpg";
import ContentCreationImg from "../assets/Services/content-creation.avif";
import PersonalBrandStrImg from "../assets/Services/personal-brand-str.jpg";
import PersonalBrandMngImg from "../assets/Services/personal-brand-mng.jpg";
import PhotographyImg from "../assets/Services/photoshoot.jpg";
import { Link } from "react-scroll";
// Service data
const servicesData = [
  {
    title: "Personal logo",
    img: PersonalLogoImg,
  },
  {
    title: "Personal website",
    img: PersonalWebsiteImg,
  },
  {
    title: "Social growth",
    img: SocialGrowthImg,
  },
  {
    title: "Content creation",
    img: ContentCreationImg,
  },
  {
    title: "Personal brand strategy",
    img: PersonalBrandStrImg,
  },
  {
    title: "Personal brand management",
    img: PersonalBrandMngImg,
  },
  {
    title: "Professional photography",
    img: PhotographyImg,
  },
];

function Services() {
  useEffect(() => {
    ServicesAnim();
  }, []);

  return (
    <>
      <div
        id="services"
        className="w-full py-[6rem] flex justify-center items-center bg-black border-b-[1px] border-zinc-100"
      >
        <div className="w-full px-[5vw] md:px-[15vw] flex flex-col gap-[4rem] justify-center items-center">
          {/* top part  */}
          <div className="w-full flex flex-col justify-center items-start ">
            <span className="text-[13px] font-bold uppercase  text-zinc-400">
              Our expertise
            </span>

            <h1 className="font-bold text-[3rem] md:text-[3vw] text-white">
              Skills, Knowledge & Experiences
            </h1>
          </div>
          {/* top part ends */}
          <div id="app" className="overflow-hidden w-full z-[40] ">
            <div className="main-nav grid grid-cols-2 md:grid-cols-1 gap-6 ">
              {servicesData.map((service, index) => (
                <a key={index} to="/services">
                  <div
                    href=""
                    className="image-hover h-[6.5rem] md:h-[10rem] w-full  border-b-[1px] py-[3.5rem] px-[1rem] border-zinc-700 shadow-sm"
                  >
                    <h2
                      className="text-[1rem] text-start md:text-[1.3rem] font-semibold text-zinc-200"
                      data-title={service.title}
                    >
                      {service.title}
                    </h2>
                    {/* <div className="w-[20rem] h-[20rem]"> */}
                    <img
                      className="w-[15rem] h-[15rem] object-cover object-center"
                      src={service.img}
                      alt=""
                    />
                    {/* </div> */}
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-start items-center w-full mt-8">
              <a
                href="https://wa.me/9840255777"
                target="_blank"
                className="bg-[#111111] font-bold border-[1px] text-[15px]  border-zinc-500 hover:text-black duration-300 w-[12rem] text-center py-[10px]  text-[#FFFFFF] hover:bg-white "
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
