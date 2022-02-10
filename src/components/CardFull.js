import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

export const CardS = styled(Card)`
  width: 18rem;
  margin: 0.8rem;
`;

const LinkS = styled.a`
  color: #9008a99;

  &:hover {
    color: #000;
    cursor: poiter;
  }
`;

export const CardFull = () => {
  return (
    <CardS>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body></Card.Body>
    </CardS>
  );
};
