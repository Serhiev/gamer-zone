import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';

import GameList from '../components/GameList';

const HomePage = () => {
  const [currPage, setCurrPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [gameList, setGameList] = useState([]);

  const releaseDateRedux = useSelector((state) => state.filter.releaseDate);
  const selectedSortRedux = useSelector((state) => state.filter.orderBy);
  const orderTypeRedux = useSelector((state) => state.filter.orderType);

  useEffect(() => {
    setGameList([]);
    setCurrPage(1);
    setFetching(true);
  }, [releaseDateRedux, selectedSortRedux, orderTypeRedux]);

  useEffect(() => {
    const fetchData = async () => {
      const KEY = '7e0d6fe87ba64006a05f7a92d338b448';
      const URL = `https://rawg.io/api/games?
ordering=${orderTypeRedux}${selectedSortRedux}
&dates=${releaseDateRedux}-01-01,${releaseDateRedux}-12-31
&page=${currPage}
&page_size=10
&key=${KEY}`;

      const response = await fetch(URL).then((response) => response.json());
      setGameList([...gameList, ...response.results]);
      setCurrPage((prevState) => prevState + 1);
      setFetching(false);
    };

    if (fetching) {
      fetchData();
    }
  }, [fetching]);

  useEffect(() => {
    const scrollHandler = (e) => {
      let heightPagination =
        e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight);

      if (heightPagination < 400) {
        setFetching(true);
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Container>
      <GameList gameList={gameList} />
    </Container>
  );
};

export default HomePage;
