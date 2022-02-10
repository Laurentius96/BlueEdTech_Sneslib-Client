import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavbarS = styled(Navbar)`
  background-color: #211a21;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    padding: 0.4rem;
  }
`;

export const FooterFull = () => {
  return (
    <NavbarS>
      <p>2022 SnesLib</p>
    </NavbarS>
  );
};
