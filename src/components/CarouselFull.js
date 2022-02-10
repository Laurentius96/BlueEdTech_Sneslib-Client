import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CarouselImg = styled.img`
  widt: 100vw;
  height: 70rem;
`;

export const CarouselFull = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImg
          src="https://images.trustinnews.pt/uploads/sites/5/2021/06/cyberpunk-1600x900.jpeg"
          alt="Primeiro slide"
        />
        <Carousel.Caption>
          <h3>Cyberpunk 2077</h3>
          <p>Maior decepção de 2020</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg
          src="https://warpzone.me/wp-content/uploads/2018/07/Red-Dead-Redemption-2-Wallpaper-Full-HD-KeyArt-1920x1080.jpg"
          alt="Segunda slide"
        />
        <Carousel.Caption>
          <h3>Red Dead Redemption II</h3>
          <p>Uma obra prima dos games</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImg
          src="https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/h/hollow-knight-switch/hero?v=2021120501"
          alt="Terceiro slide"
        />
        <Carousel.Caption>
          <h3>Hollow Knight</h3>
          <p>Uma obra prima do seu gênero</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
