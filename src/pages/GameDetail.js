import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GameDetailPage = () => {
  const gameData = useLoaderData();

  return (
    <>
      <h1>{gameData.id}</h1>
    </>
  );
};

export default GameDetailPage;

export async function loader({ params }) {
  const URL = `https://api.rawg.io/api/games/${params.gameId}?key=7e0d6fe87ba64006a05f7a92d338b448`;
  return await fetch(URL).then((response) => response.json());
}
