import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardList() {
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      let newsAPIKey=process.env.REACT_APP_API_KEY
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`
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
