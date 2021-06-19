import React from 'react'
import styled from 'styled-components'

const Body = styled.body`
  position: relative;
  top: 16.18px;
  height: 165.8px;
  width: 100px;
  margin-top: 0px;
  background: #333333;
`

const Outline = styled.div`
  position: relative;
  top: -30px;
  height: 162.8px;
  width: 100px;
  background: #333333;
`

const Down = styled.div`
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
  background: #333333;
  margin-top: -32.36%;
`

const Side = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Circle = styled.div`
  top: 0px;
  right: 0px;
  margin-top: 40px;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  border: solid 8px white;
  background-color: #333333;
`

const Point = styled.div`
  margin-top: 9px;
  margin-left: 30px;
  height: 8px;
  width: 15px;
  background-color: white;
  border: solid 9px #333333;
`

function Zone() {
  return (
    <div>
      <Body>
        <Outline>
          <Down>
            <Top_surface>
              <Mouth />
            </Top_surface>
          </Down>
          <Side>
            {/* ここまで共通 */}
            <Circle>
              <Point></Point>
            </Circle>
          </Side>

          <Down_surface />
        </Outline>
      </Body>
    </div>
  )
}

export default Zone
