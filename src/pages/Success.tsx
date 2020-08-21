import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ShowAccoutSuccessful() {
  return (
    <div>
      <WhiteBox className="container text-center">
        <div>
          <h2>You registered successfully</h2>
          <br />
          <span>
            <Link to="/login">Login</Link>
          </span>
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>
      </WhiteBox>
    </div>
  );
}

export default ShowAccoutSuccessful;

const WhiteBox = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    color: green;
    /* display: block; */
  }
  span {
    color: blue;
    display: block;
    font-size:1.5rem;
    font-weight:700;
    text-decoration:underline;
  }
`;
