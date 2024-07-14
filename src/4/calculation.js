// import * as css from "./calculation.css";
import { useState } from "react";

export default function Calculation () {
  return (
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
  )
}