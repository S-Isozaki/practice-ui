import styled from "styled-components";
import avatar1 from "../13/user1.svg";
import avatar2 from "../13/user2.svg";

const WrapDirectMessage = styled.div`
  width: 90%;
  height: 90vh;
  background-color: #666666;
  margin: 5vh auto;
  display: flex;
  flex-flow: row;
  #timelines {
    width: 500px;
    overflow-y: auto;
  }
  .tl {
    height: 150px;
    border-bottom: 1px solid gray;
  }
  #conversation {
    overflow: scroll;
  }
  .avatar {
    border-radius: 50%;
  }
  #avatar2 {
    position: relative;
    left: -20px;
  }
`;

const DirectMessage = () => {
  return (
    <WrapDirectMessage>
      <div id="timelines">
        <div className="tl">
          <p className="date">2024/07/22</p>
          <h2>new comer</h2>
          <p>18 conversations</p>
          <p>participate 6 members</p>
        </div>
        <div className="tl">
          <p className="date">2024/07/22</p>
          <h2>meeting</h2>
          <p>participate 4 members</p>
        </div>
        <div className="tl">
          <p className="date">2024/07/22</p>
          <h2>meeting</h2>
          <p>participate 4 members</p>
        </div>
        <div className="tl">
          <p className="date">2024/07/22</p>
          <h2>meeting</h2>
          <p>participate 4 members</p>
        </div>
        <div className="tl">
          <p className="date">2024/07/22</p>
          <h2>meeting</h2>
          <p>participate 4 members</p>
        </div>
        <div className="tl">
          <p className="date">2024/07/22</p>
          <h2>meeting</h2>
          <p>participate 4 members</p>
        </div>
      </div>
      <div id="conversaton">
        <img src={avatar1} alt="" className="avatar" id="avatar1"></img>
        <img src={avatar2} alt="" className="avatar" id="avatar2"></img>
        <h2>New comer</h2>
      </div>
    </WrapDirectMessage>
  )
}

export default DirectMessage;