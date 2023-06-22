import styles from "./styles.module.css";

type Props = {
  msg: string;
};

export default function Error({ msg }: Props) {
  return (
    <div className={styles.container}>
      <h2>{msg}</h2>
    </div>
  );
}
