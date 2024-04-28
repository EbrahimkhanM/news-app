import React from "react";
import Card from "../../components/stockMarket/Card";

export default function StockMarket() {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap">
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}
