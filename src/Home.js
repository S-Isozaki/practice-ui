import * as css from "./style.css"
import { Link } from "react-router-dom";

function Home() {
  return(
    <>
      <Link to={`/signup`}>Day1 Sign up</Link>
      <Link to={`/credit`}>Day2 Credit card Checkout</Link>
    </>
  )
}

export default Home;