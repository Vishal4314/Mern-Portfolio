import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Vishal Mishra</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              incidunt, accusamus ut id tempora sit doloribus nesciunt optio
              similique quod numquam eveniet voluptatum nulla non, distinctio
              vel ea dolorem nobis quis sapiente rerum eius omnis? Non ullam
              odit id mollitia.
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="proImg.svg" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
