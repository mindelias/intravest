import React  from "react";
import styled from "styled-components";
import P from "../atomicComponents/Paragraphs";

interface props {
  color?: any;
  bgColor?: string;
  img: string;
  alt: string;
  className?: string;
  boxShadow?: string;
}

export const Card: React.FC<props> = ({
  color,
  bgColor,
  className,
  boxShadow,
  img,
  alt,
}) => {
  const CardCont = styled.div`
    /* color: var(--${color}); */
    background: ${bgColor ? bgColor : ""};
    border-radius:10px;
    text-align:center;
    opacity: 1;
    box-shadow: ${boxShadow?'32px 32px 48px #050e3514': ''};
    padding: 3rem 5rem;
    width:345px;
    height:331px;
     
  `;
  return (
    <CardCont className="card-cont">
      <div className="mb-6 mt-5">
        <img className="mb-6" src={img} alt={alt} />
        <P
          color="veryDark"
          name="Lorem ipsum"
          size={22}
          weight="bolder"
          className="mb-6"
        ></P>
        <P
          color="veryDark"
          name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
          size={18}
          weight="normal"
          className="my-3"
        ></P>
      </div>
    </CardCont>
  );
};
