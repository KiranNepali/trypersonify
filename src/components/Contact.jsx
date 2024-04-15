import React from "react";
import { Link } from "react-scroll";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full py-[6rem]  border-b-[1px] border-zinc-100  px-[5vw] md:px-[15vw] bg-[#FFFFFF] flex justify-center items-center"
    >
      <div className="w-full flex  justify-center items-center flex-col gap-[1rem]">
        <div className="w-full flex  justify-start items-center">
          <span className="text-[13px] font-bold uppercase text-zinc-400">
            Get in touch ?
          </span>
        </div>

        <h1 className="w-full font-bold text-[2.5rem] md:text-[3.5vw] md:leading-[4rem]">
          Let's make it <br /> happen together !
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-[1rem] mt-[1rem]">
          <Link
            to="works"
            className="bg-[#111111]  w-[15rem] text-center py-[1rem] text-[#FFFFFF] border-[1px] border-zinc-800 font-bold"
            href=""
          >
            View our works
          </Link>
          <a
            href="https://wa.me/9840255777"
            target="_blank"
            className="border-[1px] border-zinc-800 text-black text-center w-[15rem] py-[1rem] font-bold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
