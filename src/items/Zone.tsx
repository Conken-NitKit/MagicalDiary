import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 1% 0;
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
  top: -10px;
  border-radius: 50%;
  height: 20%;
  width: 100%;
  background: #7e7878;
`

const TopSurface = styled.div`
  background: #7e7878;
  margin-top: -16.18%;
`

const DownSurface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -5px;
  border-radius: 50%;
  height: 20%;
  width: 100%;
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
  margin-top: 9px;
  height: 25px;
  width: 25px;
  border-radius: 100px;
  border: solid 5px white;
  background-color: #333333;
`

const Point = styled.div`
  margin-top: 6px;
  margin-left: 18px;
  height: 5px;
  width: 8px;
  background-color: white;
  border: solid 6px #333333;
`

const Zone = () => {
  return (
    <Container>
      <Outline>
        <Down>
          <TopSurface />
        </Down>
        <Side>
          {/* ここまで共通 */}
          <Circle>
            <Point />
          </Circle>
        </Side>
        <DownSurface />
      </Outline>
    </Container>
  )
}

export default Zone
