import React from 'react';
import styled from 'styled-components';
import ImageThumbnail from '../components/image-thumbnail';

const ImageBoard = styled.div`
  width: 88%;
  height: 70vh;
  background: #ccc;
  margin: 0px 6%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const ImageBoardImage = styled.img`
  margin: auto;
  height: 100%;
  width: auto;
  display: block;
`;

export default function Home() {
  return (
    <div className="body">
      <ImageBoard>
        <ImageBoardImage src="https://images.pexels.com/photos/219552/pexels-photo-219552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </ImageBoard>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}
      >
        <ImageThumbnail image="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <ImageThumbnail image="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <ImageThumbnail image="https://images.pexels.com/photos/417040/pexels-photo-417040.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <ImageThumbnail image="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <ImageThumbnail image="https://images.pexels.com/photos/545008/pexels-photo-545008.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <ImageThumbnail image="https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <ImageThumbnail
          isActive={true}
          image="https://images.pexels.com/photos/219552/pexels-photo-219552.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <ImageThumbnail image="https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </div>
    </div>
  );
}