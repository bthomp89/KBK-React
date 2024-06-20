import { useState, useEffect } from "react";
import nbImage from "../images/logos/nb.webp";
import leafsImage from "../images/logos/nationals.webp";
import baseballImage from "../images/logos/western_baseball.webp";
import bgcImage from "../images/logos/bgc.webp";

import { SocialIcon } from "react-social-icons";
import "../styles/Footer.css";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer>
      <div className="affiliates">
        <a href="https://www.newbalance.ca/" target="_blank">
          <img src={nbImage} alt="nb" />
        </a>
        <a href="https://www.bgclondon.ca/" target="_blank">
          <img src={bgcImage} alt="nb" />
        </a>
        <a href="https://westernmustangs.ca/sports/baseball" target="_blank">
          <img src={baseballImage} alt="nb" />
        </a>
        <a href="https://nationals.gojhl.ca/" target="_blank">
          <img src={leafsImage} alt="nb" />
        </a>
      </div>

      <div
        className="socials"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="mailto:kidsbeingkidscharity@gmail.com"
          style={{ marginRight: isMobile ? "10px" : "28px" }}
        >
          kidsbeingkidscharity@gmail.com
        </a>
        <SocialIcon
          url="https://www.linkedin.com/company/kids-being-kids-charity/"
          bgColor="transparent"
          style={{
            width: isMobile ? "30px" : "100px",
            height: isMobile ? "30px" : "100px",
            marginRight: isMobile ? "0px" : "10px",
          }}
        />
        <SocialIcon
          url="https://www.instagram.com/kidsbeingkidsorg/"
          bgColor="transparent"
          style={{
            width: isMobile ? "30px" : "100px",
            height: isMobile ? "30px" : "100px",
            marginRight: isMobile ? "0px" : "10px",
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
