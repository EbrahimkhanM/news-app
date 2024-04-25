import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardList() {
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=425b94cf19be4a12a442b6a0db7420f5"
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);
  console.log("news>>>>", news);
  return (
    <>
      <Card news={news} />
    </>
  );
}
