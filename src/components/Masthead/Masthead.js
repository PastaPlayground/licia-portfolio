import styles from "./Masthead.module.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

import profile from "../../files/profile.png";

function Masthead() {
  return (
    <div className={styles.masthead}>
      <div className={styles.mastheadLeft}>
        <p className={styles.headerName}>LICIA GOH</p>
        <img className={styles.hero} src={profile} />
      </div>

      <div className={styles.mastheadRight}>
        <p className={styles.header}>
          Content <br />
          Creator
        </p>

        <div className={styles.social}>
          <h3>Visit my socials</h3>
          <a href="https://www.instagram.com/messedme_/">
            <IoLogoInstagram fontSize="18px" />
            messedme_
          </a>

          {/* <a href="https://www.instagram.com/bbobalilac/">
            <IoLogoInstagram fontSize="18px" />
            bbobalilac
          </a> */}
          <a href="https://www.tiktok.com/@messedme__">
            <FaTiktok fontSize="18px" />
            messedme__
          </a>
        </div>
      </div>
    </div>
  );
}

export default Masthead;
