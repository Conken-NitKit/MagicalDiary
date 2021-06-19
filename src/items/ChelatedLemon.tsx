import React from 'react'
import styled from 'styled-components'

const Cap = styled.div`
  position: relative;
  display: flex;
  top: 18px;
  left: 25px;
  height: 25px;
  width: 50px;
  background-color: #fdd000;
  z-index: 2;
  border-radius: 5px;
`

const TopSurface = styled.div`
  position: relative;
  display: flex;
  top: -7.5px;
  height: 25px;
  width: 100px;
  background-color: #198b86;
  border-radius: 100px;
`

const TopBox = styled.div`
  position: relative;
  display: flex;
  top: 25px;
  height: 20px;
  width: 100px;
  background-color: #198b86;
`

const SecondBox = styled.div`
  position: relative;
  display: flex;
  height: 90px;
  width: 98px;
  background-color: white;
  border: solid 0.1px brown;
`

const ThirdBox = styled.div`
  position: relative;
  display: flex;
  top: -25px;
  height: 12.5px;
  width: 100px;
  background-color: #198b86;
`

const ButtomSurface = styled.div`
  position: relative;
  display: flex;
  top: 0px;
  height: 25px;
  width: 100px;
  background-color: #198b86;
  border-radius: 100px;
`

const CircleLemon = styled.div`
  position: relative;
  display: flex;
  top: 35px;
  left: 40px;
  height: 43px;
  width: 44px;
  background: #fdd000;
  border-radius: 100px;
`

const TopLemon = styled.div`
  position: relative;
  display: flex;
  top: 0px;
  right: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 30px 20px 0;
  border-radius: 4px;
  border-color: transparent #fdd000 transparent transparent;
`

const ButtomLemon = styled.div`
  top: 0px;
  margin-top: 13px;
  right: 0px;
  width: 0;
  height: 0;
  border-radius: 4px;
  border-style: solid;
  border-width: 30px 0 0 20px;
  border-color: transparent transparent transparent #fdd000;
`

const Text = styled.div`
  position: relative;
  display: flex;
  top: 0px;
  margin-top: 10px;
  margin-left: 5px;
  left: -40px;
  font-size: 6px;
  font-weight: 300;
`

function MonsterEnegy() {
  return (
    <html>
      <Cap />
      <TopBox />
      <TopSurface />
      <SecondBox>
        <CircleLemon>
          <ButtomLemon />
          <TopLemon />
        </CircleLemon>
        <Text>
          キレート
          <br />
          レモン
        </Text>
      </SecondBox>
      <ButtomSurface />
      <ThirdBox />
    </html>
  )
}

export default MonsterEnegy
