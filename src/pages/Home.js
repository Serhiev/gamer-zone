import React from 'react';
import {useLoaderData} from "react-router-dom";

import GameList from "../components/GameList";

const HomePage = () => {
    const games = useLoaderData();

    return (
            <GameList games={games}/>
    );
};

export default HomePage;

export async function loader() {
    const URL = 'https://api.rawg.io/api/games?key=7e0d6fe87ba64006a05f7a92d338b448';
    const response = await fetch(URL)

    if (!response.ok) {
        // setError('Fetching events failed.');
    } else {
        const resData = await response.json();
        return resData.results;
    }
}