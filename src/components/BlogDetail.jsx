import React from "react";
import { Icon } from "@iconify/react";
function BlogDetail({
  setBlogDetail,
  blogDetail,
  clickedBlogData,
  setClickedBlogData,
}) {
  const handleCLoseBlogPreview = () => {
    setBlogDetail(!blogDetail);
    setClickedBlogData([]);
  };
  // console.log(clickedBlogData);
  return (
    <div className="h-screen overflow-hidden  z-[1000] fixed top-0 left-0 w-full bg-zinc-800 text-black flex justify-center  items-center backdrop-blur-sm">
      <div
        onClick={handleCLoseBlogPreview}
        className="fixed flex justify-center items-center overflow-x-hidden  text-black bg-white  top-[1rem] left-3 md:left-[5rem] rounded-full  shadow-lg  mr-1  z-10 w-[2rem] h-[2rem] font-bold  cursor-pointer"
      >
        <Icon
          className="w-[1rem]  h-[1rem] object-cover object-center"
          icon="icon-park-outline:back"
        />
      </div>
      <div className="flex overflow-y-auto overflow-x-hidden p-[1rem] md:p-[5rem] gap-[1rem] flex-col h-full relative justify-start py-[2rem] items-start w-full  md:w-[70vw] bg-white">
        {clickedBlogData.map((item, index) => (
          <div key={index} className="relative w-full">
            {/* title */}
            <div className="flex justify-center text-center items-center w-full ">
              <span className="text-4xl font-semibold">{item.title}</span>
            </div>
            {/* published date */}
            <div className="w-full  flex justify-center items-center">
              <span className="text-[12px] text-zinc-400 font-semibold">
                02 April 2024
              </span>
            </div>
            {/* image */}
            <div className="w-full flex mt-4 justify-center items-center">
              <div className="md:w-[60vw] md:h-[25vw] w-full h-[15rem]">
                <img
                  src={item.img}
                  alt="image"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>

            <div className="w-full  mt-[2rem] flex flex-col gap-[1rem]">
              {/* intro  */}
              <p className="text-zinc-700 font-medium">{item.intro}</p>
              {/* points  */}
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic1}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc1}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic2}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc2}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic3}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc3}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic4}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc4}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic5}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc5}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic6}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc6}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic7}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc7}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic8}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc8}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic9}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc9}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic10}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc10}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic11}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc11}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* title  */}
                <span className="font-bold text-md">{item.topic12}</span>
                {/* description  */}
                <p className="text-zinc-700 font-medium">{item.desc12}</p>
              </div>
              <div className="w-full flex  justify-center items-start flex-col">
                {/* conclusion  */}
                <p className="text-zinc-700 font-medium">{item.conclusion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetail;
