import React from "react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row my-5 d-flex align-items-center">
          <div className="col-md-6">
            <h3>Catering to all of your dental needs and desires</h3>
            <p>
              Our Dental Clinic is dedicated to providing the most up to date
              general, orthodontic and family dentistry. Our Clinic has grown to
              provide a world class facility for the treatment of tooth loss,
              dental cosmetics and advanced restorative dentistry.
            </p>
            <button className="btn btn-primary rounded-pill mb-3 fs-4 px-4">
              Learn More
            </button>
          </div>
          <div className="col-md-6">
            <img className="rounded img-fluid" src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
