import { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import HeroImg1 from "../../assets/images/Hero/HeroImg1.webp";
import HeroImg2 from "../../assets/images/Hero/HeroImg2.webp";
import HeroImg3 from "../../assets/images/Hero/HeroImg3.webp";
import HeroImg4 from "../../assets/images/Hero/HeroImg4.webp";

interface CustomCarouselProps {
  className: string;
}

class Carousel extends Component<CustomCarouselProps> {
  render() {
    const { className } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
    };

    return (
      <Container className={className}>
        <Slider {...settings}>
          <div className="slide-item">
            <img src={HeroImg1} alt="" width="90%" height="250px" />
          </div>
          <div className="slide-item">
            <img src={HeroImg2} alt="" width="90%" height="250px" />
          </div>
          <div className="slide-item">
            <img src={HeroImg3} alt="" width="90%" height="250px" />
          </div>
          <div className="slide-item">
            <img src={HeroImg4} alt="" width="90%" height="250px" />
          </div>
        </Slider>
      </Container>
    );
  }
}

export default Carousel;
