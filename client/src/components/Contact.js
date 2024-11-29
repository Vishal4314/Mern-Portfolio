import React, { useState } from "react";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [inpVal, setInpVal] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInpChange = (event) => {
    const { name, value } = event.target;
    setInpVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { fName, lName, email, mobile, message } = inpVal;
    if (!fName || !lName || !email || !mobile) {
      toast.error("Fill All the Details Please.");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else {
      const response = await fetch("http://localhost:8007/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fName, lName, email, mobile, message }),
      });
      const res = await response.json();
      if (res.status === 201) {
        toast.success("Your response is submitted, Thanks for reaching out.");
        setInpVal({
          ...inpVal,
          fName: "",
          lName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        toast.error("Error while saving Response, Please Try again");
      }
    }
  };

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">Contact Me</h2>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fName"
                value={inpVal.fName}
                onChange={handleInpChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lName"
                value={inpVal.lName}
                onChange={handleInpChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inpVal.email}
                onChange={handleInpChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={inpVal.mobile}
                onChange={handleInpChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={inpVal.message}
                onChange={handleInpChange}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="col-lg-6"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
