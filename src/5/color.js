import * as css from "./color.css";

import { useEffect } from "react";

export default function Color () {
  function getRandomInt (max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div id="colorgame">
      <div id="colorcanvas">
        <canvas id="canvas"></canvas>
      </div>
      <button id="generator">generate</button>
    </div>
  )
}