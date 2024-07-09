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
                  creating digital experiences. <br /> i design and develop
                  innovative digital solutions that transform ideas into
                  reality, using user-friendly design and cutting-edge
                  technology.
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="position-relative mx-auto w-75 eff-box p-5 m-2 rounded-3">
                <span className="position-absolute start-0 ms-5 ps-5">2</span>
                <div>why i do it</div>
                <div className="mt-4">
                  passion. <br />i am driven by a passion for innovation and a
                  desire to enhance people{"'"}s lives through digital tools
                  that simplify and empower.
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="position-relative mx-auto w-75 eff-box p-5 m-2 rounded-3">
                <span className="position-absolute start-0 ms-5 ps-5">3</span>
                <div>How i do it</div>
                <div className="mt-4">
                  collaborative and results-focused approach. <br /> i work
                  closely with clients to understand their needs, utilizing
                  agile methodologies and advanced technologies to deliver
                  high-quality projects on time.
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
              creating digital experiences. <br /> i design and develop
              innovative digital solutions that transform ideas into reality,
              using user-friendly design and cutting-edge technology.
            </div>
          </Col>
          <Col className="position-relative eff-box p-5 m-2 rounded-3">
            <span className="position-absolute start-0 ms-5 ps-5">2</span>
            <div>why i do it</div>
            <div className="mt-4">
              passion. <br />i am driven by a passion for innovation and a
              desire to enhance people{"'"}s lives through digital tools that
              simplify and empower.
            </div>
          </Col>
          <Col className="position-relative eff-box p-5 m-2 rounded-3">
            <span className="position-absolute start-0 ms-5 ps-5">3</span>
            <div>How i do it</div>
            <div className="mt-4">
              collaborative and results-focused approach. <br /> i work closely
              with clients to understand their needs, utilizing agile
              methodologies and advanced technologies to deliver high-quality
              projects on time.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Aside;
