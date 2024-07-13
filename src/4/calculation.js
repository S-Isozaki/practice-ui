import * as css from "./calculation.css";
import { useState } from "react";

export default function Calculation () {
  return (
    <>
      <div className="button-container">
        <button className="seven">7</button>
        <button className="eight">8</button>
        <button className="nine">9</button>
        <button className="four">4</button>
        <button className="five">5</button>
        <button className="six">6</button>
        <button className="one">1</button>
        <button className="two">2</button>
        <button className="three">3</button>
        <button className="zero">0</button>
        <button className="divide">/</button>
        <button className="multiple">*</button>
        <button className="minus">-</button>
        <button className="plus">+</button>
        <button className="equal">=</button>
      </div>
    </>
  )
}