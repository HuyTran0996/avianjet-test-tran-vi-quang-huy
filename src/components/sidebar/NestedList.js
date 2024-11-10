import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "../../styles/NestedList.scss";
import mark from "../../images/mark.png";

const NestedList = ({ item, depth = 1.5, toggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const pageName =
    location.pathname === "/"
      ? ""
      : location.pathname.includes("transactions")
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
      : location.pathname.includes("route1")
      ? "route1"
      : "null";

  const handleClick = () => {
    if (!item.children) {
      navigate(`/${item.segment}`);
      if (toggle) {
        toggle();
      }
    } else {
      setOpen(!open);
    }
  };

  const checkName = pageName === "Dashboard" ? "" : pageName;

  return (
    <div className="item">
      <ListItemButton onClick={handleClick} sx={{ pl: depth * 2 }}>
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

        {/* note: this is for future update if we ever have a nest list, go to data folder, choose data.js and add the children */}
        {item.children &&
          (open ? (
            <ExpandLess sx={{ color: "white" }} />
          ) : (
            <ExpandMore sx={{ color: "white" }} />
          ))}
      </ListItemButton>

      {/* note: this is for future update if we ever have a nest list, go to data folder, choose data.js and add the children */}
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((childItem) => (
              <NestedList
                key={childItem.segment}
                item={childItem}
                depth={depth + 1}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default NestedList;
