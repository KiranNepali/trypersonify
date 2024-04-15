import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
const reviewData = [
  {
    clientName: "Krishna G. Mul",
    compName: "Logo Lab",
    post: "Brand creator",
    comment:
      "Really impressed with Personify's work! They've truly elevated my brand creation journey, making it stand out and drive sales. Highly recommend their expertise!",
  },
  {
    clientName: "Desh Bandu Basnet",
    compName: "AB Holding",
    post: "Business leader",
    comment:
      // "Big thanks to Personify Company for the amazing logo and brand they created for me. Professional, responsive, and truly understood my vision.",
      "Personify Company exceeded my expectations, crafting a stunning logo and brand identity that truly captured my vision. Their creativity and professionalism were exceptional. Highly recommend for top-notch design services.",
  },
  {
    clientName: "Dr. Ram",
    compName: "",
    post: "Psychiatrist",
    comment:
      "Personify is a true gem! Their creativity and attention to detail shine in every design. Highly recommended!",
  },
  {
    clientName: "Bittu KC",
    compName: "",
    post: "Influencer",
    comment:
      "Hey everyone! Just wanted to share some thoughts on Personify. They're not just about great products; they genuinely care about helping me grow my following. Excited to be part of this awesome partnership!",
  },
];
function Testimonials() {
  const [clientReview, setClientReview] = useState(reviewData);
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
            start: "top 50%",
            end: "top top",
          },
        });
        tl1.from(
          ".review",
          {
            opacity: 0.5,
            y: 100,
            x: "-50",
            duration: 8,
            ease: "easeInOut",
            stagger: 3,
            delay: 1,
          },
          "testimonials"
        );
      }
    },
    { scope: container.current }
  );
  return (
    <div
      id="testimonials"
      ref={container}
      className="w-full py-[6rem] flex justify-center items-center flex-col bg-[#FFFFFF]  px-[5vw] md:px-[15vw] overflow-hidden border-b-[1px] border-zinc-100"
    >
      <div className="w-full flex  justify-start items-center">
        <span className="text-[13px] font-bold uppercase text-zinc-400">
          Testimonials
        </span>
      </div>
      <div className="flex flex-col gap-[2rem] justify-center items-center w-full mt-[1rem]">
        <h1 className="w-full font-bold text-[2.5rem] md:text-[3.5vw]  md:leading-[5rem]">
          Our clients love our work
        </h1>
        <div className="w-full grid md:grid-cols-2 gap-y-[2rem] gap-[2rem]">
          {clientReview.map((item, i) => (
            <div
              key={i}
              className="review w-full flex p-[2rem]  bg-[#FAFAFA] flex-col gap-[1rem] overflow-hidden  justify-start items-start"
            >
              <span className="font-bold text-[15px] tracking-wider">
                {item.clientName}
              </span>

              {/* comment  */}
              <div className="flex justify-center items-center font-medium text-zinc-700 text-[14px]">
                {item.comment}
              </div>

              {/* rate  */}
              <div className="flex justify-center gap-3 items-center">
                <div className="flex justify-center items-center">
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                </div>
                <span className="text-[12px] font-medium">5.0</span>
              </div>
              <div className="flex justify-center items-center gap-[0.6rem]">
                <span className="text-[12px] font-medium text-zinc-700">
                  {item.compName}
                </span>
                <span className=" text-[11px] text-zinc-600 ">{item.post}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
