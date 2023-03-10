import React from 'react';

import GameItem from './GameItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../styles/helpers.module.css';

const GameList = ({ gameList }) => {
  return (
    <Container>
      <h1 className={styles.centerTitle}>List of games</h1>
      <Row xs={1} md={3} className='g-4'>
        {gameList.map((game) => (
          <Col key={game.id}>
            <GameItem game={game} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameList;
