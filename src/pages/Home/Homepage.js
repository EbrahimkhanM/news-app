import React,{useState } from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/card/CardList";
import SearchField from "../../components/searchField/SearchField";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCatgoryQuery] = useState();
  const [sourceQuery, setSourceQuery] = useState();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="container max-w-[1180px] mx-auto">
      {/* <Card /> */}
      <div className="mt-10">
      <SearchField onSearch={handleSearch} setCatgoryQuery={setCatgoryQuery} setSourceQuery={setSourceQuery} />
      <CardList searchQuery={searchQuery} categoryQuery={categoryQuery} sourceQuery={sourceQuery} />
      </div>
    </div>
  );
}

export default Homepage;
