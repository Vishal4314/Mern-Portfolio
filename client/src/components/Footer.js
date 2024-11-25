import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Vishal Mishra</h4>
            <p>© {year} Vishal Mishra All rights reserved</p>
            <p className="d-flex">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook mx-3"></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>info@vishalmishra.com</p>
            <p>+91 0123456789</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
