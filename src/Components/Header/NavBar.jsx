import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [selected, setSelected] = useState("home");

  return (
    <>
      <Container className="d-flex mynav ">
        <Row className="w-100 pt-4 text-center align-items-center">
          <Col className="col-3 navRowCol">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setSelected("home")}
            >
              <span className={selected === "home" ? "blueNav" : ""}>Home</span>
            </Link>
          </Col>
          <Col className="col-3 navRowCol">
            <Link
              to="/info"
              className="nav-link"
              onClick={() => setSelected("info")}
            >
              <span className={selected === "info" ? "blueNav" : ""}>
                Info && Contacts
              </span>
            </Link>
          </Col>
          <Col className="col-3 navRowCol">
            <Link
              to="/studies"
              className="nav-link"
              onClick={() => setSelected("studies")}
            >
              <span className={selected === "studies" ? "blueNav" : ""}>
                Studies && Work
              </span>
            </Link>
          </Col>
          <Col className="col-3 navRowCol">
            <Link
              to="/CV"
              className="nav-link"
              onClick={() => setSelected("cv")}
            >
              <span className={selected === "cv" ? "blueNav" : ""}>C.V.</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NavBar;
