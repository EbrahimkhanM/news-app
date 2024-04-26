import React from "react";

export default function Card() {
  return (
    <div className="w-[100%] md:w-[388px]  ml-2 pb-[40px] md:pb-[63px] border border-b-[#22242F] flex flex-col">
      <div className="max-h-[258px]  w-[100%] mb-[21px] ">
        <img
          src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-stock-market-news-image-1.jpg"
          alt="img"
          className="h-[100%] w-[100%] mb-[21px] "
        />
      </div>

      <div className=" mb-[30px]   pr-[23px]">
        <div className="cursor-pointer pb-[11px]">
          <p className="font-lato text-sm font-[13px] leading-normal tracking-normal text-blue-500  hover:text-black ">
            Stock Market
          </p>
        </div>
        <div className="">
          <p className="text-[#45485F] font-sans font-lato text-xs font-normal mb-[4px]">
            <span>akbarh{"  "}</span> <span>June 28, 2021</span>
          </p>
          <h1 className="mt-[2px] mb-1   text-[#22242F] font-serif font-lora text-2xl font-bold">
            What Your Relationship With Stock Market Says About You
          </h1>

          <p class="text-gray-700 bg-transparent font-lato text-base font-normal leading-normal tracking-normal">
            Cursus iaculis etiam in In nullam donec sem sed consequat
            scelerisque nibh amet, massa egestas risus, gravida vel amet,
            imperdiet …
          </p>
        </div>
      </div>
    </div>
  );
}
