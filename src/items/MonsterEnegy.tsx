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
const Monster_line_space = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  margin-top: 15px;
  height: 30px;
  width: 50%;
`

const Monster_line = styled.div`
  position: relative;
  height: 40px;
  width: 14%;
  background: lime;
`

function MonsterEnegy() {
  return (
    <Div>
      <Outline>
        <Down>
          <Top_surface>{/* <Mouth /> */}</Top_surface>
        </Down>
        <Side>
          <Monster_line_space>
            <Monster_line></Monster_line>
            <Monster_line></Monster_line>
            <Monster_line></Monster_line>
          </Monster_line_space>
        </Side>

        <Down_surface />
      </Outline>
    </Div>
  )
}

export default MonsterEnegy
