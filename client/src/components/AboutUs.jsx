import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              We are dedicated to making quality healthcare simple, accessible, and patient-focused.
              Our platform connects patients with trusted doctors and healthcare professionals, 
              making it easy to find the right specialist and book appointments online.
            </p>
            <p>
              With a focus on convenience, transparency, and reliable care, we aim to provide a 
              seamless healthcare experience for every patient. From discovering specialists to 
              managing appointments, we put your health and well-being first.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
