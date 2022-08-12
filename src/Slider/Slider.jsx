import React from "react";
import "./style.css";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
function Slider() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-inline-block" id="img1"
              alt="..."
             
            />
            <img
              src={img2}
              className="d-inline-block" id="img2"
              alt="..."
            
            />
            <img
              src={img3}
              className="d-inline-block" id="img3"
              alt="..."
             
            />
          </div>
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-inline-block" id="img1"
              alt="..."
             
            />
            <img
              src={img2}
              className="d-inline-block" id="img2"
              alt="..."
            
            />
            <img
              src={img3}
              className="d-inline-block" id="img3"
              alt="..."
             
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span aria-hidden="true" className="carousel-control-prev-icons">
            <FaCaretLeft
              style={{
                width: 40,
                height: 40,
              }}
            />{" "}
          </span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span aria-hidden="true" className="carousel-control-next-icons">
            <FaCaretRight
              style={{
                width: 40,
                height: 40,
              }}
            />{" "}
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
