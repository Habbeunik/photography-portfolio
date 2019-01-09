import React from 'react';
import styled from 'styled-components';
// import MasonryLayout from 'react-masonry-layout';
import MasonryLayout from 'react-masonry-component';
import PropTypes from 'prop-types';

const photos = [
  {
    src:
      'https://images.pexels.com/photos/219552/pexels-photo-219552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799'
  },
  {
    src:
      'https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799'
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799'
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799'
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599'
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799'
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599'
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599'
  },
  {
    src: 'https://source.unsplash.com/XiDA78wAZVw/600x799'
  },
  {
    src: 'https://source.unsplash.com/x8xJpClTvR0/800x599'
  },
  {
    src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599'
  },
  {
    src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599'
  },
  {
    src: 'https://source.unsplash.com/A-fubu9QJxE/800x533'
  },
  {
    src: 'https://source.unsplash.com/A-fubu9QJxE/800x533'
  },
  {
    src: 'https://source.unsplash.com/5P91SF0zNsI/740x494'
  }
];

const PhotoContainer = styled.div`
  widht: 32%;
  height: auto;
  max-height: 500px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Photo = props => (
  <PhotoContainer className="photo-container">
    <Img src={props.src} />
  </PhotoContainer>
);

Photo.propTypes = {
  src: PropTypes.string.isRequired
};
export default function GalleryPage() {
  return (
    <div className="container">
      <MasonryLayout id="gallery">
        {photos.map((item, i) => (
          <Photo src={item.src} key={i} />
        ))}
      </MasonryLayout>
    </div>
  );
}
