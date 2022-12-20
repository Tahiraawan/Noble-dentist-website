import React from "react";
import CardItem from "./CardItem";
import {CardData} from "../data/CardData"

function Card() {
  return (
    <div className=" grid md:grid-cols-2 gap-3 md:shadow-none shadow-[#0E9594]">
      {CardData.map((product) => {
        return (
          <CardItem
            imageLink={product.imageLink}
            title={product.title}
            paragraph={product.paragraph}
          />
        );
      })}
    </div>
  );
}

export default Card;
//