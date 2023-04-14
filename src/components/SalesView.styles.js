import styled from "styled-components";

export const StyledSalesView = styled.div`
  padding: 32px;
  color: #000;

  .info-section {
    display: flex;
    padding-top: 15px;
    align-items: center;
    gap: 24px;
  }

  form {
    display: inline-block;
    select {
      border: solid 1px #0a0a0a;
      padding: 12px;
      border-radius: 8px;
    }
    input {
      color: #565c69;
      border: solid 1px #f4f4f4;
      border-radius: 8px;
      padding: 10px;
      margin-left: 15px;
    }
  }

  p.heading {
    font-size: 25px;
  }

  p.p-days {
    color: #ef2c5a;
    font-weight: 700;
  }

  .infobox-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;

    @media (min-width: 768px) {
      gap: 20px;
    }
  }

  .klasha-infobox {
    width: 100%;
    display: grid;
    gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: minmax(200px, 1fr) auto;
    }

    .klasha_chart {
      position: relative;
      overflow: auto;
    }

    .klasha_info {
      background-color: #ef2c5a;
      padding: 24px;
      border-radius: 8px;
      display: grid;
      align-content: space-between;
      width: 250px;
      min-height: 220px;

      .wire-text {
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        color: #fff;
        line-height: 25px;
        max-width: 200px;
      }

      button {
        border: solid 1px #ef2c5a;
        border-radius: 8px;
        background-color: #000;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        padding: 12px 18px;
      }
    }
  }

  .data-box {
    border: solid 1px #000;
    border-radius: 8px;
    padding: 10px;

    &.black {
      background-color: black;
      color: white;
    }

    img {
      width: 100%;
    }

    p.cost {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
