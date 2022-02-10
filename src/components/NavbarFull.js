import styled from "styled-components";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

export const NavbarS = styled(Navbar)`
  background-color: #4f43ae;
  color: #fff;
`;

export const BrandS = styled(Navbar.Brand)`
  color: #fff !important;
  font-weight: 600;
  font-size: 1.8rem;
`;

export const NavLinkS = styled(Nav.Link)`
  color: #fff !important;
`;

export const ButtonS = styled(Button)`
  background-color: #b5b6e4;
  color: #211a21;
  border: none;

  &:hover {
    background-color: #c8c8e6;
    border: none;
  }
`;

export const NavbarFull = () => {
  return (
    <NavbarS>
      <Container>
        <BrandS>SNES.Lib</BrandS>
        <Nav>
          <NavLinkS>Quem Somos</NavLinkS>
          <ButtonS>Entrar</ButtonS>
        </Nav>
      </Container>
    </NavbarS>
  );
};
