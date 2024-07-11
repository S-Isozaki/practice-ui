import * as css from "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./1/Signup";
import CreditCardCheckout from "./2/CreditCardCheckout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/credit`} element={<CreditCardCheckout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;