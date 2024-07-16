// import * as css from "./credit.css";
import styled from "styled-components";

const WrapCheckout = styled.div`
  #form {
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    width: 500px;
    height: 700px;
    top: 50px;
    border: 2px solid;
    border-radius: 10px;
    background-color: white;
  }
  #textbox {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  input {
    height: 25px;
    width: 250px;
    margin: 20px auto;
  }

  button {
    width: 50px;
    height: 30px;
  }
  #btn {
    display: flex;
    justify-content: right;
  }
`;
function CreditCardCheckout() {
  return (
    <WrapCheckout>
      <form id="form">
        <div id="textbox">
          <input name="name" placeholder="enter your number" />
          <input type="month" />
          <input type="password" />
        </div>
        <div id="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </WrapCheckout>
  );
};

export default CreditCardCheckout;