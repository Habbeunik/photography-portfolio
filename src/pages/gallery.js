import React from 'react';
import MasonryLayout from 'react-masonry-component';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageModal from '../components/view-image-modal';
import { Switch, Route } from 'react-router-dom';
import ImageLoader from '../components/image-loader';

export const photos = [
  {
    src:
      'https://images.pexels.com/photos/1162540/pexels-photo-1162540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1760962/pexels-photo-1760962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/683241/pexels-photo-683241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1777792/pexels-photo-1777792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1750565/pexels-photo-1750565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1362478/pexels-photo-1362478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    src:
      'https://images.pexels.com/photos/1371176/pexels-photo-1371176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/1389102/pexels-photo-1389102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/1751196/pexels-photo-1751196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg?cs=srgb&dl=adorable-animal-beagle-1741235.jpg&fm=jpg'
  },
  {
    src:
      'https://images.pexels.com/photos/67386/pexels-photo-67386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/219552/pexels-photo-219552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    src:
      'https://images.pexels.com/photos/1038041/pexels-photo-1038041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    src:
      'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?cs=srgb&dl=adventure-beautiful-daylight-325807.jpg&fm=jpg'
  },
  {
    src:
      'https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
    <ImageLoader image={props.src} visibleByDefault={props.index < 7} />
    {/*visible by default for first size images*/}
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
