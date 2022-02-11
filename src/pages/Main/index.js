import { Slider } from "../../components/Slider/index";
import { Search } from "../../components/Search";
import { info } from "../../constants/slider";
import { Card, Row, Col } from "react-bootstrap";
import { cardImages } from "../../constants/cards";

export const Main = () => {
  return (
    <>
      <Slider data={info} />
      <Search />
      <Row>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col lg={4} md={6} xs={12} key={Math.random()}>
            <a href="!#">
              <Card>
                <Card.Img variant="top" src={cardImages[1].imageUrl} />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};
