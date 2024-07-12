// import * as css from "./signup.css";

function Signup() {
  return (
    <>
      <form id="form">
        <div id="textbox">
          <input name="name" placeholder="enter your name" />
          <input name="email" placeholder="enter your e-mail address" />
        </div>
        <div id="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default Signup;