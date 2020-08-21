import React from "react";
import styled from "styled-components";

interface props {
  // color: string;
  // bgColor: string;
  name: string;
  className: string;
}

const Button: React.FC<props> = ({ name ,className}) => {
  const ButtonCont = styled.button`
    background: #1e40c8 0% 0% no-repeat padding-box;
    box-shadow: 0px 16px 48px #050e353d;
    border-radius: 28px;
    opacity: 1;
    border:none;
    padding:1.5rem 10rem;
    min-width:5rem;
    font-size:16px;
    color:white;
  `;
  return <ButtonCont className={className}>{name}</ButtonCont>;
};

export default Button;
