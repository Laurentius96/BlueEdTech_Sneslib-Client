import { Container, Row } from "react-bootstrap";
import { NavbarFull } from "../../components/NavbarFull";
import { CarouselFull } from "../../components/CarouselFull";
import { CardFull } from "../../components/CardFull";
import { FooterFull } from "../../components/FooterFull";

export const Main = () => {
  return (
    <>
      <NavbarFull />
      <CarouselFull />
      <Container fluid>
        <Row className="justify-content-md-center">
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
          <CardFull />
        </Row>
      </Container>
      <FooterFull />
    </>
  );
};
