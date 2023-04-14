import React, { useState } from "react";
import styled from "styled-components";

const StyleSearch = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 10px;
  }

  input {
    flex-grow: 1;
    border: none;
    outline: none;
  }

  width: 200px;
  height: 36px;
  border-radius: 4px;
  padding: 0 10px;
  input {
    font-size: 13px;
  }
`;

function SearchBox({ value, onChange }) {
  return (
    <StyleSearch>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value || undefined);
        }}
        placeholder={`Search`}
      />
    </StyleSearch>
  );
}

export default SearchBox;
