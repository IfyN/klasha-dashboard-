import React from "react";
import {
  Exchange,
  Klasha,
  DashboardIcon,
  Wallet,
  Speaker,
  Arrow,
  Graph,
  Checkout,
  Payment,
  Wire,
} from "../components/Svgicons";
import { StyledSidebar } from "./Sidebar.styles";

function Sidebar() {
  return (
    <StyledSidebar>
      <div className="klasha-section">
        <Klasha />
        <div className="klasha-details">
          <h4 className="heading"> Main pages</h4>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <DashboardIcon />
            </span>{" "}
            <span className="nav-text">Dashboard</span>
          </div>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Wallet />
            </span>{" "}
            <span className="nav-text">Balances</span>
          </div>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Arrow />
            </span>{" "}
            <span className="nav-text">Transactions</span>
          </div>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Graph />
            </span>{" "}
            <span className="nav-text">Analytics</span>
          </div>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Speaker />
            </span>{" "}
            <span className="nav-text">Marketing</span>
          </div>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Exchange />
            </span>{" "}
            <span className="nav-text">Exchange Rates</span>
          </div>
          <h4>Accept Payments</h4>
          <div className="nav-items">
            <div className="nav-text">
              <span className="nav-icon">
                {" "}
                <Checkout />
              </span>{" "}
              <span className="nav-text">Checkout</span>
            </div>
          </div>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Payment />
            </span>{" "}
            <span className="nav-text">Payment</span>
          </div>
          <h4>Send Payments</h4>
          <div className="nav-items">
            <span className="nav-icon">
              {" "}
              <Wire />
            </span>{" "}
            <span className="nav-text">Wire</span>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
