import React, { useEffect, useState } from "react";
import Card from "./Card";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
export default function CardList({ searchQuery, categoryQuery ,sourceQuery,fromDate,toDate  }) {
  console.log("fromDate==INNNNNNNN==",fromDate)
  console.log("toDate==INNNNNNNN==",toDate)
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      let newsAPIKey = process.env.REACT_APP_API_KEY;
      let apiUrl;
      // let apiUrl = searchQuery
      //   ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${newsAPIKey}&language=en&searchIn=title`
      //   : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`;
      if (fromDate && toDate ) {
        // Fetch news based on category
        apiUrl = `https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${newsAPIKey}`;
      } else if (searchQuery) {
        // Fetch news based on search query
        apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${newsAPIKey}&language=en&searchIn=title`;
      } else if(sourceQuery){
        apiUrl = `https://newsapi.org/v2/top-headlines?sources=${sourceQuery}&apiKey=${newsAPIKey}`;
      } else {
        // Fetch general top headlines
        apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`;
      }
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data resp-----------------------///////////////",data)
        if(data?.articles){
          setNews(data.articles);
        }else if(data?.sources){
          setNews(data?.sources);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when request completes
      }
    };

    fetchNews();
  }, [searchQuery,categoryQuery,sourceQuery,fromDate]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  console.log("news>>>>", news);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color={"#36D7B7"}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      ) : (
        <>
          {!news || news.length == 0 ? (
            <div>
              <h2>Sorry, No Results Found</h2>
            </div>
          ) : (
            <Card news={news} />
          )}
        </>
      )}
    </>
  );
}
