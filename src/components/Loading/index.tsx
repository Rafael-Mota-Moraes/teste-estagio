import styles from "./styles.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
