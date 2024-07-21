import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapHome = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'RobotoMono';
    src: url(./fonts/RobotoMono-VariableFont_wght.ttf);
  }

  html {
    height: 100%;
    font-family: 'RobotoMono';
  }

  body {
    height: 100%;
    background: linear-gradient(40deg, white, rgba(0, 255, 255, 0.75));
  }
  margin-top: 5px;
  a {
    width: max-content;
  }
  #linktosnippet {
    margin-top: 20px;
    display: flex;
    flex-flow: column;
  }
`;

function Home() {
  return(
    <WrapHome>
      <h1>Daily UI Training</h1>
      <div id="linktosnippet">
        <Link to={`/ecommerce`}>Day12 E-Commerce</Link>
        <Link to={`/accepted`}>Day11 Flash Message</Link>
        <Link to={`/share`}>Day10 Social Share</Link>
        <Link to={`/musicplayer`}>Day9 Music Player</Link>
        <Link to={`/notfound`}>Day8 404</Link>
        <Link to={`/settings`}>Day7 Settings</Link>
        <Link to={`/profile`}>Day6 User Profile</Link>
        <Link to={`/color`}>Day5</Link>
        <Link to={`/calculation`}>Day4 Calculation</Link>
        <Link to={`/landing`}>Day3 Landing Page</Link>
        <Link to={`/credit`}>Day2 Credit card Checkout</Link>
        <Link to={`/signup`}>Day1 Sign up</Link>
      </div>
    </WrapHome>
  )
}

export default Home;