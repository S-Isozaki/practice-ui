import * as css from "./style.css"
import { Link } from "react-router-dom";

function Home() {
  return(
    <div id="linktosnippet">
      <Link to={`/profile`}>Day6 User Profile</Link>
      <Link to={`/color`}>Day5</Link>
      <Link to={`/calculation`}>Day4 Calculation</Link>
      <Link to={`/landing`}>Day3 Landing Page</Link>
      <Link to={`/credit`}>Day2 Credit card Checkout</Link>
      <Link to={`/signup`}>Day1 Sign up</Link>
    </div>
  )
}

export default Home;