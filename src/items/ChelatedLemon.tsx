import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px calc(12px + 1%) 0;
`

const Cap = styled.div`
  position: relative;
  display: flex;
  top: 5px;
  right: 0px;
  margin-left: 12px;
  height: 15px;
  width: 20px;
  background-color: #fdd000;
  z-index: 2;
  border-radius: 5px;
`

const TopSurface = styled.div`
  position: relative;
  display: flex;
  top: -20.5px;
  height: 25px;
  width: 44px;
  top: 0px;
  background-color: #198b86;
  border-radius: 100px;
`

const SecondBox = styled.div`
  position: relative;
  display: flex;
  top: -10px;
  height: 40px;
  width: 42px;
  background-color: white;
  border: solid 0.1px brown;
  z-index: 2;
`

const ButtomSurface = styled.div`
  position: relative;
  display: flex;
  top: -20px;
  height: 20px;
  width: 44px;
  background-color: #198b86;
  border-radius: 100px;
`

const CircleLemon = styled.div`
  position: relative;
  display: flex;
  top: 15px;
  left: 15px;
  height: 20px;
  width: 20px;
  background: #fdd000;
  border-radius: 100px;
`

const TopLemon = styled.div`
  display: flex;
  margin-left: 7px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #fdd000;
`

const ButtomLemon = styled.div`
  display: flex;
  margin-top: 13px;
  border-radius: 50%;
  border-left: solid 7px #fdd000;
`

const MonsterEnegy = () => {
  return (
    <Container>
      <Cap />
      <TopSurface />
      <SecondBox>
        <CircleLemon>
          <ButtomLemon />
          <TopLemon />
        </CircleLemon>
      </SecondBox>
      <ButtomSurface />
    </Container>
  )
}

export default MonsterEnegy
