import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NAVIGATION } from "../../data/data";
import "../../styles/Sidebar.scss";
import mark from "../../images/mark.png";

const NestedList = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pageName = location.pathname.includes("transactions")
    ? "Transactions"
    : location.pathname.includes("wallet")
    ? "Wallet"
    : location.pathname.includes("analytics")
    ? "Analytics"
    : location.pathname.includes("personal")
    ? "Personal"
    : location.pathname.includes("message")
    ? "Message"
    : location.pathname.includes("setting")
    ? "Setting"
    : "Dashboard";

  const handleClick = () => {
    navigate(`/${item.segment}`);
  };

  const checkName = pageName === "Dashboard" ? "" : pageName;

  return (
    <div className="item">
      <ListItemButton onClick={handleClick} sx={{ pl: 3 }}>
        {item.icon && (
          <ListItemIcon
            className={
              checkName.toLowerCase() === item.segment.toLowerCase()
                ? "icon active"
                : "icon"
            }
          >
            {item.icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={item.title}
          className={
            checkName.toLowerCase() === item.segment.toLowerCase()
              ? "title active"
              : "title"
          }
        />

        <img
          src={mark}
          alt="mark"
          className="markPoint"
          style={{
            display:
              checkName.toLowerCase() === item.segment.toLowerCase()
                ? "block"
                : "none",
          }}
        />
      </ListItemButton>
    </div>
  );
};

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
