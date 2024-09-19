import { Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";

import { SectionContainer } from "../common/SectionContainer";
import { SectionTitleCenter } from "../common/SectionTitle";
import { cardTitle, cardContent } from "../utils/data";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const Reviews = () => {
  return (
    <SectionContainer className="section__container" id="Reviews">
      <Row>
        <Col size={12}>
          <>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <SectionTitleCenter title="顧客評價" subtitle="Reviews" />
            </motion.div>
            
            <Row xs={1} sm={1} md={1} lg={3} className="g-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <motion.div
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <Card className="p-3 shadow">
                      <Card.Body>
                        <p className="reviews__card-title-container">
                          <span className="reviews__card-title-name">
                            {cardTitle[idx].name}
                          </span>
                          <span className="reviews__card-title-place">
                            {cardTitle[idx].place}
                          </span>
                        </p>
                        <hr className="reviews__card-divider" />
                        <div>
                          <div className="reviews__card-content-container">
                            {cardContent[idx]}
                          </div>
                          <div className="reviews__card-rating">
                            <div className="reviews__card-stars">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} />
                              ))}
                            </div>
                            <div className="reviews__card-text">五星好評</div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </>
        </Col>
      </Row>
    </SectionContainer>
  );
};
