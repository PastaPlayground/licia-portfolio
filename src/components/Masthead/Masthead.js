import styles from "./Masthead.module.css";
import Social from "../Social/Social";

import profile from "../../files/profile.png";

function Masthead() {
  return (
    <div className={styles.masthead}>
      <div className={styles.mastheadLeft}>
        <img className={styles.hero} src={profile} />
      </div>

      <div className={styles.mastheadRight}>
        <p className={styles.headerName}>LICIA GOH</p>
        <p className={styles.header}>
          Content <br />
          Creator
        </p>
        <Social />
        <small>I occassionally do TikToks on food and places</small>
      </div>
    </div>
  );
}

export default Masthead;
