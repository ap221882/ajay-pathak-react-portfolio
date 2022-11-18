import React from "react";
import Card from "./Card";
import { CardData } from "./CardData";

const Cards = () => {
  return (
    <>
      {CardData.map((oneCardData) => {
        return <Card key={oneCardData.id} oneCardData={oneCardData} />;
      })}
    </>
  );
};

export default Cards;
