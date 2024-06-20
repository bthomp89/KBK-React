// Testimonials.js

import React from "react";
import "../styles/Testimonials.css";
import ribbon1 from "../images/testimonials/ribbon1.png"; // Import image
import ribbon2 from "../images/testimonials/ribbon2.png"; // Import image
import ribbon3 from "../images/testimonials/ribbon3.png"; // Import image
import banner from "../images/misc/banner.png";

function Testimonial({ title, text, className, alignRight }) {
  // Added alignRight prop
  const alignmentClass = alignRight ? "right-aligned" : "left-aligned";

  return (
    <div className={`testimonial ${className} ${alignmentClass}`}>
      <h3 className="testimonial-title">{title}</h3>
      <p className="testimonial-text">{text}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <div id="header">
          <img id="headerImage" src={banner} alt="banner" width="371"></img>
          <p id="headerText">Testimonial</p>
        </div>

        <div style={{ height: "90px", width: "100%" }}></div>
        <div className="ribbon-left">
          <Testimonial
            title='"Empowering Dreams Through Sport!"'
            text="I can't express how grateful I am for the incredible work of this non-profit organization. Thanks to their generosity, my child now has access to high-quality sports equipment that we could never have afforded on our own. It's not just about the gear; it's about giving kids the chance to discover their potential and build confidence through sports. This organization is a game-changer!"
            className="first"
            alignRight={false}
          />

          <img
            src={ribbon1}
            alt="Descriptive text for accessibility"
            className="testimonial-image"
          />
        </div>
        <div className="ribbon-right">
          <Testimonial
            title='"A Beacon of Hope for Young Athletes"'
            text="As a single parent, providing my children with sports equipment was often financially challenging. Thanks to the unwavering support of this non-profit, my kids can now actively participate in sports without any barriers. The impact on their self-esteem and overall well-being is immeasurable. This organization is not just providing equipment; they are building a brighter future for our kids."
            alignRight={true}
          />

          <img
            src={ribbon2}
            alt="Descriptive text for accessibility"
            className="testimonial-image"
          />
        </div>
        <div className="ribbon-left">
          <Testimonial
            title='"Turning Passion into Possibility"'
            text="This non-profit has transformed the lives of so many children, including mine. By donating sports equipment, they are not only giving kids the tools they need to pursue their passions but also instilling values of teamwork, discipline, and resilience. My child's love for sports has flourished, and I am deeply grateful for the positive influence this organization has had on our lives."
            className="last"
            alignRight={false}
          />

          <img
            src={ribbon3}
            alt="Descriptive text for accessibility"
            className="testimonial-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
