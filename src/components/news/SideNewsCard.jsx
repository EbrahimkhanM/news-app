import React from "react";

export default function SideNewsCard() {
  return (
    <div className="w-full flex flex-row gap-4 pb-4  ">
      <img
        src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg"
        alt="img"
        className=" h-[150px] w-[126.5px] md:h-[203px] md:w-[226.5px] lg:h-[131px] lg:w-[296px]"
      />

      <div className=" w-[50%] md:my-auto my-0">
        <div className="pt-3 pb-[9px] pr-6">
          <div className=" bg-[#45485F]  inline-block min-w-min cursor-pointer">
            <p className=" text-[#FFFFFF] font-sans font-lato text-base leading-normal font-normal px-1 py-1/2  hover:text-black ">
              Technology
            </p>
          </div>
          <div className="mt-[2px] mb-[8px]">
            <h1 className="mt-[2px] mb-[8px]   text-gray-900 font-serif font-lora text-base font-bold">
              Want a Career in Technology? Make This Your Secret Weapon June 28,
              2021
            </h1>
            <p className="text-gray-600 font-sans font-lato text-xs font-normal">
              June 28, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
