import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import MainLayout from "./components/MainLayout";

import Dashboard from "./page/Dashboard";
import Transactions from "./page/Transactions";
import Wallet from "./page/Wallet";
import Analytics from "./page/Analytics";
import Personal from "./page/Personal";
import Message from "./page/Message";
import Setting from "./page/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="personal" element={<Personal />} />
          <Route path="message" element={<Message />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
