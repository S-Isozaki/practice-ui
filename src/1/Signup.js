// import * as css from "./style.css";

function Signup() {
  return (
    <>
      <form id="form">
        <input name="name" placeholder="enter your name" />
        <input name="email" placeholder="enter your e-mail address" />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Signup;