import Error from "@/components/Error";
import GamesContainer from "@/components/GamesContainer";
import Loading from "@/components/Loading";
import { Game } from "@/types/Game";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const URL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data";

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await fetch(URL, {
          headers: {
            "dev-email-address": "email@email.com"
          }
        });
        const json: Game[] = await response.json();

        if (response.status >= 500 && response.status <= 509) {
          setError(true);
          setErrorMessage(
            "O servidor fahou em responder, tente recarregar a página"
          );
        } else if (response.status !== 200) {
          setError(true);
          setErrorMessage(
            "O servidor demorou para responder, tente mais tarde"
          );
        }
        setGames(json);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    fetchPosts();
  }, []);

  function renderGamesContainer() {
    if (games && !loading) {
      return <GamesContainer setError={setError} games={games} />;
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <main>
          {error ? <Error msg={errorMessage} /> : renderGamesContainer()}
        </main>
      )}
    </>
  );
}
