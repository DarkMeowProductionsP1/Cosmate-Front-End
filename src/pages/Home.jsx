import React from 'react'
import styled from 'styled-components'
import Background from '../components/Background'


const GridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`

const InnerContainer = styled.div`
  display: flex; 
  
  height: 200px;
  backdrop-filter: blur(15px);
  padding-left: 20px;
  padding-right: 20px;
  z-index: 999;
  border-radius: 10px;
  margin-top: 10%; 
  justify-content: center;
  
  h1 {
    font-family: 'notMyType';
    color: white;
  }
`

const Home = () => {
  return (
    <GridContainer>
      <Background />

      <InnerContainer>
        <h1>Testing Bro</h1>
      </InnerContainer>
    </GridContainer>
  )
}

export default Home
