import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatsImg1 from "../assets/q&a/q1.jpg";
import StatsImg2 from "../assets/q&a/q2.jpg";

gsap.registerPlugin(ScrollTrigger);
function Faq() {
  const [questionsData, setQuestionsData] = useState([
    {
      stats: "82%",
      desc: "Of customers trust a company when their senior management team are active on social media.",
    },
    {
      stats: "45%",
      desc: "Global executives believe up to 45% of company market value is attributable to CEO reputation.",
    },
    {
      stats: "13x",
      desc: "Customers are willing to pay 13.57x more for those they consider to be elite experts.",
    },
    {
      stats: "24/7",
      desc: "You are available 24/7 digitally & globally.",
    },
  ]);

  const container = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          // markers: true,
          start: "top 50%",
          end: "top top",
          scrub: 3,
        },
      });

      tl1.from(
        ".img1",
        {
          rotate: "0deg",
          duration: 2,
        },
        "img"
      );
      tl1.from(
        ".img2",
        {
          rotate: "0deg",
          duration: 2,
        },
        "img"
      );
    },
    { scope: container }
  );

  return (
    <div
      id="faq"
      ref={container}
      className="w-full py-[6rem]  border-b-[1px] border-zinc-100 flex justify-center items-center px-[5vw] md:px-[15vw] overflow-hidden bg-[#FFFFFF]"
    >
      <div className="w-full flex flex-col gap-[1rem] justify-center items-center">
        <div className="w-full flex  justify-start items-center">
          <span className="text-[13px] font-bold uppercase text-zinc-400">
            Why personify?
          </span>
        </div>

        {/* content  */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
          {/* left part  */}
          <div className="w-full flex-col justify-center gap-[2rem] items-start">
            <h1 className=" font-bold text-[2.5rem] md:text-[3.5vw] md:leading-[5rem]">
              The power of personal branding
            </h1>

            {/* question section  */}
            <div className="w-full flex justify-center items-center flex-col">
              {questionsData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full border-b-[1px] border-zinc-200 flex flex-col gap-[1rem] justify-between py-[2rem] items-center"
                  >
                    <div className="w-full flex flex-col md:flex-row  gap-2 justify-start items-center">
                      <div className="w-[6rem] flex justify-center items-center">
                        <h2 className="w-full flex justify-center items-center text-end   text-zinc-700  font-black text-[1.5rem]">
                          {item.stats}
                        </h2>
                      </div>
                      <p className="md:w-[30vw] w-full font-medium text-[14px] text-center md:text-start text-zinc-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* question part ends  */}
          </div>

          {/* right part  */}
          <div className="w-full h-[50vh] flex justify-center  items-center relative">
            <div className="img1  md:absolute bottom-0 left-[10%] w-[12rem] h-[25rem] md:w-[15vw] md:h-[50vh] -rotate-[20deg]">
              <img
                className="w-full h-full overflow-hidden  object-cover object-center"
                src={StatsImg1}
                alt=""
              />
            </div>
            <div className="img2 md:absolute bottom-0 right-[10%] w-[12rem] h-[25rem] md:w-[15vw] md:h-[50vh] rotate-[20deg]">
              <img
                className="w-full h-full overflow-hidden  object-cover object-center"
                src={StatsImg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
