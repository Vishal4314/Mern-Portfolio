import React from "react";
import "./Home.css";

import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <dic className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to <span style={{ color: "#6c63ff" }}>Vishal Mishra</span>{" "}
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, quia qui eum sunt voluptate obcaecati rerum
              repellendus, nobis sapiente fugiat amet voluptates tempore soluta
              perferendis placeat porro dignissimos cum ab.
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="danger"
                style={{
                  background: "#2f2d69",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  marginRight: 24,
                }}
              >
                Resume
              </Button>
              <Button
                variant="danger"
                style={{
                  background: "#6c63ff",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                }}
              >
                Resume
              </Button>
            </div>
          </div>
          <div className="right_div">
            <img src="proImg.svg" alt="pic" />
          </div>
        </dic>
      </div>
    </>
  );
};

export default Home;
