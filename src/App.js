import * as css from "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./1/Signup";
import CreditCardCheckout from "./2/CreditCardCheckout";
import Landing from "./3/landing";
import Calculation from "./4/calculation";
import Color from "./5/color";
import Profile from "./6/profile";
import Settings from "./7/setting";
import NotFound from "./8/404";
import MusicPlayer from "./9/MusicPlayer";
import SocialShare from "./10/SocialShare";
import FlashMessage from "./11/FlashMessage";
import ECommerce from "./12/ECommerce";
import DirectMessage from "./13/DirectMessage";
import CountdownTimer from "./14/CountdownTimer";
import PpUpOverlay from "./16/PopUpOverlay";
import PurchaseReceipt from "./17/PurchaseReceipt";
import Leaderboard from "./19/Leaderboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/credit`} element={<CreditCardCheckout />} />
          <Route path={`/landing`} element={<Landing />} />
          <Route path={`/calculation`} element={<Calculation />} />
          <Route path={`/color`} element={<Color />} />
          <Route path={`/profile`} element={<Profile />} />
          <Route path={`/settings`} element={<Settings />} />
          <Route path={`/notfound`} element={<NotFound />} />
          <Route path={`/musicplayer`} element={<MusicPlayer />} />
          <Route path={`/share`} element={<SocialShare />} />
          <Route path={`/accepted`} element={<FlashMessage />} />
          <Route path={`/ecommerce`} element={<ECommerce />} />
          <Route path={`/directmessage`} element={<DirectMessage />} />
          <Route path={`/countdowntimer`} element={<CountdownTimer />} />
          <Route path={`/popupoverlay`} element={<PpUpOverlay />} />
          <Route path={`/purchasereceipt`} element={<PurchaseReceipt />} />
          <Route path={`/leaderboard`} element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;