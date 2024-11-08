import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { NAVIGATION } from "../../data/data";
import "../../styles/SidebarSmallScreen.scss";

const NestedList = ({ item, depth = 1.5, onNavigate, pageName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${item.segment}`);
    onNavigate();
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
      </ListItemButton>
    </div>
  );
};

export default function SidebarSmallScreen({ pageName }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box className="sidebarSmallScreen">
          <List>
            {NAVIGATION.map((item) => (
              <NestedList
                key={item.segment}
                item={item}
                onNavigate={() => toggleDrawer(false)()}
                pageName={pageName}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
