import React from "react";
import styled from "styled-components";

interface props {
  color: any;
  name: string;
  size: number;
  weight: string;
  className: string;
  lineHeight?: number;
  opacity?: number;
  
}

const P: React.FC<props> = ({ color, name, size, weight,className, lineHeight,opacity }) => {
  const ButtonCont = styled.p`
    /* text-transform: capitalize; */
    font-size: ${size}px;
    color: var(--${color});
    line-height:${lineHeight? lineHeight: 1.1};
    /* font-family: Helvetica Neue; */
    font-weight: ${weight};
    font-family:Arial, Helvetica, sans-serif;
    opacity:  ${opacity? opacity:1.1};
  `;
  return <ButtonCont className = {className}>{name}</ButtonCont>;
};

export default P;
