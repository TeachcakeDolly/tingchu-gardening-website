import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SectionContainer } from "../common/SectionContainer";
import { SectionTitle } from "../common/SectionTitle";
import { slides } from "../utils/data";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const Services = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true, // 允許滑動
    centerMode: false, // 不使用中心模式
    centerPadding: "0", // 不使用中心內邊距
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <SectionContainer className="section__container services" id="Services">
      <Row>
        <Col size={12}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <SectionTitle title="服務項目" subtitle="Services" />
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <div className="services__image-container">
                    <img src={slide.image} alt={slide.title} />
                    <div className="services__image-container-overlay">
                      <h3>{slide.title}</h3>
                      <p>{slide.subtitle}</p>
                      <span className="services__button navbar__text">
                        <Link
                          to="ContactUs"
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          <button className="navbar__btn">
                            <span>聯繫我們</span>
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
