import React from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/card/CardList";

function Homepage() {
  return (
    <div className="text-2xl">
      Hey this is home page
      {/* <Card /> */}
      <CardList />
    </div>
  );
}

export default Homepage;
