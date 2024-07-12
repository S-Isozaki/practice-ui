import * as css from "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./1/Signup";
import CreditCardCheckout from "./2/CreditCardCheckout";
import Landing from "./3/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/credit`} element={<CreditCardCheckout />} />
          <Route path={`/landing`} element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;