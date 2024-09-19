import { Container } from "react-bootstrap";

export const SectionContainer = ({ children, className, id }) => {
  return (
    <section className={`section__container ${className}`} id={id}>
      <Container>{children}</Container>
    </section>
  );
};