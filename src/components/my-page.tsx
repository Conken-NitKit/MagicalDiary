import React, { useState } from 'react'
import Header from './header&dorwer/header'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import Redbull from '../items/RedBull'
import Zone from '../items/Zone'
import MonsterEnegy from '../items/MonsterEnegy'
import CheletedLemon from '../items/ChelatedLemon'
import ModalContext from 'contexts/ModalContext'
import PostModal from './PostModal'

const Body = styled.div`
  background-color: rgba(121, 167, 217, 0.15);
  min-height: 100vh;
  width: 100vw;
`

const Name = styled.p`
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
  const Drinks = ['Zone', 'Monster', 'Monster']
  const setDrinks = Drinks.reverse()

  const sampleTimes = [2020, 3, 22]
  const result = sampleTimes.join('/')

  const UserName = ['kotlin']

  const [isPostModalOpen, setIsPostModalOpen] = useState<boolean>(false)

  return (
    <div>
      <Header />
      <Body>
        <Name>{UserName}</Name>
        <Since>
          総数{setDrinks.length}本<br />
          {result}から社畜
        </Since>
        <AddButton
          style={{ fontSize: 45 }}
          onClick={() => {
            setIsPostModalOpen(true)
          }}
        />
        <Container>
          {Drinks.map((Drink) =>
            Drink === 'Monster' ? (
              <MonsterEnegy />
            ) : Drink === 'Zone' ? (
              <Zone />
            ) : Drink === 'Redbull' ? (
              <Redbull />
            ) : Drink === 'CheletedLemon' ? (
              <CheletedLemon />
            ) : (
              <div />
            ),
          )}
        </Container>
        <ModalContext.Provider
          value={{
            isModalOpen: isPostModalOpen,
            setIsModalOpen: setIsPostModalOpen,
          }}
        >
          {isPostModalOpen && <PostModal />}
        </ModalContext.Provider>
      </Body>
    </div>
  )
}

export default MyPage
