import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapNotFound = styled.div`
  height: 100vh;
  background: white;
  font-family: sans-serif;
  display: flex;
  flex-flow: column;
  text-align: center;
  h1 {
    font-size: 60px;
  }
`;

const NotFound = () => {
  useEffect (() => {
    document.title = "Not Found";
  }, [])
  return (
    <WrapNotFound>
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>Sorry for inconvenient. If you want to return home, from <Link to={`/`}>here</Link>.</p>
    </WrapNotFound>
  )
}

export default NotFound;