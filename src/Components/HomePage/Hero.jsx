import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MySpinner from "../MySpinner";

const Hero = () => {
  const [spinner, setSpinner] = useState(false);
  const TimeOut = () => {
    spinner === false
      ? setTimeout(() => {
          setSpinner(true);
        }, 2400)
      : null;
  };
  TimeOut();
  return (
    <>
      {spinner === true ? (
        <Container id="hero" className="scale-in-ver-top">
          <Row className="w-75 mx-auto">
            <Col className="col-9">
              I am a passionate 32-year-old front-end web developer, dedicated
              to crafting visually appealing and user-friendly digital
              experiences. Feel free to browse through my portfolio to witness
              the seamless fusion of design and code. Welcome aboard!
            </Col>
            <Col className="col-3">IMAGINEDIBGMIA SFOCATA IN BACKGROUNUD</Col>
          </Row>
        </Container>
      ) : (
        <div id="hero" className="w-100 d-flex justify-content-center">
          <MySpinner />
        </div>
      )}
    </>
  );
};
export default Hero;
