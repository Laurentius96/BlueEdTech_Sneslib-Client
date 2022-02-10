import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

export const CardS = styled(Card)`
  width: 18rem;
  margin: 0.8rem;
`;

const CardBodyS = styled(Card.Body)`
  padding: 0.8rem;
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
      <Card.Img
        variant="top"
        src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DiscoElysiumTheFinalCut_image1600w.jpg"
      />
      <CardBodyS>
        <LinkS>Saiba Mais...</LinkS>
      </CardBodyS>
    </CardS>
  );
};
