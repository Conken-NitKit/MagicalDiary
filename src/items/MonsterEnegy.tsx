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
const Monster_line_space = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 60%;
`

const Monster_line = styled.div`
  position: relative;
  height: 60%;
  width: 10%;
  background: lime;
`

function MonsterEnegy() {
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

            <Monster_line_space>
              <Monster_line></Monster_line>
              <Monster_line></Monster_line>
              <Monster_line></Monster_line>
            </Monster_line_space>
          </Side>

          <Down_surface />
        </Outline>
      </Body>
    </div>
  )
}

export default MonsterEnegy
