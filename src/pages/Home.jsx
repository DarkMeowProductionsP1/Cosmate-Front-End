import React from 'react'
import styled from 'styled-components'
import Background from '../components/Background'
import "../styles/App.css"
import { render } from "react-dom";
import StarsRating from 'stars-rating'
import { MessageFilled } from '@ant-design/icons';

import post1 from "../assets/girl.png";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const GridContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  margin-bottom: 50px;
`

const PostGridContainer = styled.div`
  display: flex;
`

const PostContainer1 = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 250px;
  }
`

const PostContainer2 = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: flex-end;
  

  h1 {
    font-family: "courier";
    font-size: 20px;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "courier";
    font-size: 20px;
    margin-left: 12px;
    margin-bottom: 10px;
    color: white;
    text-align: flex-start;
  }

  input {
    margin-left: 12px;
  }

`

const InnerContainer = styled.div`
  display: flex; 
  width: 500px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 999;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 10%; 
  justify-content: flex-start;

  h1 {
    color: white;
    margin-top: 10px;
  }
  
  
  h3 {
    font-family: 'kolker brush';
    font-size: 40px;
    margin-bottom: 5px;
    font-weight: 100;
    color: white;
    text-align: left;
  }
  
  p {
    font-family: 'notMyType';
    color: white;
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'courier';
  font-weight: 700;
  font-size: 40px;
  margin-top: 30px;
  color: white;
  text-align: center;
`

const ratingChanged = (newRating) => {
  console.log(newRating)
}

const Home = () => {
  return (
    <GridContainer>
      <Background />
      
      <GridContainer2>
        <InnerContainer>
          <Title>Your Feed</Title>
          <PostGridContainer>
            <PostContainer1>
              <h3>Welcome, Tristan</h3>
              <img src={post1} />
            </PostContainer1>
            <PostContainer2>
              <h1>Birds of a feather flock together</h1>
              <h2><MessageFilled /> Comment #1</h2>
              <h2><MessageFilled /> Comment #2</h2>
              <input 
                placeholder="Write your comment here"
              />
            </PostContainer2>
          </PostGridContainer>
            <StarsRating
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={'#ffd700'} 
            />
        </InnerContainer>

        <InnerContainer>
          <PostGridContainer>
            <PostContainer1>
              <h3>Welcome, Nathan</h3>
              <img src={post2} />
            </PostContainer1>
            <PostContainer2>
              <h1>Birds of a feather flock together</h1>
              <h2><MessageFilled /> Comment #1</h2>
              <h2><MessageFilled /> Comment #2</h2>
              <input 
                placeholder="Write your comment here"
              />
            </PostContainer2>
          </PostGridContainer>
            <StarsRating
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={'#ffd700'} 
            />
        </InnerContainer>

        <InnerContainer>
          <PostGridContainer>
            <PostContainer1>
              <h3>Welcome, Alice</h3>
              <img src={post3} />
            </PostContainer1>
            <PostContainer2>
              <h1>Birds of a feather flock together</h1>
              <h2><MessageFilled /> Comment #1</h2>
              <h2><MessageFilled /> Comment #2</h2>
              <input 
                placeholder="Write your comment here"
              />
            </PostContainer2>
          </PostGridContainer>
            <StarsRating
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={'#ffd700'} 
            />
          <br />
          <br />
        </InnerContainer>
      </GridContainer2>
    </GridContainer>
  )
}

export default Home
