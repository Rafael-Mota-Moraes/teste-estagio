import { Game as GameType } from "@/types/Game";
import styles from "./styles.module.css";
import Game from "../Game";
import { useEffect, useState } from "react";

type Props = {
  games: GameType[];
  setError: (error: any) => void;
};

export default function PostsContainer({ games, setError }: Props) {
  const [filteredGames, setFilteredGames] = useState<GameType[]>(games);
  const [filterGamesText, setFilterGamesText] = useState("");

  useEffect(() => {
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().startsWith(filterGamesText.toLowerCase())
    );

    setFilteredGames(filteredGames);
  }, [filterGamesText]);

  function renderGames() {
    try {
      return filteredGames?.map((game) => <Game key={game.id} game={game} />);
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={filterGamesText}
          placeholder="Digite sua busca"
          onChange={(e) => setFilterGamesText(e.target.value)}
        />
      </div>
      <div className={styles.container}>{renderGames()}</div>
    </>
  );
}
