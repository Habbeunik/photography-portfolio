import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import 'react-lazy-load-image-component/src/effects/blur.css';

//image tag should be used as image props
export default function ImageLoader({ image, visibleByDefault }) {
  return (
    <LazyLoadImage
      alt={'alt'}
      //   height={300}
      src={image} // use normal <img> attributes as props
      //   width={300}
      effect="blur"
      threshold={50}
      visibleByDefault={visibleByDefault}
    />
  );
}

ImageLoader.propTypes = {
  image: PropTypes.string,
  visibleByDefault: PropTypes.bool
};
