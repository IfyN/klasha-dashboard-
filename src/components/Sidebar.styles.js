import styled from "styled-components";

export const StyledSidebar = styled.div`
  background-color: #FFFBF7;
  display: grid;
  grid-auto-flow: column;

  .klasha-section {
    position: relative;
    margin: 40px 50px 0;
  }

    .nav-items{
      display: inline-block;
      padding-bottom: 18px;
    }
    
    .nav-text{
    
    }

    .nav-menu{
      display: inline-block;
    }
    .nav-text{
    bottom: 5px;
    position: relative;
    padding-left: 13px;
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


    h1 {
      position: relative;
      font-size: 6em;
    }

    h3 {
      position: relative;
      font-size: 2em;
      font-weight: ;
    }

    h4 {
      position: relative;
      font-weight: light;
      color: #8D8D8D;
    }

    .sidebar__image-cloud {
      display: flex;
      position: relative;
      width: 45%;
    }

    .displayed-cities{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 85%;
    }

    .city{
      border: 1px solid #616475;
      cursor: pointer;
      margin-bottom: 30px;
      padding: 20px 10px;
      width: 100%;
      color: #fff;
    }
}`;
