import React from 'react';
import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';

const Loading = () => (
  <Loader active inline="centered" />
  // <Segment>
  //   <Dimmer active inverted>
  //     <Loader inline="centered" size="large">Loading</Loader>
  //   </Dimmer>

  //   <Image src="/images/wireframe/paragraph.png" />
  // </Segment>
);

export default Loading;
