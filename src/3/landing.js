// import * as css from "./landing.css";
import styled from "styled-components"

const WrapLanding = styled.div`
  img {
    width: 300px;
  }

  #landing {
    display: flex;
    flex-flow: row;
  }

  h1 {
    font-size: 24px;
  }
  #links {
    display: flex;
    flex-flow: column;
  }
`

export default function Landing () {
  return (
    <WrapLanding>
    <div id="landing">
      <div id="book">
        <h1>O157は終わってはいない</h1>
        <img src="./images/shoei.jpg" alt="book cover" title="O157は終わってはいない"></img>
      </div>
      <div id="links">
        <a href="#">recommendation</a>
        <a href="#">purchase</a>
      </div>
    </div>
    </WrapLanding>
  )
}