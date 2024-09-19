import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import { SectionContainer } from "../common/SectionContainer";
import { SectionTitleCenter } from "../common/SectionTitle";
import { SnakeBar } from "../common/SnakeBar";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const ContactUs = () => {
  const initForm = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [formDetails, setFormDetails] = useState(initForm);
  const [showSnakeBar, setShowSnakeBar] = useState(false); // 控制 SnakeBar 的顯示
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formDetails.Name) formErrors.Name = "此欄位為必填";
    if (!formDetails.Email) formErrors.Email = "此欄位為必填";
    if (!formDetails.Message) formErrors.Message = "此欄位為必填";
    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setShowSnakeBar(true);  // 顯示 SnakeBar
    setFormDetails(initForm);  // 重置表單
    setErrors({});  // 錯誤訊息
    setTimeout(() => setShowSnakeBar(false), 5000);  // 5秒後隱藏 SnakeBar
  };

  return (
    <SectionContainer className="section__container contactUs" id="ContactUs">
      <Row>
        <Col size={12}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <SectionTitleCenter title="聯絡我們" subtitle="Contact Us" />
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={12}>
                  <div className="mb-4">
                    <label>名稱</label>
                    <input
                      type="text"
                      value={formDetails.Name}
                      placeholder="請輸入您的名稱/稱呼*"
                      onChange={(e) => onFormUpdate("Name", e.target.value)}
                    />
                    {errors.Name && <p className="error">{errors.Name}</p>}
                  </div>
                </Col>
                <Col size={12} sm={12}>
                  <div className="mb-4">
                    <label>郵件地址</label>
                    <input
                      type="email"
                      value={formDetails.Email}
                      placeholder="請輸入您的郵件地址*"
                      onChange={(e) => onFormUpdate("Email", e.target.value)}
                    />
                    {errors.Email && <p className="error">{errors.Email}</p>}
                  </div>
                </Col>
                <Col size={12} sm={12}>
                  <div className="mb-4">
                    <label>問題需求</label>
                    <textarea
                      rows="6"
                      value={formDetails.Message}
                      placeholder="請輸入您的需求*"
                      onChange={(e) => onFormUpdate("Message", e.target.value)}
                    ></textarea>
                    {errors.Message && (
                      <p className="error">{errors.Message}</p>
                    )}
                  </div>
                  <button type="submit">
                    <span>預約服務</span>
                  </button>
                </Col>
              </Row>
            </form>
          </motion.div>
        </Col>
      </Row>
      {showSnakeBar && <SnakeBar />}
    </SectionContainer>
  );
};
