import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/logo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const handleNavLinkClick = (value) => {
    setActiveLink(value);
    setNavOpen(false);
  };

  const toggleNav = () => setNavOpen(!navOpen);

  const CustomNavLink = ({ href, value, title }) => (
    <Nav.Link
      href={href}
      className={activeLink === value ? "active navbar-link" : "navbar-link"}
      onClick={() => handleNavLinkClick(value)}
    >
      {title}
    </Nav.Link>
  );

  return (
    <Router>
      <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${navOpen ? "nav-open" : ""}`} ref={headerRef}>
        <Container>
          <Navbar.Brand href="#Home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <div className="d-flex align-items-center justify-content-end">
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={navOpen ? "show" : ""}
              style={{
                top: navOpen ? `${headerHeight - 1}px` : "0",
                height: navOpen ? `calc(100vh - ${headerHeight - 1}px)` : "0",
              }}
            >
              <Nav>
                <CustomNavLink href="#CoreValue" value="CoreValue" title="品牌理念" />
                <CustomNavLink href="#Services" value="Services" title="服務項目" />
                <CustomNavLink href="#Reviews" value="Reviews" title="顧客評價" />
              </Nav>
              <span className="navbar__text">
                <HashLink to="#ContactUs">
                  <button onClick={() => handleNavLinkClick("ContactUs")}>
                    <span>聯繫我們</span>
                    {navOpen && <span> ⇀</span>}
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>

            {/* 只有在768指定尺寸出現 */}
            <span className="navbar__text navbar__custom-show">
              <HashLink to="#ContactUs">
                <button onClick={() => handleNavLinkClick("ContactUs")}>
                  <span>聯繫我們</span>
                </button>
              </HashLink>
            </span>

            <div onClick={toggleNav} className="navbar__custom-toggler">
              {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
          </div>
        </Container>
      </Navbar>
    </Router>
  );
};
