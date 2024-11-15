import React from "react";
import { Box } from "@mui/material";
import "../styles/TotalCard.scss";
import { ICONLIST } from "../data/data";

const TotalCard = ({ item }) => {
  return (
    <Box className="totalCard">
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
    </Box>
  );
};

export default TotalCard;
