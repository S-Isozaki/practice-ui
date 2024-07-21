import styled from "styled-components";
import { useEffect } from "react";

const WrapECommerce = styled.div`
  font-family: 'Quicksand';
  width: 100%;
  height: 100vh;
  background: linear-gradient(40deg, white, #FFFFDD);
  padding: 30px;
  display: flex;
  justify-content: center;
  #purchase_page {
    width: 85%;
    height: 85vh;
    background-color: white;
  }
  .information .goods {
    width: 180px;
    height: 200px;
    flex-flow: column;
  }
  #goods_image {
    width: 250px;
  }
  #recommend {
    font-family: 'NotoSerifJP';
  }
`;

const ECommerce = () => {
  useEffect(() => {
    document.title = 'E-Commerce';
  }, []);
  return (
    <WrapECommerce>
      <div id="purchase_page">
        <div className="information goods">
          <img src="./images/jon-tyson-LPVfbpCi--8-unsplash.jpg" alt="shoes" id="goods_image"/>
          <h1>Shoe</h1>
          <h2>¥3000</h2>
        </div>
        <div className="information features">
          <p id="recommend">通気性がよく機能性抜群の一品。お子様からのお喜びの声も聞こえる当ショップ自信の一品です。</p>
        </div>
        <button type="submit" className="purchase" id="cart">Add to Cart</button>
        <button type="submit" className="purchase" id="checkout">Proceed to Checkout</button>
      </div>
    </WrapECommerce>
  )
}

export default ECommerce;