import styled from "styled-components";
import { useEffect } from "react";

const WrapPopUpOverlay = styled.div`
  #masking {
    width: 100%;
    height: 100vh;
    background-color: gray;
    opacity: 0.5;
    position: fixed;
  }
  #modal {
    width: 40vw;
    height: 60vh;
    position: relative;
    margin: 20vh auto;
    background-color: rgba(255,255,255,1.0);
  }
  #ad {
    display: flex;
    flex-flow: column;
    h1 {
      text-align: center;
    }
    #content {
      flex-flow: row;
      form {
        width: 45%;
      }
      #introduction {
        width: 45%;
      }
    }
  }
`;

const PpUpOverlay = () => {
  useEffect(() => {
    document.title = 'Pop-up Overlay';
  }, []);
  return(
    <WrapPopUpOverlay>
      <div id="masking">
        <div id="modal">
          <div id="ad">
            <h1>For Our Important Customer</h1>
            <div id="content">
              <form>
                <div id="email">
                  <label>e-mail:</label>
                  <textarea placeholder="send your e-mail address."></textarea>
                </div>
                <button type="submit">send</button>
              </form>
              <div id="introduction">
                <p>We prepare an opportunity for you to get the information about our new product.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapPopUpOverlay>
  )
}

export default PpUpOverlay;