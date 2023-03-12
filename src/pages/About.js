import React from 'react';

import { Alert, Container } from 'react-bootstrap';

import classes from '../styles/helpers.module.css';

const AboutPage = () => {
  return (
    <Container>
      <Alert variant='success'>
        <Alert.Heading className={classes.centerHeader}>Hey, nice to see you</Alert.Heading>
        <p className={classes.centerTitle}>
          Aww yeah, you successfully read this important alert message. This
          <br />
          resource is made for tracking games, reviews, prices, platform
          <br />
          availability and more interesting content.
        </p>
      </Alert>
    </Container>
  );
};

export default AboutPage;
