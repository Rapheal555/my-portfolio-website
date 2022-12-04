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
      {['lg'].map((expand) => (
        <Navbar
          collapseOnSelect
          key={expand}
          // bg="white"
          fixed="top"
          expand={expand}
          className="nav-backgroun"
        >
          <Container className="backg">
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
              className="w-auto backg p-lg-3"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image
                    height="75"
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
                      href="/pricing"
                      passHref
                      className={
                        router.pathname == '/pricing'
                          ? 'navHover p2 p-3'
                          : 'p2 p-3 darkHover text-dark'
                      }
                    >
                      Pricing
                    </Link>
                  </div>
                </Nav>
                <Nav className="">
                  <div className="">
                    <Link
                      href="/pay-fees"
                      passHref
                      className={
                        router.pathname == '/pay-fees'
                          ? 'navHover p2 p-3'
                          : 'p2 p-3 darkHover text-dark'
                      }
                    >
                      Pay Fees
                    </Link>
                  </div>
                  <div className=" ">
                    <Link
                      href="/login"
                      passHref
                      className={
                        router.pathname == '/login'
                          ? 'navHover p2 p-3 mt-2 mb-3 me-3 mb-xl-0'
                          : 'p2 p-3 darkHover text-dark mt-2 mb-3 me-3 mb-xl-0'
                      }
                    >
                      Login
                    </Link>
                  </div>
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
