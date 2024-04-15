import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

const AudioPlayer = ({ isPlaying, setIsPlaying, audioRef }) => {
  const handlePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };

  useEffect(() => {
    // Call handlePlay when component mounts
    handlePlay();
  }, [setIsPlaying]);

  return (
    <div className="fixed z-[1000] bottom-[5%] right-[5%]">
      <div
        onClick={handlePlay}
        className="shadow-lg  border-[1px] border-zinc-300 w-[3.5rem] h-[1.8rem] p-1 bg-white rounded-full overflow-hidden flex justify-center items-center cursor-pointer"
      >
        <Icon
          className="w-full h-full object-cover object-center"
          icon={isPlaying ? "akar-icons:sound-on" : "akar-icons:sound-off"}
          style={{ color: "black" }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
