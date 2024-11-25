import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import projectData from "./data";
import "./Playlist.css";

const Playlist = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  let dataContent = projectData.map((data) => {
    return (
      <>
        <Card
          style={{ width: "20rem" }}
          className="mt-4 mb-4 card"
          key={data.id}
        >
          <Card.Img variant="top" src={data.imgsrc} />
          <Card.Body>
            <Card.Title>{data.projectName}</Card.Title>
            <Button variant="primary" style={{ width: "100%" }}>
              <a
                // href={data.demo}
                target="_blank"
                className="text-decoration-none text-light"
              >
                Live Demo
              </a>
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      {isLoading ? (
        <>
          <div
            className="d-flex row justify-content-center align-items-center"
            style={{ height: "90vh" }}
          >
            <Spinner animation="border" variant="danger" />
            &nbsp; &nbsp; Loading...
          </div>
        </>
      ) : (
        <div className="container">
          <h2 className="text-center mt-2">Projects</h2>
          <div className="card_div">
            <div className="card-container">{dataContent}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
