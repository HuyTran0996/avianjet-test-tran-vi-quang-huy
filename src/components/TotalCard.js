import React from "react";
import "../styles/TotalCard.scss";
import { ICONLIST } from "../data/data";

const TotalCard = ({ item }) => {
  console.log("oooo", item);
  return (
    <div className="totalCard">
      <div className="icon">
        {ICONLIST.find((icon) => icon.title === item.title)?.icon}
      </div>
      <div className="content">
        <p className="title">{item.title}</p>
        <p className="amount">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(item.amount)}
        </p>
      </div>
    </div>
  );
};

export default TotalCard;
