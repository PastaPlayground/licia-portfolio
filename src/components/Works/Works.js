import styles from "./Works.module.css";
import Illustration from "../Illustration/Illustration";

function Works() {
  return (
    <div className={styles.works}>
      <div className={styles.illustrationContainer}>
        <div className={styles.column}>
          <Illustration name="food" image="https://via.placeholder.com/400" />
          <Illustration name="food" image="https://via.placeholder.com/400" />
          <Illustration name="food" image="https://via.placeholder.com/400" />
        </div>

        <div className={styles.column}>
          <Illustration
            name="food"
            image="https://via.placeholder.com/400x500"
          />
          <Illustration name="food" image="https://via.placeholder.com/400" />
          <Illustration name="food" image="https://via.placeholder.com/400" />
        </div>

        <div className={styles.column}>
          <Illustration name="food" image="https://via.placeholder.com/400" />
          <Illustration name="food" image="https://via.placeholder.com/400" />
          <Illustration name="food" image="https://via.placeholder.com/400" />
        </div>
      </div>
    </div>
  );
}

export default Works;
