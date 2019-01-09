import React from 'react';
import MasonryLayout from 'react-masonry-component';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageModal from '../components/view-image-modal';
import { Switch, Route } from 'react-router-dom';

export const photos = [
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

const Photo = props => (
  <div className="photo-container">
    <Link to={`/gallery/${props.index}`}>
      <div className={'photo-overlay'} />
    </Link>
    <img src={props.src} alt={props.src} />
  </div>
);

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number
};
export default function GalleryPage(props) {
  const { history } = props;
  return (
    <div className="container" style={{ paddingRight: '4%' }}>
      <MasonryLayout id="gallery">
        {photos.map((item, i) => (
          <Photo src={item.src} key={i} index={i} />
        ))}
      </MasonryLayout>
      <Switch>
        <Route
          path="/gallery/:index"
          render={routeProps => (
            <ImageModal
              isOpen={true}
              image={routeProps.match.params.index}
              onClose={() => history.push('/gallery')}
              onNext={() =>
                history.push(
                  `/gallery/${parseInt(routeProps.match.params.index) + 1}`
                )
              }
              onPrevious={() =>
                history.push(
                  `/gallery/${parseInt(routeProps.match.params.index) - 1}`
                )
              }
            />
          )}
        />
      </Switch>
    </div>
  );
}

GalleryPage.propTypes = {
  history: PropTypes.any
};
