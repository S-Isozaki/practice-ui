// import * as css from "./credit.css";
import styled from "styled-components";

const WrapCheckout = styled.div`
  margin-top: 50px;
  #form {
    width: 500px;
    height: 700px;
    background: white;
    border: 1px solid;
    box-shadow: 3px 3px 3px gray;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    text-align: center;
  }
  #textbox {
    margin-top: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  input {
    height: 25px;
    width: 250px;
    margin: 20px auto;
  }
  h2 {
    margin-top: 25px;
  }
  fieldset {
    border: none;
  }
  button {
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 15px;
    color: white;
    background: linear-gradient(white, black);
  }
  #btn {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
`;
function CreditCardCheckout() {
  return (
    <WrapCheckout>
      <form id="form">
        <h2>Credit Card Checkout</h2>
        <div id="textbox">
          <fieldset>
            <label>card number:</label>
            <input name="name" placeholder="enter your number" />
          </fieldset>
          <fieldset>
            <label>Expiration:</label>
            <input type="month" />
          <fieldset>
            <label>Security Code:</label>
            <input type="password" />
          </fieldset>
          </fieldset>
        </div>
        <div id="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </WrapCheckout>
  );
};

export default CreditCardCheckout;