import "../styles/About.css";

import image1 from "../images/gallery/ben+adam+table.webp";
import image2 from "../images/gallery/ben+skates.webp";
import image3 from "../images/gallery/table+drive+2.jpg";
import image4 from "../images/gallery/gage+yates+christmas.jpg";
import image5 from "../images/gallery/guelph+shoe+drive.jpg";
import underline from "../images/misc/underline.png";

function About() {
  return (
    <div className="aboutComponent">
      <div className="aboutHeader">
        <div className="about-disp-box">
          <h1 id="about-title">About Us</h1>
          <div className="about-text-box">
            <p id="about-head1" className="about-text">
              The Kids being Kids Organization was founded by two dedicated
              students from Western University, Ben Lambert and Adam Cohen, who
              share a common goal of giving back to their community. Recognizing
              the tremendous impact that sports can have on a child's life, they
              firmly believe that every child should have the opportunity to
              experience the joy, camaraderie, and personal growth that come
              with participating in sports, regardless of their economic
              circumstances.
            </p>
            <p id="about-head1" className="about-text">
              Motivated by their own experiences and the support they received
              from their community, Ben and Adam decided to harness the power of
              their local community and extend the same opportunities to the
              next generation of athletes. They rallied their community members,
              including fellow students, families, and local businesses, to join
              their cause.
            </p>
          </div>
        </div>
      </div>
      <div className="timelineHeader">
        <div className="timelineHeaderText">Timeline . . .</div>
        <img className="timelineUnderline" src={underline} />
      </div>
      <div className="timelineContainer">
        <div className="timelineLeft">
          <div className="timeline-line">
            <div className="timelinePoint"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">August, 2022</span> <br></br>"Kids being Kids
            is founded by two dedicated students, Ben Lambert and Adam Cohen,
            with the shared goal of giving back to their community. <br></br>{" "}
            Ben and Adam rally their community members, including fellow
            students, families, and local businesses, to join their cause."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">October, 2022</span> <br></br>"Ben and Adam
            partner with the London Nationals for their first equipment drive!"
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">November, 2022</span> <br></br>"First
            Thanksgiving drive: Ben and Adam complete their first donation to
            the Boys and Girls Club London. They collected over 70 items of
            sports equipment for the Boys and Girls Club program in London."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">December, 2022</span> <br></br>"Establish a
            partnership with New Balance Canada to provide over a 100 children
            with brand new pairs of shoes for the holidays. The New Balance
            Christmas Drive has teamed up with the Boys and Girls Club as well
            as the The Life Center to ensure that everyone’s holiday is as happy
            and celebratory as it should be. "
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">March 25, 2023</span> <br></br>"Kids being
            Kids reaches a milestone by donating over $10,000 worth of sports
            equipment and running shoes to organizations such as the Boys and
            Girls Club, YMCA, and Teen Challenge."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">June, 2023</span> <br></br>"Establishment of
            an Advisory Board."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">August, 2023</span> <br></br>"Kids being Kids
            reaches another milestone by donating over $50,000 worth of sports
            equipment and running shoes to renowned organizations."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">September, 2023</span> <br></br>"Launching
            new locations with an expansion to Guelph and St. Catharines."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">December, 2023</span> <br></br>"Kids being
            Kids achieves the ambitious goal of donating over $100,000 worth of
            sports equipment into reality."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointMiddle"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">January 19, 2024</span> <br></br>"Launch of
            new location with an expansion to Toronto and a partnership with the
            University of Toronto."
          </div>

          <div className="timeline-line">
            <div className="timelinePoint timelinePointBottom"></div>
          </div>
          <div className="timelineComponent">
            <span className="bold">Looking ahead</span> <br></br>Kids being Kids
            plans to expand their outreach efforts by securing monetary
            donations to establish a robust financial support system by the end
            of 2023. This will enable them to extend their reach to more
            deserving children in the community. "
          </div>
        </div>
        <div className="timelineImages">
          <img className="timelineImage" src={image1}></img>
          <img className="timelineImage" src={image2}></img>
          <img className="timelineImage" src={image3}></img>
          <img className="timelineImage" src={image4}></img>
          <img className="timelineImage" src={image5}></img>
        </div>
      </div>
    </div>
  );
}

export default About;
