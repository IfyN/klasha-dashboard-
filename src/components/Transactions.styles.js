import styled from "styled-components";

export const StyledTransactions = styled.div`
  width: 90%;
  margin: 0 auto;
  color: #000;

  .info-section {
    display: flex;
    padding-top: 15px;
    align-items: center;
    gap: 24px;
  }

  form {
    display: inline-block;
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
    grid-template-columns: repeat(4, 200px);
    gap: 20px;
    border: solid black 1px;
  }

  h3 {
    padding-top: 50px;
  }

  img {
    display: flex;
    position: relative;
    margin-left: 25%;
    height: 62px;
  }

  .klasha-infobox {
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 20px;
  }

  .klasha_info {
    background-color: #ef2c5a;
    padding: 0 0 36px 25px;
  }

  .wire-text {
    padding-top: 25px;
    font-weight: 600;
    font-size: 17px;
    color: #fff;
    line-height: 25px;
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

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: ${(props) => (props.height ? props.height : "auto")};
  }

  .table-container {
    width: 100%;
    overflow: auto;
  }

  table {
    background: #ffffff;
    border: 1px solid #dfe2e5;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
  }

  thead {
    font-weight: bold;
    font-size: 10px;

    color: #121212;
  }

  tbody {
    tr {
      font-size: 13px;
      line-height: 20px;
      color: #000000;

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }

  th {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
  }

  td {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }

  td,
  th {
    text-align: left;
    padding: 16px 15px;
  }

  .table-filter {
    display: flex;
    margin-bottom: 20px;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .margin-top {
    margin-top: 8px;
  }

  .pagination {
    display: flex;
    padding: 0px 5px;
    margin: 10px;
    color: #40196d;
    font-size: 14px;
  }

  .pagination-text {
    font-weight: bold;
    font-size: 14px;
    line-height: 13px;

    color: #000;
  }

  .arrow {
    display: flex;
    align-items: center;
    height: 25px;

    cursor: pointer;
  }

  .disabled {
    opacity: 0.5;
  }

  .right {
    border-right: 1px solid #cacaca;
    padding-right: 10px;
  }

  .left {
    border-left: 1px solid #cacaca;
    padding-left: 10px;
  }
`;
