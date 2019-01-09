import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

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

export default function ImageModal(props) {
  const { image, onClose, isOpen, onNext, onPrevious } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          width: '75%',
          height: '90vh',
          top: '5vh',
          zIndex: 5,
          overflow: 'visible',
          left: '12.5%',
          boxSizing: 'border-box'
        },
        overlay: { zIndex: '4', backgroundColor: 'rgba(103, 100, 100, 0.75)' }
      }}
    >
      <div
        style={{
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <img
          style={{ width: 'auto', height: ' 100%' }}
          src={photos[image].src}
          alt={image}
        />
      </div>
      {parseInt(image) > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '45vh',
            left: '-75px',
            outline: 'none',
            cursor: 'pointer'
          }}
          role="button"
          onClick={onPrevious}
          onKeyPress={e => {
            if (e.keyCode == 37) onPrevious();
          }}
          tabIndex={0}
        >
          <ChevronLeft size={80} color={'#00000096'} />
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: '45vh',
          right: '-75px',
          outline: 'none',
          cursor: 'pointer'
        }}
        onClick={onNext}
        onKeyDown={e => {
          if (e.keyCode === 39) onNext();
        }}
        role="button"
        tabIndex={0}
      >
        <ChevronRight size={80} color={'#00000096'} />
      </div>
    </Modal>
  );
}

ImageModal.propTypes = {
  image: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  isOpen: PropTypes.bool
};
