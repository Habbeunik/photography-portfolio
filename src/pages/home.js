import React from 'react';
import { H3, Subheading } from '../components/typography';

export default class Home extends React.Component {
  state = {
    images: [
      'https://images.pexels.com/photos/1371176/pexels-photo-1371176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1389102/pexels-photo-1389102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1751196/pexels-photo-1751196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg?cs=srgb&dl=adorable-animal-beagle-1741235.jpg&fm=jpg',
      'https://images.pexels.com/photos/67386/pexels-photo-67386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1038041/pexels-photo-1038041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?cs=srgb&dl=adventure-beautiful-daylight-325807.jpg&fm=jpg'
    ],
    currentImageIndex: 0
  };

  setImage = index => {
    this.setState({ currentImageIndex: index });
  };

  manageImageChange = () => {
    const { currentImageIndex, images } = this.state;
    if (currentImageIndex < images.length - 1) {
      this.setImage(currentImageIndex + 1);
    } else {
      this.setImage(0);
    }
  };

  getCurrentImage = () => {
    return this.state.images[this.state.currentImageIndex];
  };
  componentDidMount = () => {
    this.interval = setInterval(this.manageImageChange, 8000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="body">
        <div
          className={'image-board'}
          style={{
            background: '#f2f2f2',
            backgroundImage: `url(${this.getCurrentImage()})`
          }}
        >
          <div className="introduction-textContainer">
            <H3 className="introduction-title">
              Kumapayi <span>Habbey</span>
            </H3>
            <Subheading>I&apos;m a Photographer</Subheading>
          </div>
        </div>
      </div>
    );
  }
}
