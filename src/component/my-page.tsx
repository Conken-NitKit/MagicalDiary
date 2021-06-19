import React from 'react'
import styled from 'styled-components'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import AddIcon from '@material-ui/icons/Add'
import Redbull from '../items/RedBull'
import Zone from '../items/Zone'
import MonsterEnegy from '../items/MonsterEnegy'
import CheletedLemon from '../items/ChelatedLemon'

const Body = styled.body`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(121, 167, 217, 0.15);
  min-height: 100vh;
  width: 100vw;
`

const UserName = styled.text`
  position: absolute;
  top: 140px;
  left: 50vw; /*親要素を起点に左から50%*/
  transform: translateY(-50%) translateX(-50%); /*要素の大きさの半分ずつを戻す*/
  -webkit-transform: translateY(-50%) translateX(-50%);
  height: 40px;
  width: 600px;
  margin: auto;
  text-align: center;
  font-size: 40px;
  font-family: 'M PLUS Rounded 1c';
  color: #101841;
`

const RewriteButton = styled(BorderColorIcon)`
  position: absolute;
  color: #101841;
  top: 110px;
  right: 0px;
  margin-right: 40vw;
`

const AddButton = styled(AddIcon)`
  position: absolute;
  color: #101841;
  top: 90px;
  right: 0px;
  margin-right: 15vw;
`

const Since = styled.text`
  position: absolute;
  top: 185px;
  right: 25vw; /*親要素を起点に左から50%*/
  transform: translateY(-50%) translateX(-50%); /*要素の大きさの半分ずつを戻す*/
  -webkit-transform: translateY(-50%) translateX(-50%);
  height: 20px;
  width: 200px;
  margin: auto;
  text-align: center;
  font-size: 10px;
  color: #101841;
`
const MyPage = () => {
  return (
    <Body>
      <UserName>ユーザー名</UserName>
      <Since>2020年３月から社畜</Since>

      <RewriteButton style={{ fontSize: 25 }} />
      <AddButton style={{ fontSize: 45 }} />
    </Body>
  )
}

export default MyPage
