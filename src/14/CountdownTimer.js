import styled from "styled-components";
import { useEffect } from "react";

const WrapCountdownTimer = styled.div`
  width: 90%;
  height: 90vh;
  background-color: white;
  margin: 0 auto;
  margin-top: 5vh;
`;

const CountdownTimer = () => {
  useEffect(() => {
    document.title = 'Countdown Timer';
  }, []);
  return (
    <WrapCountdownTimer>
      <div id="timer">
        <input type="time"></input>
      </div>
      <div id="buttons">
        <button id="start">start/restart</button>
        <button id="stop">stop</button>
        <button id="reset">reset</button>
      </div>
    </WrapCountdownTimer>
  )
}

export default CountdownTimer;