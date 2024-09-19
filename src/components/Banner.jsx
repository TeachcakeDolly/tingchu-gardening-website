import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { SectionContainer } from "../common/SectionContainer";
import logo from "../assets/img/logo.svg";

export const Banner = () => {
  return (
    <SectionContainer className="banner" id="Home">
      <Row className="align-items-center justify-content-end">
        <Col xs={12} md={6} xl={7} className="d-flex justify-content-end align-items-center">
          <div>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              庭竹園藝
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="d-flex justify-content-end align-items-center mb-4"
            >
              <img src={logo} alt="Logo" />
            </motion.div>
          </div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
