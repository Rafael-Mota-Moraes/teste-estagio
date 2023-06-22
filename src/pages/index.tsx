import Error from "@/components/Error";
import GamesContainer from "@/components/GamesContainer";
import Loading from "@/components/Loading";
import { useGameRequest } from "@/hooks/useGameRequest";
import Head from "next/head";

export default function Home() {
  const { games, error, setError, loading, errorMessage } = useGameRequest();

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
