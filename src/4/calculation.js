// import * as css from "./calculation.css";
import styled from "styled-components";

const WrapCalculation = styled.div`
  margin-top: 50px;
  .calculator {
    width: 400px;
    height: 650px;
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    border-radius: 10px;
  }

  .display {
    margin: 0 auto;
    width: 300px;
    height: 100px;
    margin-top: 20px;
    padding: 30px;
  }

  .numeric {
    width: 300px;
    height: 100px;
    box-sizing: border-box;
    resize: none;
    background: gray;
  }

  .button-container {
    width: 310px;
    height: 390px;
    margin: 0 auto;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(5, 70px);
    gap: 10px;
  }

  button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    font-size: large;
  }

  .number {
    background-color: orange;
  }
  .symbol {
    background-color: black;
    color: white;
  }
  .seven {
    grid-column: 1;
    grid-row: 2;
  }
  .eight {
    grid-column: 2;
    grid-row: 2;
  }
  .nine {
    grid-column: 3;
    grid-row: 2;
  }
  .four {
    grid-column: 1;
    grid-row: 3;
  }
  .five {
    grid-column: 2;
    grid-row: 3;
  }
  .six {
    grid-column: 3;
    grid-row: 3;
  }
  .one {
    grid-column: 1;
    grid-row: 4;
  }
  .two {
    grid-column: 2;
    grid-row: 4;
  }
  .three {
    grid-column: 3;
    grid-row: 4;
  }
  .zero {
    grid-column: 1 / 3;
    grid-row: 5;
  }
  .divide {
    grid-column: 4;
    grid-row: 1;
  }
  .multiple {
    grid-column: 4;
    grid-row: 2;
  }
  .minus {
    grid-column: 4;
    grid-row: 3;
  }
  .plus {
    grid-column: 4;
    grid-row: 4;
  }
  .equal {
    grid-column: 4;
    grid-row: 5;
  }
`;
export default function Calculation () {
  return (
    <WrapCalculation>
      <div className="calculator">
        <div className="display">
          <textarea className="numeric"></textarea>
        </div>
        <div className="button-container">
          <button className="number seven">7</button>
          <button className="number eight">8</button>
          <button className="number nine">9</button>
          <button className="number four">4</button>
          <button className="number five">5</button>
          <button className="number six">6</button>
          <button className="number one">1</button>
          <button className="number two">2</button>
          <button className="number three">3</button>
          <button className="number zero">0</button>
          <button className="symbol divide">/</button>
          <button className="symbol multiple">*</button>
          <button className="symbol minus">-</button>
          <button className="symbol plus">+</button>
          <button className="symbol equal">=</button>
        </div>
      </div>
    </WrapCalculation>
  )
}