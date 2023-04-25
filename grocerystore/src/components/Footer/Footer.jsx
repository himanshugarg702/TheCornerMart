import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/Groceries/grocerylogo.jpg";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>The Corner Mart</h5>
              <p>
             This is the best store in california you can order grocery from your home
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 10:00pm</p>
              </ListGroupItem>

              {/* <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem> */}
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location:California</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span></span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: johnol1@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              <a href="https://follishitechsolutions.org/" target="_blank">
              Copyright - 2023, website made by Follis Hitech Solutions. All Rights
              Reserved.
              </a>
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
               <a href="https://www.facebook.com"  target="_blank">
               <i class="ri-facebook-line"></i>
               </a>
                {/* <Link to="https://www.facebook.com">
                  <i class="ri-facebook-line"></i>
                </Link> */}
                {" "}
              </span>

              <span>
                <a href="https://www.github.com"  target="_blank">
                  <i class="ri-github-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.youtube.com/">
                  <i class="ri-youtube-line"></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a href=" https://www.linkedin.com" >
                  <i class="ri-linkedin-line"></i>
                </a>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
