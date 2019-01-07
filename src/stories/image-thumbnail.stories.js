import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from '../components/image-thumbnail';

storiesOf('Image Thumbnail', module)
  .add('Default', () => (
    <React.Fragment>
      <Thumbnail
        image={
          'https://sslc.ulximg.com/image/500x500crop/artist/1403030645_e124aa898bafef4a553ec9246f0dfc91.jpg/c50b2e457e60b8231e38011c3f9f7270/1403030645_teyanataylor_81.jpg'
        }
      />
      <Thumbnail
        image={
          'https://thatgrapejuice.net/wp-content/uploads/2017/10/teyana-taylor-hit-floor-thatgrapejuice-600x455.jpg'
        }
      />
    </React.Fragment>
  ))
  .add('Thumbnail is Active', () => (
    <React.Fragment>
      <Thumbnail
        image={
          'https://sslc.ulximg.com/image/500x500crop/artist/1403030645_e124aa898bafef4a553ec9246f0dfc91.jpg/c50b2e457e60b8231e38011c3f9f7270/1403030645_teyanataylor_81.jpg'
        }
        isActive={true}
      />
      <Thumbnail
        image={
          'https://thatgrapejuice.net/wp-content/uploads/2017/10/teyana-taylor-hit-floor-thatgrapejuice-600x455.jpg'
        }
        isActive={true}
      />
    </React.Fragment>
  ));
