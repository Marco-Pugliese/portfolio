import { Carousel, Col, Container, Row } from "react-bootstrap";

const Aside = () => {
  return (
    <div id="aside" className="d-flex align-items-center pb-3">
      <Container>
        <Row className="d-block d-xl-none text-end">
          <Carousel fade>
            <Carousel.Item>
              <div className="position-relative mx-auto w-75 eff-box p-5 m-2 rounded-3">
                <span className="position-absolute start-0 ms-5 ps-5">1</span>
                <div>what i do</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  voluptas obcaecati, voluptatibus modi recusandae cum animi at
                  ex porro doloremque atque quaerat repellendus rerum nulla
                  nemo, esse eaque cumque quis.
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="position-relative mx-auto w-75 eff-box p-5 m-2 rounded-3">
                <span className="position-absolute start-0 ms-5 ps-5">2</span>
                <div>why i do it</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat repellendus totam quibusdam recusandae, ratione esse
                  pariatur ab autem iure nisi, harum est, aliquam omnis facere
                  exercitationem numquam odio debitis libero.
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="position-relative mx-auto w-75 eff-box p-5 m-2 rounded-3">
                <span className="position-absolute start-0 ms-5 ps-5">3</span>
                <div>How i do it</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum necessitatibus voluptatem saepe enim. Delectus eos harum
                  soluta ipsam, recusandae suscipit incidunt voluptates vero
                  nobis beatae. Corrupti esse quos unde ullam!
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="d-none d-xl-flex text-end">
          <Col className="position-relative eff-box p-5 m-2 rounded-3">
            <span className="position-absolute start-0 ms-5 ps-5">1</span>
            <div>what i do</div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              voluptas obcaecati, voluptatibus modi recusandae cum animi at ex
              porro doloremque atque quaerat repellendus rerum nulla nemo, esse
              eaque cumque quis.
            </div>
          </Col>
          <Col className="position-relative eff-box p-5 m-2 rounded-3">
            <span className="position-absolute start-0 ms-5 ps-5">2</span>
            <div>why i do it</div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              repellendus totam quibusdam recusandae, ratione esse pariatur ab
              autem iure nisi, harum est, aliquam omnis facere exercitationem
              numquam odio debitis libero.
            </div>
          </Col>
          <Col className="position-relative eff-box p-5 m-2 rounded-3">
            <span className="position-absolute start-0 ms-5 ps-5">3</span>
            <div>How i do it</div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              necessitatibus voluptatem saepe enim. Delectus eos harum soluta
              ipsam, recusandae suscipit incidunt voluptates vero nobis beatae.
              Corrupti esse quos unde ullam!
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Aside;
