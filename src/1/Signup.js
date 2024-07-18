// import * as css from "./signup.css";
import { useEffect } from "react";
import styled from "styled-components";

const WrapSignup = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  margin-top: 50px;
  #form {
    width: 400px;
    height: 500px;
    background: white;
    border: 1px solid;
    box-shadow: 3px 3px 3px gray;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    text-align: center;
  }
  @media (max-width: 400px) {
    margin-top: 0;
    #form {
      width: 100vw;
      height: 100vh;
      border: none;
    }
  }
  #heading {
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
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 15px;
    color: white;
    background: linear-gradient(white, black);
  }
  #btn {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
`

function Signup() {
  useEffect(() => {
    document.title = "Sign Up"
  }, [])
  return (
    <WrapSignup>
      <form id="form">
        <div id="heading">
          <h2>Sign Up</h2>
        </div>
        <div id="textbox">
          <fieldset>
            <label>name:</label>
            <input name="name" placeholder="enter your name" />
          </fieldset>
          <fieldset>
            <label>email:</label>
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