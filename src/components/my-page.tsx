import React from 'react'
import Header from './header&dorwer/header'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import Redbull from '../items/RedBull'
import Zone from '../items/Zone'
import MonsterEnegy from '../items/MonsterEnegy'
import CheletedLemon from '../items/ChelatedLemon'

const Body = styled.div`
  background-color: rgba(121, 167, 217, 0.15);
  min-height: 100vh;
  width: 100vw;
`

const UserName = styled.p`
  text-align: center;
  font-size: 40px;
  margin: 0;
  padding-top: 140px;
  font-family: 'M PLUS Rounded 1c';
  color: #101841;
`

const AddButton = styled(AddIcon)`
  margin-left: 80vw;
  color: #101841;
`

const Since = styled.p`
  text-align: center;
  margin-top: 5px;
  color: #555555;
  font-size: 14px;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: space-around;
  align-self: flex-end;
  flex-flow: row wrap-reverse;
  margin-top: 70px;
`

const MyPage = () => {
  return (
    <div>
      <Header />
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
    </div>
  )
}

export default MyPage
