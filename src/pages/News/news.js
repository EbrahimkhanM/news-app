import React from "react";
import SideNewsCard from "../../components/news/SideNewsCard";
import MainNewsCard from "../../components/news/MainNewsCard";

function News() {
  return (
    <div className="px-6 ">
      This is the news page
      <div className="h-[494px] flex flex-col md:flex-row gap-4 bg-[#F7F7F8]">
        <MainNewsCard />

        <div>
          <SideNewsCard />
          <SideNewsCard />
          <SideNewsCard />
        </div>
      </div>
    </div>
  );
}

export default News;
