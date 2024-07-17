// import * as css from "./signup.css";
import styled from "styled-components";

const WrapSignup = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

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
    top: 50px;
  }
  #heading {
    background: rgb(0,255,255);
    height: 75px;
  }
  h2 {
    margin-top: 20px;
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
  fieldset {
    border: none;
  }
  button {
    width: 50px;
    height: 30px;
  }
  #btn {
    display: flex;
    justify-content: right;
    margin-right: 20px;
  }
`

function Signup() {
  return (
    <WrapSignup>
      <form id="form">
        <div id="heading">
          <h2>Sign Up</h2>
        </div>
        <div id="textbox">
          <fieldset>
            <label>name</label>
            <input name="name" placeholder="enter your name" />
          </fieldset>
          <fieldset>
            <label>email</label>
            <input name="email" placeholder="enter your e-mail address" />
          </fieldset>
        </div>
        <div id="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </WrapSignup>
  );
};

export default Signup;