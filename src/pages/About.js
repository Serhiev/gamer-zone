import React from 'react';

import { Alert, Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          <br />
          example text is going to run a bit longer so that you can see how
          <br />
          spacing within an alert works with this kind of content.
        </p>
      </Alert>
    </Container>
  );
};

export default AboutPage;
