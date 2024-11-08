import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LayersIcon from "@mui/icons-material/Layers";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FactoryIcon from "@mui/icons-material/Factory";
import WidgetsIcon from "@mui/icons-material/Widgets";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SellIcon from "@mui/icons-material/Sell";
import CreateIcon from "@mui/icons-material/Create";
import SubjectIcon from "@mui/icons-material/Subject";
import PhotoIcon from "@mui/icons-material/Photo";
import WindowIcon from "@mui/icons-material/Window";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WalletIcon from "@mui/icons-material/Wallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
//////MENU LIST//////////////
export const NAVIGATION = [
  {
    segment: "",
    title: "Dashboard",
    icon: <WindowIcon />,
  },
  {
    segment: "transactions",
    title: "Transactions",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    segment: "wallet",
    title: "Wallet",
    icon: <WalletIcon />,
  },
  {
    segment: "analytics",
    title: "Analytics",
    icon: <AssessmentIcon />,
  },
  {
    segment: "personal",
    title: "Personal",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    segment: "message",
    title: "Message",
    icon: <EmailOutlinedIcon />,
  },
  {
    segment: "setting",
    title: "Setting",
    icon: <SettingsOutlinedIcon />,
  },
  // {
  //   segment: "product",
  //   title: "Catalog",
  //   icon: <CategoryIcon />,
  //   children: [
  //     {
  //       segment: "addProduct",
  //       icon: <AddShoppingCartIcon />,
  //       title: "Add Product",
  //     },
  //     {
  //       segment: "productList",
  //       icon: <ShoppingCartIcon />,
  //       title: "Product List",
  //     },
  //     // {
  //     //   segment: "brand",
  //     //   icon: <FactoryIcon />,
  //     //   title: "Brand",
  //     // },
  //     {
  //       segment: "brandList",
  //       icon: <FactoryIcon />,
  //       title: "Brand List ",
  //     },
  //     // {
  //     //   segment: "category",
  //     //   icon: <WidgetsIcon />,
  //     //   title: "Category",
  //     // },
  //     {
  //       segment: "productCategoryList",
  //       icon: <WidgetsIcon />,
  //       title: " Product Category List",
  //     },
  //     // {
  //     //   segment: "color",
  //     //   icon: <FormatColorFillIcon />,
  //     //   title: "Color",
  //     // },
  //     // {
  //     //   segment: "list-color",
  //     //   icon: <FormatColorFillIcon />,
  //     //   title: "Color List",
  //     // },
  //   ],
  // },
];
/////END/////
