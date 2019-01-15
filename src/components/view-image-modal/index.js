import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { photos } from '../../pages/gallery';
import viewport from '../../utils/viewport';
import styles from './modal.scss';

const mobileBreakPoint = 500;

const getModalContentStyle = windowWidth => {
  console.log('window width', windowWidth);
  console.log('called get modal style function');
  if (windowWidth <= mobileBreakPoint) {
    return {
      width: '90%',
      height: '80vh',
      top: '10vh',
      zIndex: 5,
      overflow: 'visible',
      left: '5%',
      boxSizing: 'border-box'
    };
  }
  return {
    width: '75%',
    height: '90vh',
    top: '5vh',
    zIndex: 5,
    overflow: 'visible',
    left: '12.5%',
    boxSizing: 'border-box'
  };
};

export default class ImageModal extends React.Component {
  state = {
    modalContentStyle: {}
  };
  componentDidMount() {
    const { width: currentWindowWidth } = viewport();
    this.setState({
      modalContentStyle: getModalContentStyle(currentWindowWidth)
    });
  }
  render() {
    const { image, onClose, isOpen, onNext, onPrevious } = this.props;
    console.log('modal content style', this.state.modalContentStyle);
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          content: this.state.modalContentStyle,
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
            className={styles.modalImg}
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
}

ImageModal.propTypes = {
  image: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  isOpen: PropTypes.bool
};
