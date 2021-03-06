import React from "react";
import ladycoin from "./assets/ladycoin.jpeg";
import styled from "styled-components";
// import { ButtonCont1, ButtonCont2 } from "./assets/Button";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div></div>
    // <BgCover className="container-fluid text-center">
    //   <Navbar />
    //   <div className="">
    //     <div className="banner-info">
    //       <div className="banner-w3ls-inner">
    //         <h4>Invest in your Future</h4>
    //         <h3>
    //           BANK WITH <br></br> US
    //         </h3>
    //         <p className="text-white">
    //           Integer sit amet mattis quam, sit amet ultricies velit. Praesent
    //           ullamcorper dui turpis.
    //         </p>

    //         <div className="test-info text-left mt-lg-5 mt-4">
    //           <a href="/register" className="btn">
    //             <ButtonCont2>Get Started</ButtonCont2>
    //           </a>
    //           <a href="/login" className="btn">
    //             <ButtonCont1>Sign in</ButtonCont1>
    //           </a>
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>
    // </BgCover>
  );
}

export default Homepage;
const BgCover = styled.div`
  padding: 2.5rem 3rem;
  background: linear-gradient(
      106deg,
      rgb(0, 0, 200, 0.7),
      rgb(0, 10, 200, 0.7),
      rgb(44, 20, 250, 0.7)
    ),
    url(${ladycoin});
  background-size: 100%;

  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;

  .banner-info {
    padding-top: 6em;
    padding-left: 1.2em;
  }
  .img1 {
    position: absolute;
    right: 3%;
  }
  .img2 {
    position: absolute;
    top: 70%;
    right: 20%;
  }
  .banner-w3ls-inner {
    text-align: left;
    padding: 2em;
    width: 60%;
  }

  .banner-info h3 {
    text-shadow: 3px 1px 3px rgba(45, 45, 45, 0.38);
    font-size: 5em;
    color: #fff;
    font-weight: 600;
    line-height: 1em;
    font-family: "Julius Sans One" !important;
  }

  .banner-info h4 {
    color: #ffbf00;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    margin-bottom: 1em;
    font-family: "Arvo";
  }

  .banner-top,
  .banner-top1,
  .banner-top2,
  .banner-top3 {
    min-height: 50em;
  }
  @media (max-width: 486px) {
     
    .banner-info{
      margin-top: 7rem
    }
  }
`;
