import styles from "../Masthead/Masthead.module.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

function Social() {
  return (
    <div className={styles.social}>
      {/* <h3>Visit my socials</h3> */}
      <a href="https://www.instagram.com/messedme_/">
        <IoLogoInstagram fontSize="18px" />
        <p>messedme_</p>
      </a>
      <a href="https://www.tiktok.com/@messedme__">
        <FaTiktok fontSize="18px" />
        <p>messedme__</p>
      </a>
    </div>
  );
}

export default Social;
