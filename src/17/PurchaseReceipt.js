import styled from "styled-components";
import { useEffect } from "react";

const WrapPurchaseReceipt = styled.div`
  width: 90%;
  height: 90vh;
  margin: 5vh auto;
  background-color: white;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 300;
  text-align: center;
  /* padding: 20px; */
  
  #header {
    padding-top: 20px;
  }
  #receipt {
    margin: 20px auto;
    font-size: larger;
    border: 2px solid black;
    th, td {
      padding: 5px 15px;
    }
  }
  #total {
    text-align: right;
  }
`;

const PurchaseReceipt = () => {
  useEffect(() => {
    document.title = 'Purchase Receipt';
  }, []);
  return (
    <WrapPurchaseReceipt>
      <div id="header">
        <h1>Your Credit Card Statement</h1>
      </div>
      <table id="receipt">
        <thead>
          <tr>
            <th scope="col">date</th>
            <th scope="col">shop</th>
            <th scope="col">service</th>
            <th scope="col">spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">22/2/2022</td>
            <td>cream shop</td>
            <td>ice cream</td>
            <td>$2.00</td>
          </tr>
          <tr>
            <td scope="row">23/22/2022</td>
            <td>tailor</td>
            <td>necktie</td>
            <td>$30.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td scope="row" colSpan="3" id="total">total</td>
            <td>$32.00</td>
          </tr>
        </tfoot>
      </table>
    </WrapPurchaseReceipt>
  );
};

export default PurchaseReceipt;