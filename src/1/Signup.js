// import * as css from "./signup.css";
import styled from "styled-components";

const WrapSignup = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  #form {
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    width: 500px;
    height: 700px;
    top: 50px;
    border: 2px solid;
    border-radius: 10px;
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
    margin-right: 20px;
  }
`

function Signup() {
  return (
    <WrapSignup>
      <form id="form">
        <div id="textbox">
          <input name="name" placeholder="enter your name" />
          <input name="email" placeholder="enter your e-mail address" />
        </div>
        <div id="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </WrapSignup>
  );
};

export default Signup;