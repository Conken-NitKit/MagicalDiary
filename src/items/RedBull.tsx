import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 1% 0;
`

const Outline = styled.div`
  height: 85px;
  width: 66px;
  background: #4977bc;
`

const Top = styled.div`
  position: relative;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 20%;
  width: 100%;
  background: #7e7878;
`

const TopSurface = styled.div`
  background: #7e7878;
  margin-top: -16%;
`

const DownSurface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -35px;
  border-radius: 50%;
  height: 20%;
  width: 100%;
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

const RedBull = () => {
  return (
    <Container>
      <Outline>
        <Top>
          <TopSurface />
        </Top>
        {/* ここまで共通 */}
        <Text>RedBull</Text>
        <TopWhiteTrapezoid />
        <WhiteTrapezoid />
        <DownSurface />
      </Outline>
    </Container>
  )
}

export default RedBull
