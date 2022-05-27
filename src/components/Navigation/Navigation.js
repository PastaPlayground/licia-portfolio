import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>

      <div className={styles.navbarRight}>
        {/* <p>
          <Link to="/illustration">Illustration</Link>
        </p>
        <p>
          <Link to="/videos">Videos</Link>
        </p>
        <p>
          <Link to="/client">Client</Link>
        </p> */}
        <p>
          <Link to="/works">Works</Link>
        </p>
      </div>
    </div>
  );
}

export default Navigation;
