import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MySpinner from "../MySpinner";
import { Link } from "react-router-dom";

const InfoPage = () => {
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
          <Row className="w-75 mx-auto align-items-center">
            <Col className="display-5">LET{"'S "}GET IN TOUCH !</Col>
            <Col>
              <Row>
                <Col className="col-12 hoversecondary">
                  <i className="bi bi-envelope-at-fill"></i>
                  <span className="mx-2">pugliesemarco@myyahoo.com</span>
                </Col>
                <Col className="col-12 hoversecondary">
                  <i className="bi bi-linkedin"></i>
                  <span className="mx-2">
                    <Link
                      to="https://www.linkedin.com/in/marco-pugliese-dev/"
                      className="nav-link d-inline"
                    >
                      /marco-pugliese-dev
                    </Link>
                  </span>
                </Col>
                <Col className="col-12 hoversecondary">
                  <i className="bi bi-github"></i>
                  <span className="mx-2">
                    <Link
                      to="https://www.linkedin.com/in/marco-pugliese-dev/"
                      className="nav-link d-inline"
                    >
                      /Marco-Pugliese
                    </Link>
                  </span>
                </Col>
              </Row>
            </Col>
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
export default InfoPage;
