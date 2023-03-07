import React from 'react';

import CardItem from './UI/CardItem';

const GameItem = (props) => {
  let rating = `⭐ Rating: ${props.game.metacritic} / 100 ⭐`;
  let released = `⏱ Released: ${props.game.released} ⏱`;

  return (
    <CardItem
      image={props.game.background_image}
      title={props.game.name}
      text1={rating}
      text2={released}
      buttonText="More..."
    />
  );
};

export default GameItem;
