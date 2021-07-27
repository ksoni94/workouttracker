import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const apiTest = (value) => {
  axios.post("/api/test", { name: value });
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto auto;
`;

const Test = () => {
  const [name, setName] = useState(null);
  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => apiTest(name)}>send</button>
      </div>
      <GridWrapper>
        <div style={{ backgroundColor: "blue" }}>
          1 lots and lots of words will go in here so i can stretch out this box
        </div>
        <div style={{ backgroundColor: "red" }}>2</div>
        <div style={{ backgroundColor: "green" }}>3</div>
        <div style={{ backgroundColor: "pink" }}>4</div>
        <div style={{ backgroundColor: "orange" }}>5</div>
        <div style={{ backgroundColor: "purple" }}>6</div>
      </GridWrapper>
    </>
  );
};

export default Test;
