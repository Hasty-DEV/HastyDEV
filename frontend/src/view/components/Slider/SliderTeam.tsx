import { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Lucas from "../../assets/images/About/Lucas.jpg"
import Jeff from "../../assets/images/About/Jeff.jpg"
import Thiago from "../../assets/images/About/Thiago.jpg"
import Portela from "../../assets/images/About/Portela.jpg"
import { CarouselImage } from "../../styles/SliderContact/SliderContact.styles";
import { SliderContactProps } from "../../../data/@types/SliderContact/SliderContact.type";

class SliderTeam extends Component<SliderContactProps> {
  render() {
    const { className } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Container className={className}>
        <Slider {...settings} className="mt-3">
          <div className="slide-item">
            <CarouselImage src={Lucas} alt="" />
          </div>
          <div className="slide-item">
            <CarouselImage src={Jeff} alt="" />
          </div>
          <div className="slide-item">
            <CarouselImage src={Portela} alt="" />
          </div>
          <div className="slide-item">
            <CarouselImage src={Thiago} alt="" />
          </div>
        </Slider>
      </Container>
    );
  }
}

export default SliderTeam;
