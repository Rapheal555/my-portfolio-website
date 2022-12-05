import Link from 'next/link';
import { useRouter } from 'next/router.js';
import { useState } from 'react';
import {
  Navbar,
  Image,
  Container,
  Nav,
  Offcanvas,
  Button,
} from 'react-bootstrap';

const Navigation = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   if (menuOpen == true) {
  //     setMenuOpen(false);
  //   }
  // };
  // const toggleCanvas = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const handleClose = () => setMenuOpen(false);

  const router = useRouter();
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          collapseOnSelect
          key={expand}
          // bg="white"
          fixed="top"
          expand={expand}
          className="nav-backgroun"
        >
          <Container className="backgg">
            <Navbar.Brand className="">
              <Link href="/" passHref>
                <span>
                  <Image
                    height="75"
                    src="./images/me-logo.png"
                    className=""
                    alt="logo"
                  />
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              className="text-white bg-white"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              // onClick={toggleCanvas}
            />
            <Navbar.Offcanvas
              // restoreFocus={false}
              // show={!menuOpen}
              // onHide={handleClose}
              className="w-auto backgg p-lg-3"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image
                    height="150"
                    src="./images/me-logo.png"
                    className=""
                    alt="logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="">
                <Nav className="justify-content-start  flex-grow-1">
                  <div className=" ">
                    <Link
                      href="#"
                      passHref
                      className={
                        router.pathname == '/#'
                          ? 'navHover  p2 p-3'
                          : 'p2 p-3 darkHover text-white'
                      }
                    >
                      Introduction
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#about-me"
                      passHref
                      className={
                        router.pathname == '/#about-me'
                          ? 'navHover p2 p-3'
                          : 'p2 p-3 darkHover text-white'
                      }
                    >
                      About me
                    </Link>
                  </div>
                  <div className=" ">
                    <Link
                      href="#projects"
                      passHref
                      className={
                        router.pathname == '/#projecs'
                          ? 'navHover p2 p-3 mt-2 mb-3 me-3 mb-xl-0'
                          : 'p2 p-3 darkHover text-white mt-2 mb-3 me-3 mb-xl-0'
                      }
                    >
                      Projects
                    </Link>
                  </div>
                </Nav>
                <Nav className="">
                  <Link href="https://www.linkedin.com/in/rapheal-odejinmi-9baa801a3/">
                    <i class="bi bi-linkedin head3 text-white"></i>
                  </Link>
                  <Link href="https://twitter.com/ROdejinmi">
                    <i class="bi mx-5 bi-twitter head3 text-white"></i>
                  </Link>
                  <Link href="https://github.com/Rapheal555">
                    <i class="bi bi-github head3 text-white"></i>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;
