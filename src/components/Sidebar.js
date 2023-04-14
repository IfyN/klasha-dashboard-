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
import { StyledSidebar, StyledNavItem } from "./Sidebar.styles";
import { Link } from "react-router-dom";

const NavItem = ({ Icon, url, text }) => (
  <StyledNavItem to={url} className="nav-item">
    <Icon />
    <span className="nav-text">{text}</span>
  </StyledNavItem>
);

function Sidebar({ showSidebar, setShowSidebar }) {
  if (!showSidebar) {
    return <button onClick={() => setShowSidebar(true)}>Show panel</button>;
  }

  return (
    <StyledSidebar>
      <div className="klasha-section">
        <div className="logo">
          <Klasha />
        </div>
        <div className="klasha-details">
          <h4 className="heading"> Main pages</h4>
          <NavItem Icon={DashboardIcon} url="/" text="Dashboard" />
          <NavItem Icon={Wallet} url="/balances" text="Balances" />
          <NavItem Icon={Arrow} url="/transactions" text="Transactions" />
          <NavItem Icon={Graph} url="/analytics" text="Analytics" />
          <NavItem Icon={Speaker} url="/marketing" text="Marketing" />
          <NavItem Icon={Exchange} url="/exchange" text="Exchange Rates" />

          <h4>Accept Payments</h4>
          <NavItem Icon={Checkout} url="/checkout" text="Checkout" />
          <NavItem Icon={Payment} url="/payment" text="Payment" />

          <h4>Send Payments</h4>
          <NavItem Icon={Wire} url="/wire" text="Wire" />
        </div>
        <Link to ="https://klasha.com/contact" style={{textDecoration: 'none'}}>
        <button className="support"> ? Support </button>
        </Link>
        <button className="panel" onClick={() => setShowSidebar(false)}>
          {" "}
          Hide Panel{" "}
        </button>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
