import React from 'react';
import { Body, Headline } from '../components/typography';

export default function AboutPage() {
  return (
    <div className="container">
      <div className="aboutBox">
        <div className="about-imageBox">
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Photographer"
          />
        </div>
        <div className="about-textbox">
          <Headline className="about-title">About Me</Headline>
          <Body className="about-text">
            Growing up in the Colorado Rockies, my love of nature long preceded
            my love of photography. Being part of a family that appreciated and
            explored the outdoors helped me learn to appreciate and enjoy the
            landscape. Today I spend as much time as I can in nature hiking,
            backpacking, and snowboarding. I enjoy traveling to new and exotic
            locations, especially to new mountain ranges. I would rather visit a
            jagged peak way off the map than struggle with crowds in a city any
            day. For me, photography is really just a by-product of spending so
            much time in nature. I think that spending time in the wilderness is
            just about the best thing one can do.
          </Body>
          <Body className="about-text">Email: habbeyunik@gmail.com</Body>
          <Body className="about-text">Social Media:</Body>
          <div className="contact-linkContainer">
            <a href="https://www.facebook.com/kumapayi.abbey" target="#">
              <Body className="contact-link facebook">Facebook</Body>
            </a>
            <a href="https://www.twitter.com/habbeyunik" target="#">
              <Body className="contact-link twitter">Twitter</Body>
            </a>
            <a href="https://www.linkedin.com/kumapayi.abbey" target="#">
              <Body className="contact-link linkedIn">LinkedIn</Body>
            </a>
            <a href="https://www.instagram.com/evergreenfella" target="#">
              <Body className="contact-link instagram">Instagram</Body>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
