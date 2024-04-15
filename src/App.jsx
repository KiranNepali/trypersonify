import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Opening from "./components/Opening";
// import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
// import Works from "./components/Works";
import OpeningSpotlight from "./components/OpeningSpotlight";
// import Blog from "./components/Blog";
import AudioPlayer from "./components/AudioPlayer";
import Preloader from "./assets/preloader.gif";
import { gsap, Expo } from "gsap";
import BgAudio from "./assets/sound.mp3";
import { useGSAP } from "@gsap/react";
import PreLoaderOpening from "./components/PreLoaderOpening";
import AudioPermission from "./components/AudioPermission";
// Lazy load the component
const Works = lazy(() => import("./components/Works"));
const Services = lazy(() => import("./components/Services"));
const Blog = lazy(() => import("./components/Blog"));

// Loading fallback component
const LoadingFallback = () => <div>Loading...</div>;

export default function App() {
  const openingRef = useRef();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setContentLoaded(true);
      },
      2000,
      reveal()
    );
    return () => clearTimeout(timeout);
  }, []);

  const preloaderRef = useRef(null);
  const reveal = () => {
    gsap.to(preloaderRef.current, {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 5,
      delay: 1,
    });
  };

  // handle sound
  const [isPlaying, setIsPlaying] = useState(false);
  const { contextSafe } = useGSAP();
  const audioRef = useRef();
  const permissionSoundRef = useRef();

  const handlePlayAudio = contextSafe(() => {
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
    gsap.to(permissionSoundRef.current, {
      opacity: 0,
      duration: 1,
      display: "none",
      ease: "easeIn",
    });
  });
  const handleMuteAudio = contextSafe(() => {
    const audio = audioRef.current;
    setIsPlaying(false);
    audio.pause();
    gsap.to(permissionSoundRef.current, {
      opacity: 0,
      duration: 1,
      display: "none",
      ease: "easeIn",
    });
  });

  return (
    <>
      <>
        <audio
          ref={audioRef}
          src={BgAudio}
          loop={true}
          autoPlay={false}
          style={{ display: "none" }}
        />
        {/* ask for audio permission  */}
        <div
          ref={permissionSoundRef}
          className="flex flex-col gap-6 text-zinc-200 fixed top-0 left-0 z-[20] justify-center items-center w-full h-screen bg-black"
        >
          <AudioPermission
            handleMuteAudio={handleMuteAudio}
            handlePlayAudio={handlePlayAudio}
          />
        </div>

        <div className={`w-full h-full bg-[#FFFFFF] text-black relative z-10`}>
          {/* <PreLoaderOpening /> */}
          <Opening />
          <div ref={openingRef}>
            <OpeningSpotlight />
          </div>
          <div className="w-full z-[50] relative  bg-[#FFFFFF]">
            <AudioPlayer
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
            />
            <Suspense fallback={<LoadingFallback />}>
              <Navbar />
              <Hero openingRef={openingRef} />
              <About />
              <Services />
              <Works />
              <Faq />
              <Testimonials />
              <Blog />
              <Contact />
              <Footer />
            </Suspense>
          </div>
        </div>
      </>
    </>
  );
}
