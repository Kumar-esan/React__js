import React from "react";
import "./caurosel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const IndividualIntervalsExample = () => {
  return (
    <header
      style={{ position: "absolute", top: "18%", right: "74%", width: "200px" }}
    >
      <Carousel width="200px" height="700px">
        <Carousel.Item interval={500}>
          <img
            width="260px"
            height="400px"
            className="d-block"
            src="https://image.winudf.com/v2/image1/Y29tLmluc3RhZ3JhbS5hbmRyb2lkX3NjcmVlbl8wXzE2MDU1NzAyMDVfMDAz/screen-0.jpg?fakeurl=1&type=.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            width="260px"
            height="400px"
            className="d-block"
            src="https://play-lh.googleusercontent.com/al379BIPqli4IKDgDnYl7MRm0UPnsKwYpfqO8uCKbfCWNhqk4oXkvyUZgMMXfTJHPxuo"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            width="260px"
            height="400px"
            className="d-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKQ-binygHSREn0N2SyDZMP7_OVDTEoDRAyek0rJmzXptEdc5O15zh3fJ_ZDPCR2YjFs&usqp=CAU"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default IndividualIntervalsExample;
