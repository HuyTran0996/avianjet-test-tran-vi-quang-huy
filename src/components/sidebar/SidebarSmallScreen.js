import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { NAVIGATION } from "../../data/data";
import "../../styles/SidebarSmallScreen.scss";

import NestedList from "./NestedList";

export default function SidebarSmallScreen() {
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
                toggle={() => toggleDrawer(false)()}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
