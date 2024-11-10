import * as React from "react";

import List from "@mui/material/List";

import { NAVIGATION } from "../../data/data";
import "../../styles/Sidebar.scss";

import NestedList from "./NestedList";

export default function Sidebar() {
  return (
    <List
      className="sidebar"
      sx={{
        display: { xs: "none", sm: "flex" },
      }}
    >
      {NAVIGATION.map((item) => (
        <NestedList key={item.segment} item={item} />
      ))}
    </List>
  );
}
