import { Row, Col } from "react-bootstrap";
import photo1 from "../assets/img/core-value-1.png";
import photo2 from "../assets/img/core-value-2.png";

import { SectionContainer } from "../common/SectionContainer";
import { SectionTitle } from "../common/SectionTitle";
import { content } from "../utils/data";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const CoreValue = () => {
  return (
    <SectionContainer className="section__container coreValue" id="CoreValue">
      <Row>
        <Col size={12} md={6} className="d-flex align-items-center">
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="img-fluid"
            src={photo1}
            alt="photo1"
          />
        </Col>

        <Col
          size={12}
          md={6}
          className="d-flex flex-column justify-content-center"
        >
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <SectionTitle title="品牌理念" subtitle="Core Values" />
            <p>{content}</p>
            <div className="coreValue__imgPart">
              <img className="img-fluid" src={photo2} alt="photo2" />
            </div>
          </motion.div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
