import React from 'react'
import styled from 'styled-components'

const Body = styled.body`
  position: relative;
  display: flex;
  top: 16.18px;
  height: 175px;
  width: 100px;
  margin-top: 100px;
  background: #4977bc;
`

const Outline = styled.div`
  position: relative;
  top: -30px;
  height: 162.8px;
  width: 100px;
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
  top: -16px;
  background: #7e7878;
`

const Top_surface = styled.div`
  background: #7e7878;
  margin-top: -16.18%;
`

const Mouth = styled.div`
  border-top: 8.09px solid dimgray;
  border-left: 5px solid dimgray;
  border-right: 5px solid transparent;
  border-bottom: 8.18px solid transparent;
  height: 0;
  width: 0;
`

const Down_surface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  height: 20%;
  width: 100%;
  top: 18.5px;
  background: #4977bc;
  margin-top: -32.36%;
`

const BlueTrapezoid = styled.div`
  display: flex;
  position: relative;
  top: 0px;
  right: 0px;
  margin-top: 70px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100px 100px;
  border-color: transparent transparent #4977bc transparent;
`

const WhiteTrapezoid = styled.div`
  display: flex;
  position: relative;
  top: -5px;
  right: 222px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 105px 68px 0 0;
  border-color: white transparent transparent transparent;
`

const TopWhiteTrapezoid = styled.div`
  display: flex;
  position: relative;
  top: -100px;
  right: 122px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100px 40px;
  border-color: transparent transparent white transparent;
`

const Text = styled.div`
  display: flex;
  position: relative;
  top: -18px;
  right: 89px;
  font-size: 20px;
  font-weight: 600;
  height: 25px;
  width: 100px;
  color: red;
  z-index: 2;
`

function RedBull() {
  return (
    <html>
      <Body>
        <Outline>
          <Top>
            <Top_surface>
              <Mouth />
            </Top_surface>
          </Top>
          {/* ここまで共通 */}
          <BlueTrapezoid>
            <Text>RedBull</Text>
            <TopWhiteTrapezoid />
            <WhiteTrapezoid />
          </BlueTrapezoid>
          <Down_surface />
        </Outline>
      </Body>
    </html>
  )
}

export default RedBull
