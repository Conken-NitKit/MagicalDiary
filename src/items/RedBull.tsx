import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 20px;
`

const Outline = styled.div`
  position: relative;
  top: 0px;
  height: 85px;
  width: 66px;
  background: #4977bc;
`

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  height: 20%;
  width: 100%;
  top: -10px;
  background: #7e7878;
`

const Top_surface = styled.div`
  background: #7e7878;
  margin-top: -16%;
`

const Down_surface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  height: 20%;
  width: 100%;
  top: -35px;
  background: #4977bc;
  margin-top: -32.36%;
`

const WhiteTrapezoid = styled.div`
  display: flex;
  position: relative;
  top: -47px;
  right: 0px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 30px 30px 0 0;
  border-color: white transparent transparent transparent;
  z-index: 2;
`

const TopWhiteTrapezoid = styled.div`
  display: flex;
  position: relative;
  top: -42px;
  right: 0px;
  margin-left: 24px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 60px 42px;
  border-color: transparent transparent white transparent;
`

const Text = styled.div`
  display: flex;
  position: relative;
  top: 20px;
  right: -6px;
  font-size: 13px;
  font-weight: 600;
  height: 25px;
  width: 100px;
  color: red;
  z-index: 2;
`

function RedBull() {
  return (
    <Div>
      <Outline>
        <Top>
          <Top_surface></Top_surface>
        </Top>
        {/* ここまで共通 */}
        <Text>RedBull</Text>
        <TopWhiteTrapezoid />
        <WhiteTrapezoid />
        <Down_surface />
      </Outline>
    </Div>
  )
}

export default RedBull
