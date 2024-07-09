import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import DownloadBtn from "./DownloadBtn";

const NavBar = () => {
  const [selected, setSelected] = useState("home");
  const [cvhover, setcvHover] = useState(false);
  const pdfPath = "/CV - Marco Pugliese.pdf";

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
              <span
                className={
                  selected === "studies"
                    ? "blueNav"
                    : cvhover === true
                    ? "blueNav"
                    : null
                }
              >
                Studies && Work
              </span>
            </Link>
          </Col>
          <Col
            className="col-3 navRowCol"
            onMouseEnter={() => setcvHover(true)}
            onMouseLeave={() => setcvHover(false)}
          >
            <Link
              to="/CV"
              className="nav-link m-0"
              onClick={() => setSelected("cv")}
            >
              <span className={selected === "cv" ? "blueNav" : ""}>C.V.</span>
            </Link>
          </Col>
          <Container fluid className="containerDownload px-0">
            {/* <DownloadBtn /> */}
            <div
              className={cvhover === true ? "fadeIn py-2 nav2" : "fadeOut nav2"}
            >
              <div>
                <a
                  onMouseEnter={() => setcvHover(true)}
                  onMouseLeave={() => setcvHover(false)}
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="noDecoration"
                >
                  download
                </a>
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    </>
  );
};
export default NavBar;
