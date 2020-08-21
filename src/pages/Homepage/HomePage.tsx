import React from "react";
import { HomePageWrapper } from "./Home.style";
import P from "../../components/atomicComponents/Paragraphs";
import Button from "../../components/atomicComponents/Button";
import img2 from "../../components/assets/Capture2.png";
import img3 from "../../components/assets/Capture3.png";
import img4 from "../../components/assets/Capture4.png";
import img5 from "../../components/assets/Video.png";
import img6 from "../../components/assets/Capture6.png";
import img7 from "../../components/assets/tick.svg";
import { Card } from "../../components/cards/card";
import { Card2 } from "../../components/cards/card2";
import Carousel from "../../components/Carousel/Carousel";
import NavBar from "../../components/Navbar";

function HomePage() {
  return (
    <HomePageWrapper>
      <div className="section1">
        <div className="section1-inner text-center">
          <NavBar></NavBar>

          <div className="img-container">
            <Carousel />
          </div>
          <P
            color="darkGray"
            name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
            size={24}
            weight="bold"
            className="margin-negative"
          ></P>
          <P
            color="veryDark"
            name="Lorem ipsum dolor sit amet, consetetur"
            size={48}
            weight="bolder"
            className="mt-2"
          ></P>
          <P
            color="veryDark"
            name="Lorem ipsum now"
            size={48}
            weight="normal"
            className="mb-3"
            opacity={0.8}
          ></P>
          <P
            color="darkGray2"
            name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
            size={18}
            weight="normal"
            className="mt-5"
            lineHeight={0.01}
          ></P>
          <P
            color="darkGray2"
            name="tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            size={18}
            weight="normal"
            className="mb-3"
          ></P>
          <Button className="my-5" name="Lorem ipsum now"></Button>
        </div>
      </div>
      <div className="section2">
        <div className="section2-inner text-center">
          <P
            color="veryDark"
            name="Lorem ipsum"
            size={40}
            weight="bolder"
            className="mb-7"
          ></P>
          <div className="row mt-5">
            <div className="col-md-4">
              <Card
                bgColor="white"
                boxShadow="box"
                img={img2}
                alt="alt1"
              ></Card>
            </div>
            <div className="col-md-4">
              <Card img={img3} alt="alt21"></Card>
            </div>
            <div className="col-md-4">
              <Card img={img4} alt="alt3"></Card>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="text-center">
          <P
            color="veryDark"
            name="Problem"
            size={48}
            weight="bolder"
            className="mb-6"
          ></P>
          <P
            color="veryDark"
            name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
            size={18}
            weight="normal"
            className="mb-7"
            opacity={0.95}
          ></P>
          <P
            color="veryDark"
            name="Solution"
            size={48}
            weight="bolder"
            className="mb-6"
          ></P>
          <P
            color="veryDark"
            name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
            size={18}
            weight="normal"
            className="mb-7"
            opacity={0.95}
          ></P>
          <Button className="my-5" name="Lorem ipsum now"></Button>
        </div>
      </div>
      <div className="section4">
        <div className="section4-inner">
          <div className="text-center mb-7">
            <P
              color="veryDark"
              name="frequently asked questions"
              size={30}
              weight="bold"
              className=""
            ></P>
          </div>
          <div className="text-left">
            <P
              color="veryDark"
              name="Lorem ipsum now?"
              size={22}
              weight="normal"
              className="mb-3"
              opacity={0.95}
            ></P>

            <P
              color="darkGray"
              name="Lorem ipsum now? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et!"
              size={20}
              weight="normal"
              className="mb-6"
            ></P>
            <P
              color="veryDark"
              name="Lorem ipsum now?"
              size={22}
              weight="normal"
              className="mb-3"
              opacity={0.95}
            ></P>

            <P
              color="darkGray"
              name="Lorem ipsum now? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et!"
              size={20}
              weight="normal"
              className="mb-6"
            ></P>
            <P
              color="veryDark"
              name="Lorem ipsum now?"
              size={22}
              weight="normal"
              className="mb-3"
              opacity={0.95}
            ></P>

            <P
              color="darkGray"
              name="Lorem ipsum now? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et!"
              size={20}
              weight="normal"
              className="mb-6"
            ></P>
            <P
              color="veryDark"
              name="Lorem ipsum now?"
              size={22}
              weight="normal"
              className="mb-3"
              opacity={0.95}
            ></P>

            <P
              color="darkGray"
              name="Lorem ipsum now? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et!"
              size={20}
              weight="normal"
              className="mb-6"
            ></P>
            <P
              color="veryDark"
              name="Lorem ipsum now?"
              size={22}
              weight="normal"
              className="mb-3"
              opacity={0.95}
            ></P>

            <P
              color="darkGray"
              name="Lorem ipsum now? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et!"
              size={20}
              weight="normal"
              className="mb-6"
            ></P>
          </div>
        </div>
      </div>
      <section className="overall-section">
        <div className="section5">
          <div className="section5-inner">
            <div className="text-center">
              <P
                color="darkGray"
                name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                size={14}
                weight="normal"
                className="mb-6"
              ></P>
              <P
                color="mainWhite"
                name="Lorem ipsum dolor sit amet"
                size={36}
                weight="bolder"
                className="mb-6"
              ></P>
            </div>
            <div>
              <div className="ring d-flex justify-content-center mb-5">
                {" "}
                <span>1</span>
              </div>
              <P
                color="mainWhite"
                name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et !"
                size={16}
                weight="normal"
                className="mb-5"
              ></P>
              <div className="big-rectangle mb-6">
                <div className="row align-items-center">
                  <img className="col-sm-2" src={img5} alt="img6" />
                  <div className="col-sm-6"></div>
                  <button className="col-sm-2 btn btn-blue">Add to cart</button>
                </div>
              </div>
              <div>
                <div className="ring d-flex justify-content-center mb-5">
                  {" "}
                  <span>2</span>
                </div>
                <P
                  color="mainWhite"
                  name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et !"
                  size={16}
                  weight="normal"
                  className="mb-5"
                ></P>
                <div className="mb-7">
                  <img src={img6} alt="image6" />
                </div>
              </div>
              <P
                color="mainWhite"
                name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et !"
                size={16}
                weight="normal"
                className="mb-5"
              ></P>
              <div className="ring d-flex justify-content-center mb-5">
                {" "}
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="section5-last">
            <div className="row align-items-center no-gutters">
              <img className="col-sm-4" src={img5} alt="img6" />
              <img className="col-sm-2" src={img7} alt="img7" />
            </div>
          </div>
        </div>
        <div className="section6">
          <div className="row justify-content-center align-item-center no-gutters">
            <div className="col-md-6">
              {" "}
              <Card2 bgColor="white"></Card2>
            </div>
            <div className="col-md-6">
              {" "}
              <Card2 bgColor="#C5FFF0"></Card2>
            </div>
          </div>
        </div>
        <div className="last-section text-center">
          <P
            color="veryDark"
            name="Lorem ipsum  now?"
            size={16}
            weight="normal"
            className="mb-4"
          ></P>
          <Button className="mb-5" name="Lorem ipsum now"></Button>
        </div>
      </section>
    </HomePageWrapper>
  );
}

export default HomePage;
