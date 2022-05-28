import styles from "./Illustration.module.css";
function Illustration({ name, image }) {
  return (
    <div className={styles.illustration}>
      <p>{name}</p>
      <div className={styles.thumbnail}>
        <img src={image} />
      </div>
    </div>
  );
}

export default Illustration;
