import React from 'react';
import { H3, Subheading } from '../components/typography';

export default class Home extends React.Component {
  state = {
    images: [
      'https://images.pexels.com/photos/1162540/pexels-photo-1162540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1760962/pexels-photo-1760962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/683241/pexels-photo-683241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1777792/pexels-photo-1777792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1750565/pexels-photo-1750565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1362478/pexels-photo-1362478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
