import styled from "styled-components";
import img from "../5/icon.svg";
import { useEffect } from "react";

const ProfileContainer = styled.div`
  padding: 20px;
  #profile {
    width: 700px;
    height: 600px;
    background-color: white;
    opacity: 0.5;
    border-radius: 10px;
    box-shadow: 5px 5px 5px gray;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    top: 20px;
  }
    
  #user {
    text-align: center;
  }

  #information {
    display: flex;
    flex-flow: row;
    justify-content: center;
  }
  #background {
    display: flex;
    flex-flow: column;
    > * {
      margin: 10px;
    }
  }
  ul {
    list-style-position: inside;
  }
  @media (max-width: 700px) {
    #profile {
      margin-top: 0;
      border: none;
      width: 100%;
      box-shadow: none;
      background: none;
    }
    #information {
      flex-flow: column;
    }
    h2 {
      font-size: 22px;
    }
  }
`;

const Profile = () => {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <ProfileContainer>
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
    </ProfileContainer>
  )
}

export default Profile;