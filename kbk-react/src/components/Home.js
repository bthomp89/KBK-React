import "../styles/Home.css";
import image from "../images/misc/circle.png";
import gallery1 from "../images/gallery/christmas+bgc+don.png";
import gallery2 from "../images/gallery/donation+image+2.png";
import gallery3 from "../images/gallery/nb+donation.png";
import gallery4 from "../images/gallery/y+frisbee.png";
import gallery5 from "../images/gallery/donation+image+3.png";

import partner1 from "../images/logos/ymca_home.webp";
import partner2 from "../images/logos/nb.webp";
import partner3 from "../images/logos/bgc_home.webp";
import partner4 from "../images/logos/nationals.webp";
import partner5 from "../images/logos/western_baseball.webp";
import partner6 from "../images/logos/niagara_home.webp";
import partner7 from "../images/logos/sherrard_home.webp";

import ribbon from "../images/misc/ribbon.png";
import faces from "../images/template_images/faces_home.webp";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="root-container">
      <div className="startBanner">
        <div className="box"></div>
        <div className="headline">
          <p>We Share, Everyone Plays</p>
        </div>
      </div>
      <div className="mission">
        <div className="mission-group">
          <img className="circle" src={image} alt="circle" />
          <div className="mission-title">
            <h1>Our Mission</h1>
          </div>
          <div className="mission-box">
            <p>
              We are passionate about giving <b>every</b> child the opportunity
              to play sports, regardless of their economic circumstances
            </p>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stat" id="statA">
          <div className="stat-title">8</div>
          <div className="stat-content">
            Presently collaborating with seven partner organizations and
            companies to facilitate the distribution of donated equipment to
            deserving families. These include the YMCA, Boys and Girls Club
            (BGC), NB Toronto, and Teen Challenge, among others
          </div>
        </div>
        <div className="stat" id="statB">
          <div className="stat-title">$70,000</div>
          <div className="stat-content">
            In just one year, our team has donated over $70,000 worth of sports
            equipment and running shoes, making a remarkable impact. We are
            dedicated to supporting the community and have successfully provided
            valuable resources to individuals and organizations in need. These
            contributions enhance access to sports and positively influence
            countless lives, empowering individuals to pursue their athletic
            aspirations. We are proud of our accomplishments and remain
            committed to making a difference through impactful initiatives.
          </div>
        </div>
        <div className="stat" id="statC">
          <div className="stat-title">350+</div>
          <div className="stat-content">
            We have extended our support to more than 350 children throughout
            Ontario, granting them the invaluable opportunity to engage in
            sports activities. By providing equipment donations, we aim to
            ensure that children have the means to participate in sports and
            experience the numerous benefits that come with it.
          </div>
        </div>
      </div>
      <div className="main-stat">
        <div className="main-stat-group">
          <p>
            <b>1 in 3 Canadian Kids</b> are not in organized sports due to the
            high costs. Kids being Kids Organization provides sports equipment
            to children to help mitigate the cost to play
          </p>
        </div>
      </div>

      <div className="gallery-header">
        <Link to="/gallery" className="gallery-link">
          Gallery
        </Link>
      </div>
      <div className="gallery">
        <div className="col-left-col">
          <img src={gallery1} alt="Left Image" />
        </div>
        <div className="col">
          <div className="image-gallery right-col">
            <img src={gallery2} alt="Top Right Image 1" />
            <img src={gallery3} alt="Bottom Right Image 2" />
            <img src={gallery4} alt="Top Right Image 3" />
            <img src={gallery5} alt="Bottom Right Image 4" />
          </div>
        </div>
      </div>

      <div className="title" id="header">
        <img
          id="headerImage"
          src={ribbon}
          alt="banner"
          width="1200"
          height="100"
        ></img>
        <p id="headerText">LET KIDS BE KIDS</p>
      </div>

      <div className="howItWorks">
        <div className="col-text">
          <h2 className="kidsHeader2">How It Works</h2>
          <p className="kidsText">
            Our team goes door to door offering to collect used sports equipment
            from families. We then work with foundations in the community to
            distribute to kids who want to play!
          </p>
          <h2 className="kidsHeader2">How YOU can Help</h2>
          <p className="kidsText">
            Got any equipment lying around the house that you simply don't use
            anymore? Donate your equipment today to help a child enjoy the
            sport!
          </p>
        </div>
        <div className="col-img">
          <img src={faces} alt="kids faces" />
        </div>
      </div>

      <div className="a-container">
        <div className="divider"></div>
      </div>

      <div className="ourPartners">
        <div className="partners">
          <h1 className="partnersHeader">Our Partners</h1>
          <div className="partnersDivider"></div>
        </div>
        <div className="wrap-grid-container">
          <div className="wrap-grid">
            <a href="https://www.ymcaswo.ca/">
              <img src={partner1} alt="ymca" />
            </a>
            <a href="https://www.newbalance.ca/">
              <img src={partner2} alt="new balance" />
            </a>
            <a href="https://www.bgclondon.ca/">
              <img src={partner3} alt="bgc" />
            </a>
            <a href="https://nationals.gojhl.ca/">
              <img src={partner4} alt="nationals" />
            </a>
          </div>
          <div className="wrap-grid">
            <a href="https://westernmustangs.ca/sports/baseball">
              <img src={partner5} alt="baseball" />
            </a>
            <a href="https://www.startmeupniagara.ca/site/home">
              <img src={partner6} alt="niagara" />
            </a>
            <a href="https://www.sherrardkuzz.com/">
              <img src={partner7} alt="sherrard kuzz" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
