import { Carousel, Col, Container, Row } from "react-bootstrap";

const Studies = () => {
  return (
    <Container>
      <div className="myRow">
        <div className="p-5 fs-2 fw-bold text-center">mystudies</div>
        <Carousel>
          <Carousel.Item>
            <div>
              <Row>
                <Col className="col-12 col-xl-6">IMG1</Col>
                <Col className="text-end px-5">
                  Descrizione1: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dicta voluptatum, blanditiis quia odit
                  voluptatem maiores vero incidunt illum dolores vel ipsam
                  praesentium recusandae commodi eveniet natus illo laborum
                  necessitatibus eum?
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <Row>
                <Col className="col-12 col-xl-6">IMG2</Col>
                <Col className="text-end px-5">
                  Descrizione2: Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Provident quaerat illum reprehenderit
                  inventore ea ducimus sit repudiandae omnis, laboriosam quam
                  architecto quos quo suscipit eligendi, similique voluptatum
                  laborum mollitia accusamus!
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="myRow">
        <div className="p-5 fs-2 fw-bold text-center">myworks</div>
        <Carousel>
          <Carousel.Item>
            <div>
              <Row>
                <Col className="d-block d-xl-none col-12">IMG1</Col>
                <Col className="text-start px-5">
                  Descrizione1: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dicta voluptatum, blanditiis quia odit
                  voluptatem maiores vero incidunt illum dolores vel ipsam
                  praesentium recusandae commodi eveniet natus illo laborum
                  necessitatibus eum?
                </Col>
                <Col className="d-none d-xl-block">IMG1</Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <Row>
                <Col className="d-block d-xl-none col-12">IMG2</Col>
                <Col>
                  Descrizione2: Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Provident quaerat illum reprehenderit
                  inventore ea ducimus sit repudiandae omnis, laboriosam quam
                  architecto quos quo suscipit eligendi, similique voluptatum
                  laborum mollitia accusamus!
                </Col>
                <Col className="d-none d-xl-block">IMG2</Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};
export default Studies;
