import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 1% 0;
`

const Outline = styled.div`
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

const TopSurface = styled.div`
  background: #7e7878;
  margin-top: -16.18%;
`

const DownSurface = styled.div`
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
const MonsterLineSpace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  height: 30px;
  width: 50%;
`

const MonsterLine = styled.div`
  height: 40px;
  width: 14%;
  background: lime;
`

const MonsterEnegy = () => {
  return (
    <Container>
      <Outline>
        <Down>
          <TopSurface />
        </Down>
        <Side>
          <MonsterLineSpace>
            <MonsterLine />
            <MonsterLine />
            <MonsterLine />
          </MonsterLineSpace>
        </Side>
        <DownSurface />
      </Outline>
    </Container>
  )
}

export default MonsterEnegy
