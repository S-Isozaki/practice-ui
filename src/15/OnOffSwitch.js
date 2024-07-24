import styled from "styled-components";
import { useEffect } from "react";

const WrapOnOffSwitch = styled.div`
  input {
    
  }
`;

const OnOffSwitch = () => {
  useEffect(() => {
    document.title = 'On/Off Switch';
  }, []);
  return (
    <WrapOnOffSwitch>
      <div id="switch">
        <input type="checkbox"/>
        <label />
      </div>
    </WrapOnOffSwitch>
  );
}

export default OnOffSwitch;