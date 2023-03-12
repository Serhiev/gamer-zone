import React, {useEffect, useState} from 'react';

import GameList from "../components/GameList";

const HomePage = () => {
    const [currPage, setCurrPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [gameList, setGameList] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const KEY = '7e0d6fe87ba64006a05f7a92d338b448';
            const URL = `https://api.rawg.io/api/games?key=${KEY}&page=${currPage}`;

            const response = await fetch(URL).then(response => response.json());


            setGameList([...gameList, ...response.results])
            setCurrPage(prevState => prevState + 1)
            setFetching(false);
        };

        if (fetching) {
            fetchData();
        }
    })

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        let heightPagination = e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight);

        if (heightPagination < 400) {
            setFetching(true);
        }
    }

    return (
        <GameList gameList={gameList}/>
    );
};

export default HomePage;