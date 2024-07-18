import styled from "styled-components";
import { useEffect } from "react";
import img from "../5/StarsandStripes.svg"

const WrapMusicPlayer = styled.div`
  width: 700px;
  height: 500px;
  background: rgb(223,223,223);
  box-shadow: 2px 2px 2px gray;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-flow: row;
  // @media (max-width: 1440px) {
  // }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;
const MusicPlayer = () => {
  useEffect(() => {
    document.title = "Music Player";
  }, [])
  return (
    <WrapMusicPlayer>
      <div id="disk_information">
        <img src={img} alt="" />
        <h2>Title</h2>
      </div>
      <div id="tune_information">

      </div>
    </WrapMusicPlayer>
  )
}

export default MusicPlayer;