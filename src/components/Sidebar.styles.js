import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-bottom: 18px;
  color: #0a0a0a;
  text-decoration: none;

  &.active {
    text-decoration: underline;
    color: #ef2c5a;

    path,
    rect {
      stroke: #ef2c5a;
    }
  }

  .nav-text {
    display: none;
    @media (min-width: 768px) {
      display: block;
      padding-left: 13px;
      font-size: 14px;
    }
  }
`;

export const StyledSidebar = styled.div`
  background-color: #FFFBF7;
  display: grid;
  grid-auto-flow: column;

  .klasha-section {
    padding: 20px 10px;
    @media(min-width: 768px) {
      padding: 40px 50px;
    }
  }

  .logo {
    display: none;
    @media(min-width: 768px) {
      display: block;
    }
  }
   
    .sidebar--burger{
      position: absolute;
      right: 120px;
      top: 0;
    }

    .klasha-details {
      display: flex;
      flex-direction: column;
      margin-top: 10%;
    }

    h4 {
      display: none;

      @media(min-width: 768px) {
        display: block;
        font-weight: light;
        color: #8D8D8D;
        font-size: 14px;
      }
    }

    .support{
      display: none;
      @media(min-width: 768px) {
        display: block;
      }
      border: solid 1px #ef2c5a;
      border-radius: 39px;
      background-color: #ef2c5a;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      padding: 12px 18px;
    }

    .panel{
      display: none;
      @media(min-width: 768px) {
        display: block;
      }
      margin-top: 25px;
      border: solid 2px #000;
      background-color: #fff;
      border-radius: 8px;
      color: #000;
      font-weight: 700;
      font-size: 14px;
      padding: 12px 18px;
    }
}`;
