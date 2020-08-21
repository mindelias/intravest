import React from "react";
import styled from "styled-components";
import P from "../atomicComponents/Paragraphs";

interface props {
  color?: any;
  bgColor?: string;
  className?: string;
  boxShadow?: string;
}

export const Card2: React.FC<props> = ({
  color,
  bgColor,
  className,
  boxShadow,
}) => {
  const CardCont = styled.div`
    /* color: var(--${color}); */
    background: ${bgColor ? bgColor : ""};
    max-width: 58.9rem;
    max-height: 42.8rem;
    border-radius:10px;
    text-align:left;
    opacity: 1;
    box-shadow: ${boxShadow ? "32px 32px 48px #050e3514" : ""};
    padding: 10rem;
    @media (max-width: 1200px) {
     padding: 4rem;
     max-width:40rem;
      
    
  }

    @media (max-width: 700px) {
       padding: 5rem;
       min-width:25rem;
      
    }
     @media (max-width: 486px) {
     padding: 2rem;
     min-width:25rem;
    
  }

  `;
  return (
    <CardCont className={className}>
      <div className="">
        <P
          color="veryDark"
          name="Lorem ipsum now"
          size={36}
          weight="bolder"
          className="mb-6"
        ></P>
        <P
          color="veryDark"
          name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
          size={18}
          weight="normal"
          className="mt-5 mb-7"
        ></P>
        <P
          color="midBlue1"
          name="Lorem ipsum  now"
          size={14}
          weight="normal"
          className="my-3"
        ></P>
      </div>
    </CardCont>
  );
};
