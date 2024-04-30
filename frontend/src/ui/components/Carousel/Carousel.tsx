import { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import HeroImg1 from "../../../Ui/assets/images/Hero/HeroImg1.webp";
import HeroImg2 from "../../../Ui/assets/images/Hero/HeroImg2.webp";
import HeroImg3 from "../../../Ui/assets/images/Hero/HeroImg3.webp";
import HeroImg4 from "../../../Ui/assets/images/Hero/HeroImg4.webp";
import { CarouselProps } from "../../../data/@types/Carousel/Carousel.type";

class Carousel extends Component<CarouselProps> {
  render() {
    const { className } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
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
