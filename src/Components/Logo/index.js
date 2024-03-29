import { Container } from "./style";
import carousel1 from "../../img/Carousel1.jpg";
import carousel2 from "../../img/Carousel2.jpg";
import carousel3 from "../../img/Carousel3.jpg";
import Carousel from "react-bootstrap/Carousel";

const Logo = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h4>
              Join Tamilpreneur Club{" "}
              <a href="https://club.tamilpreneur.in">here.</a>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Logo;
