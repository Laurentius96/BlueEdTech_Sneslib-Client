import styled from "styled-components";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = styled.div`
  background-color: #017bff;
  color: #fff;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Social = styled.div`
  font-size: 2rem;

  a {
    color: #fff;
    margin: 0 0.15rem;
    text-decoration: none;
  }
`;

export const FooterS = () => {
  return (
    <Footer>
      <Social>
        <a href="https://www.instagram.com/cb.lorenzo/">
          <FaInstagramSquare />
        </a>
        <a href="https://github.com/Laurentius96">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/cb-lorenzo/">
          <FaLinkedin />
        </a>
      </Social>
    </Footer>
  );
};
