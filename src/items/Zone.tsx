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
  top: -10px;
  background: #7e7878;
`

const Top_surface = styled.div`
  background: #7e7878;
  margin-top: -16.18%;
`

const Down_surface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  height: 20%;
  width: 100%;
  top: -5px;
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
  margin-top: 9px;
  height: 25px;
  width: 25px;
  border-radius: 100px;
  border: solid 5px white;
  background-color: #333333;
`

const Point = styled.div`
  margin-top: 6px;
  margin-left: 24px;
  height: 5px;
  width: 8px;
  background-color: white;
  border: solid 6px #333333;
`

function Zone() {
  return (
    <Div>
      <Outline>
        <Down>
          <Top_surface></Top_surface>
        </Down>
        <Side>
          {/* ここまで共通 */}
          <Circle>
            <Point></Point>
          </Circle>
        </Side>
        <Down_surface />
      </Outline>
    </Div>
  )
}

export default Zone
