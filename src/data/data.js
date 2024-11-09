import WindowIcon from "@mui/icons-material/Window";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WalletIcon from "@mui/icons-material/Wallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import dashboard from "../images/icons/dashboard.svg";
import transactions from "../images/icons/transactions.svg";
import wallet from "../images/icons/wallet.svg";
import analytics from "../images/icons/analytics.svg";
import user from "../images/icons/user.svg";
import message from "../images/icons/message.svg";
import setting from "../images/icons/setting.svg";

import wallet2 from "../images/icons/wallet2.svg";
import income from "../images/icons/income.svg";
import expenses from "../images/icons/expenses.svg";
import saving from "../images/icons/saving.svg";

//////MENU LIST//////////////
export const NAVIGATION = [
  {
    segment: "",
    title: "Dashboard",
    icon: <img src={dashboard} alt="dashboard" className="iconNav" />,
  },
  {
    segment: "transactions",
    title: "Transactions",
    icon: <img src={transactions} alt="transactions" className="iconNav" />,
  },
  {
    segment: "wallet",
    title: "Wallet",
    icon: <img src={wallet} alt="wallet" className="iconNav" />,
  },
  {
    segment: "analytics",
    title: "Analytics",
    icon: <img src={analytics} alt="analytics" className="iconNav" />,
  },
  {
    segment: "personal",
    title: "Personal",
    icon: <img src={user} alt="user" className="iconNav" />,
  },
  {
    segment: "message",
    title: "Message",
    icon: <img src={message} alt="message" className="iconNav" />,
  },
  {
    segment: "setting",
    title: "Setting",
    icon: <img src={setting} alt="setting" className="iconNav" />,
  },
];
/////END/////

export const ICONLIST = [
  {
    title: "Balance",
    icon: <img src={wallet2} alt="Balance" className="iconNav" />,
  },
  {
    title: "Income",
    icon: <img src={income} alt="Income" className="iconNav" />,
  },
  {
    title: "Expenses",
    icon: <img src={expenses} alt="Expenses" className="iconNav" />,
  },
  {
    title: "Savings",
    icon: <img src={saving} alt="Savings" className="iconNav" />,
  },
];
