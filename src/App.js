import * as css from "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./1/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/signup`} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;