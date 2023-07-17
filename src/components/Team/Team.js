import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import teamList from "../../data/TeamList";
import * as styles from "./Team.module.css";

const Teams = () => {
  return (
    <section className={`margin-on-side ${styles.teamContainer}`} id="team">
      <h4 className={`text-heading ${styles.teamLabel}`}>Our Creative Team</h4>
      <p className={styles.teamDes}>
        With a passion for innovation and a commitment to excellence, our team
        brings together a diverse range of skills and expertise to create a
        product that is both cutting-edge and user-friendly
      </p>
      <div className={styles.teamList}>
        {teamList.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            role={team.role}
            avatar={team.avatar}
            link={team.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Teams;
