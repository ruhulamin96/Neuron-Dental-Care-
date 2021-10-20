import React from "react";
import img from "../../images/about.jpg";
import './About.css'

function About() {
  return (
    <div className="">
      <div className="container my-5">
        <div className="row">
          <h1 className="text-center text-primary mb-5">About Us</h1>
          <div className="col-md-6">
            <p className="fw-bold text-center">
              At University of Minnesota Dental Clinics, we know that oral
              health is essential to your general health and well-being.
            </p>
            <p>
              We know that a healthy mouth—especially the teeth, lips and
              tongue—is essential for speech and affects our ability to taste,
              chew, and digest foods. We also know that poor oral health—such as
              chronic inflammation from gum disease—has been associated with
              heart disease, blockages, and strokes. Research even suggests that
              a healthy mouth may help prevent pre-term births and low
              birth-weight babies, and help us prevent memory loss in later
              years of life. We are committed to helping you maintain your oral
              health as an integral part of your overall health and wellness.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
