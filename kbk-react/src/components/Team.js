import React from "react";
import { ProfileCard } from "./ProfileCard";
import teamMembers from "../data/teams";
import styles from "../styles/Team.module.css"; // Updated to use CSS module
import banner from "../images/misc/banner.png";

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.imageContainer}>
        <div id="header">
          <img id="headerImage" src={banner} alt="banner" width="371"></img>
          <p id="headerText">Team</p>
        </div>
      </div>

      {teamMembers.map((member) => (
        <ProfileCard
          key={member.id}
          name={member.name}
          title={member.title}
          boardPosition={member.boardPosition}
          imageSrc={member.imageSrc}
        />
      ))}
    </section>
  );
};

export default TeamSection;
