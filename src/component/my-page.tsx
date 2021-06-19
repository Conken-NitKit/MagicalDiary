import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import Redbull from '../items/RedBull'
import Zone from '../items/Zone'
import MonsterEnegy from '../items/MonsterEnegy'
import CheletedLemon from '../items/ChelatedLemon'

const Body = styled.body`
  position: relative;
  top: 0px;
  left: 0px;
  background-color: rgba(121, 167, 217, 0.15);
  height: 100%;
  width: 100vw;
  margin-left: 0px;
`

const UserName = styled.p`
  text-align: center;
  font-size: 40px;
  margin: 0;
  padding-top: 60px;
  font-family: 'M PLUS Rounded 1c';
  color: #101841;
`

const AddButton = styled(AddIcon)`
  margin-left: 80vw;
  color: #101841;
`

const Since = styled.p`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  right: 0;
  color: #555555;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: space-around;

  align-self: flex-end;
  flex-flow: row wrap-reverse;
`

const MyPage = () => {
  return (
    <Body>
      <UserName>ユーザー名</UserName>
      <Since>2020年３月から社畜</Since>
      <AddButton style={{ fontSize: 45 }} />
      <Container>
        <MonsterEnegy />
        <Zone />
        <CheletedLemon />
        <Redbull />
        <MonsterEnegy />
        <Zone />
        <CheletedLemon />
        <Redbull />
        <MonsterEnegy />
        <Zone />
        <CheletedLemon />
        <Redbull />
      </Container>
    </Body>
  )
}

export default MyPage
