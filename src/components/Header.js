import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  Badge,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import "../styles/Header.scss";
import logo from "../images/logo.png";
import user from "../images/user.png";
import SidebarSmallScreen from "./sidebar/SidebarSmallScreen";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

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

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "75px" }} className="header">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* left items */}
          <Box sx={{ display: "flex" }}>
            {/* menu icon for small screen */}

            <SidebarSmallScreen pageName={pageName} />

            {/* logo and page name */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "157px",
                  height: "36px",
                  marginRight: "5px",
                }}
              />
              <Typography
                className="pageName"
                noWrap
                component="div"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {pageName}
              </Typography>
            </Box>
          </Box>

          {/* right items */}
          <Box sx={{ display: "flex", alignItems: "center " }}>
            {/* search bar */}
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <SearchIcon className="searchIcon" />
            </div>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsNoneOutlinedIcon className="bellIcon" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {user ? <img src={user} alt="user" /> : <AccountCircle />}
              </IconButton>
            </Box>

            {/* button to show mobileMenu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
