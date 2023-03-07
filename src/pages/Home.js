import React, {useEffect, useState} from 'react';

import GameList from "../components/GameList";

const URL = 'https://api.rawg.io/api/games?key=7e0d6fe87ba64006a05f7a92d338b448';

const HomePage = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL).then(response => response.json())
            setGames(response.results)
        }
        fetchData();
    }, [])

    return (
        <div>
            <GameList games={games}/>
        </div>
    );
};

export default HomePage;