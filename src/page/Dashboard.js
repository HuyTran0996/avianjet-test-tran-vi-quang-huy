import React from "react";
import TotalCard from "../components/TotalCard";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  const demoData = [
    { title: "Balance", amount: "41210" },
    { title: "Income", amount: "41210" },
    { title: "Expenses", amount: "41210" },
    { title: "Savings", amount: "41210" },
  ];
  return (
    <div className="dashboard">
      <div className="cards">
        {demoData.map((item, index) => {
          return <TotalCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
