import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Spotlight } from "./ui/spotlight";

function AudioPermission({ handleMuteAudio, handlePlayAudio }) {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="h-full w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="top-10 left-0 md:left-80 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl text-nowrap md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Music
              <br />
              is medicine for soul.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Would you like to experience Personify website with sound?
            </p>
            <div className="flex mt-[2rem]  text-zinc-400 justify-center items-center gap-10 font-semibold">
              <span
                onClick={handleMuteAudio}
                className="cursor-pointer hover:text-white duration-100"
              >
                <Icon icon="dashicons:no" className="w-[2rem] h-[2rem]" />
              </span>
              <span
                onClick={handlePlayAudio}
                className="cursor-pointer hover:text-white duration-100"
              >
                <Icon icon="dashicons:yes-alt" className="w-[2rem] h-[2rem]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioPermission;
