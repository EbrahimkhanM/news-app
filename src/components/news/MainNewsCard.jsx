import React from "react";

export default function MainNewsCard() {
  return (
    <div
      className="w-[50%] bg-cover bg-center flex flex-col justify-end p-6"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-1.jpg')",
      }}
    >
      <div className=" pr-[40px] pt-6 pb-6">
        <div className=" bg-[#45485F]  inline-block min-w-min cursor-pointer">
          <p className=" text-[#FFFFFF] font-sans font-lato text-base leading-normal font-normal px-1 py-1/2  hover:text-black ">
            Stock Market
          </p>
        </div>
        <h1 className="mt-[2px] mb-[8px] text-white font-serif font-lora text-[28px] leading-[40px] font-bold">
          15 Shocking Elon Musk Tweets About Stock Market
        </h1>
        <p className="text-white font-sans font-lato text-xs font-normal">
          <span>akbarh{"  "}</span> <span>June 28, 2021</span>
        </p>
      </div>
    </div>
  );
}
