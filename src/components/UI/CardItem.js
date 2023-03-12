import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/helpers.module.css';

const CardItem = (props) => {
  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Header as='h5' className={styles.centerHeader}>
        {props.title}
      </Card.Header>
      <Card.Img className={styles.imgFullSize} variant='top' src={props.image} />
      <Card.Body>
        <Card.Text>
          {props.text1}
          <br />
          {props.text2}
        </Card.Text>
        <Button as={NavLink} to={`/games/${props.id}`} variant='primary'>
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
