import { Link } from "react-scroll";
import bookBtn from "../assets/img/book-btn.svg";

export const BookButton = () => {
  return (
    <div className="book-btn">
      <Link to="ContactUs" smooth={true} offset={50} duration={500}>
        <img src={bookBtn} alt="Book Now" />
      </Link>
    </div>
  );
};
