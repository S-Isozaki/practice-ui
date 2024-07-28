import styled from "styled-components";
import { useEffect } from "react";
import flag1 from "../5/demo2.svg"
import flag2 from "../5/demo3.svg"
import flag3 from "../5/demo4.svg"

const WrapLeaderboard = styled.div`
  width: 90%;
  height: 90vh;
  margin: 5vh auto;
  background-color: white;
  text-align: center;

  #leaderboard {
    margin: 0 auto;
  }
  .flag {
    height: 1em;
    vertical-align: middle;
  }
`;

const Leaderboard = () => {
  useEffect(() => {
    document.title = 'Leaderboard';
  }, []);
  return (
    <WrapLeaderboard>
      <h1>leaderboard</h1>
      <table id="leaderboard">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">country</th>
            <th scope="col">name</th>
            <th scope="col">elapsed time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td><img src={flag1} alt="jpn" className="flag"></img></td>
            <td>Adam</td>
            <td>1:18.40</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td><img src={flag2} alt="swe" className="flag"></img></td>
            <td>Ben</td>
            <td>1:20.97</td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td><img src={flag3} alt="plw" className="flag"></img></td>
            <td>Cammy</td>
            <td>1:24.51</td>
          </tr>
        </tbody>
      </table>
    </WrapLeaderboard>
  );
};

export default Leaderboard;