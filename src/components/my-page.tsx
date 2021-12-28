import React from 'react'
import Header from './header&dorwer/header'
import styled from 'styled-components'
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
  const sampleDrinks = ['Zone', 'Monster', 'Monster']
  const Drinks = sampleDrinks.reverse()

  const total = 0 + Drinks.length

  const sampleTimes = [2020, 3, 22]
  const result = sampleTimes.join('/')

  const sampleUserName = ['kotlin']

  return (
    <div>
      <Header />
      <Body>
        <UserName>{sampleUserName}</UserName>
        <Since>
          総数{total}本<br />
          {result}から社畜
        </Since>
        {/* <AddButton style={{ fontSize: 45 }} onClick={() => } /> */}
        <Container>
          {sampleDrinks.map((sampleDrink) =>
            sampleDrink === 'Monster' ? (
              <MonsterEnegy />
            ) : sampleDrink === 'Zone' ? (
              <Zone />
            ) : sampleDrink === 'Redbull' ? (
              <Redbull />
            ) : sampleDrink === 'CheletedLemon' ? (
              <CheletedLemon />
            ) : (
              <div />
            ),
          )}
        </Container>
      </Body>
    </div>
  )
}

export default MyPage
