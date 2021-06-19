import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-left: calc(12px + 1%);
  margin-right: calc(12px + 1%);
  margin-top: 20px;
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
  position: relative;
  display: flex;
  top: 0px;
  left: 7px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7px 7px 0;
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
  border-width: 7px 0 0 7px;
  border-color: transparent transparent transparent #fdd000;
`

function MonsterEnegy() {
  return (
    <Div>
      <Cap />
      <TopSurface />
      <SecondBox>
        <CircleLemon>
          <ButtomLemon />
          <TopLemon />
        </CircleLemon>
      </SecondBox>
      <ButtomSurface />
    </Div>
  )
}

export default MonsterEnegy
