// import * as css from "./setting.css";
import styled from "styled-components";

const Form = styled.form`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(0,255,255);
  opacity: 0.5;
  display: flex;
  flex-flow: column;
  #btn {
    display: flex;
    justify-content: right;
  }
  button {
    width: 40px;
  }
`

const Settings = () => {
  return (
    <Form>
      <h1>settings</h1>
      <fieldset id="colortheme">
        <legend>color theme</legend>
        <input type="radio" id="normal" value="normal" />
        <label>normal</label><br />
        <input type="radio" id="dark" value="dark" />
        <label>dark</label><br />
      </fieldset>
      <div id="btn">
        <button type="submit">apply</button>
      </div>
    </Form>
  )
}

export default Settings;