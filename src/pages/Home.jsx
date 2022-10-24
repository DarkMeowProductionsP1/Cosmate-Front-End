import React from 'react'
import styled from 'styled-components'
import Background from '../components/Background'
import "../styles/App.css"

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`

const InnerContainer = styled.div`
  display: flex; 
  width: 500px;
  height: 400px;
  backdrop-filter: blur(20px);
  padding-left: 20px;
  padding-right: 20px;
  z-index: 999;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 10%; 
  justify-content: flex-start;
  
  h2 {
    font-family: 'notMyType';
    margin-top: 30px;
    color: white;
    text-align: center;
  }
  
  h3 {
    font-family: 'notMyType';
    color: white;
    text-align: center;
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
  font-size: 50px;
  margin-top: 30px;
  color: white;
  text-align: center;
`

const Home = () => {
  return (
    <GridContainer>
      <Background />

      <InnerContainer>
        <Title>THIS IS A TITLE</Title>
        <h2>This is an h1 Tag</h2>
        <h3>This is an h2 Tag</h3>
        <p>This is a p Tag</p>

      </InnerContainer>
    </GridContainer>
  )
}

export default Home
