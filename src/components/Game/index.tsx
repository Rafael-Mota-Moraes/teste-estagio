import { Game } from "@/types/Game";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  game: Game;
};

export default function Post({ game }: Props) {
  return (
    <div className={styles.container}>
      <img src={game.thumbnail} />
      <h2>{game.title}</h2>
    </div>
  );
}
