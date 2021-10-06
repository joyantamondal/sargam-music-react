import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div classNameName="footer">
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <Container>
              <div className="row">
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    About us
                  </div>
                  <p className="white-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500 text of the
                    printing.
                  </p>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    Admission
                  </div>
                  <div className="footer-links">
                    <Link to="#">Policy</Link>
                    <Link to="#">FAQ</Link>
                    <Link to="#">Admission Form</Link>
                  </div>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    Department
                  </div>
                  <div className="footer-links">
                    <Link to="#">Instrumental Music</Link>
                    <Link to="#">Vocal</Link>
                    <Link to="#">Dance</Link>
                  </div>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">Support</div>
                  <div className="footer-links">
                    <Link to="#">Music</Link>
                    <Link to="#">Instrument</Link>
                    <Link to="#">Forum</Link>
                  </div>
                </div>
              </div>
            </Container>
          </footer>
          <div className="footer-bottom">
            Copyright © 2021 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
