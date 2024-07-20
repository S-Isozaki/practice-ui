import styled from 'styled-components';
import { useEffect } from 'react';

const WrapFlashMessage = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(40deg, white, rgb(255,176,192));
  text-align: center;
  padding: 50px;
  // font-family: sans-serif;
  .message {
    height: 30px;
    width: 90%;
    border-radius: 5px;
    text-align: left;
    margin: 5px;
    position: relative;
  }
  .succeeded {
    border: 1px rgb(255,0,255) solid;
    background-color: #FFBBBB;
  }
  .failure {
    border: 1px rgb(0,0,255) solid;
    background-color: #BBBBFF;
  }
  p {
      position: absolute;
      bottom: 4px;
      left: 5px;
  }
`;

const FlashMessage = () => {
  useEffect(() => {
    document.title = 'Request Accepted';
  }, []);
  return (
    <WrapFlashMessage>
      <div className='message succeeded'>
        <p>Your Request Has Accepted</p>
      </div>
      <div className='message failure'>
        <p>Your Request Has Failed</p>
      </div>
    </WrapFlashMessage>
  );
};

export default FlashMessage;
