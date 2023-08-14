import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";

const Dashboard = () => {
  return (
    <Wrapper>
        <Header></Header>
      <div className="dashboard">
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;
