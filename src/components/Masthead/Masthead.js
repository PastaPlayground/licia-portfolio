import styles from "./Masthead.module.css";
function Masthead() {
  return (
    <div className={styles.masthead}>
      <div>
        <p className={styles.headerName}>LICIA GOH</p>
        <img className={styles.hero} src="https://via.placeholder.com/600" />
      </div>

      <div className={styles.mastheadRight}>
        <p className={styles.header}>
          Content <br />
          Creator
        </p>

        <div className={styles.social}>
          <p>Instagram</p>
          <p>Tiktok</p>
        </div>
      </div>
    </div>
  );
}

export default Masthead;
