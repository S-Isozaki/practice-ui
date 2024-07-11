import * as css from "./credit.css";

function CreditCardCheckout() {
  return (
    <>
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
    </>
  );
};

export default CreditCardCheckout;