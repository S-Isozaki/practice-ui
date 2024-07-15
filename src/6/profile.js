import * as css from "./profile.css";
import img from "../5/icon.svg";

const Profile = () => {
  return (
    <div id="profile">
      <h1>Profile</h1>
      <div id="information">
        <div id="user">
          <img src={img} alt=""></img>
          <p id="name">pqrst1987</p>
        </div>
        <div id="background">
          <div id="academic">
            <h2>academic background</h2>
            <ul>
              <li>Destrade High School</li>
              <li>International Shinshu Gakuin University</li>
            </ul>
          </div>
          <div id="career">
            <h2>career background</h2>
            <ul>
              <li>Home Guard Man</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;