// import * as css from "./color.css";

import { useEffect, useRef } from "react";
import styled from "styled-components";

const WrapColor = styled.div`
  #root {
    width: 100%;
    height: 100%;
  }
  #colorgame {
    width: 100%;
    height: 100%;
  }
  #colorcanvas {
    width: 500px;
    height: 300px;
  }
  #canvas {
    border: 2px solid black;
    box-sizing: border-box;
    background-color: white;
  }
`;

export default function Color () {
  function getRandomInt (max) {
    return Math.floor(Math.random() * max);
  }
  var red = getRandomInt(255).toString();
  var green = getRandomInt(255).toString();
  var blue = getRandomInt(255).toString();
  const canvasRef = useRef(null);
  function changeCanvasColor () {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    red = getRandomInt(255).toString();
    green = getRandomInt(255).toString();
    blue = getRandomInt(255).toString();
    ctx.fillStyle="rgb(" + red + ", " + green + ", " + blue + ")";
    ctx.fillRect(0, 0, 500, 300);
  }
  function checkAnswer () {
    alert("red:" + red + " green: " + green + " blue: " + blue)
  }
  return (
    <div id="colorgame">
      <div id="colorcanvas">
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
      <button id="generator" onClick={() => {changeCanvasColor()}}>generate</button>
      <div id="answer">
        <input type="number" min="0" max="255" id="red" />
        <input type="number" min="0" max="255" id="green" />
        <input type="number" min="0" max="255" id="blue" />
        <button id="submit" onClick={() => {checkAnswer()}}>submit</button>
      </div>
    </div>
  )
}