import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import rankingData from '../documents/rankingDummyData.json'
import Header from './header&dorwer/Header'

import { ModalContext } from '../contexts/ModalContext'
import PostModal from './PostModal'

const Container = styled.div`
  height: 100%;
  width: 100%;

  background: rgba(121, 167, 217, 0.15);
`

const Body = styled.body`
  display: flex;

  margin: 0;

  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`

const CardContainer = styled.ul`
  margin: 0;

  padding: 0;

  height: 80%;
  width: 25%;

  overflow: scroll;

  list-style: none;
`

const Card = styled.li`
  display: flex;

  align-items: center;

  margin: 4% 0;

  border-bottom: 1px solid rgba(0, 76, 131, 1);

  height: 10%;
  width: 100%;
`

const Rank = styled.p`
  margin: 0;
  width: 15%;

  font: 700 1.25vw 'M PLUS Rounded 1c';
`

const Name = styled(Link)<{ rank: number }>`
  border-radius: 0.3477222vw;

  padding: 0 8%;

  width: 85%;

  font: 2vw 'M PLUS Rounded 1c';

  color: black;

  text-decoration: none;

  background: ${(props) =>
    props.rank === 0
      ? 'linear-gradient(to left, transparent, rgba(255, 247, 153, 1) 100%) bottom / 100% 15% no-repeat'
      : props.rank === 1
      ? 'linear-gradient(to left, transparent, silver 100%) bottom / 100% 15% no-repeat'
      : props.rank === 2
      ? 'linear-gradient(to left, transparent, rgba(228, 198, 166, 1) 100%) bottom / 100% 15% no-repeat'
      : 'none'};
`

export const RankingPage = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)

  return (
    <Container>
      <ModalContext.Provider
        value={{
          isModalOpen: isPostModalOpen,
          setIsModalOpen: setIsPostModalOpen,
        }}
      >
        <Header />
      </ModalContext.Provider>

      <Body>
        <CardContainer>
          {rankingData.map(({ name }, index) => (
            <Card>
              <Rank>{index + 1}位</Rank>
              <Name to="/" rank={index}>
                {name}
              </Name>
            </Card>
          ))}
        </CardContainer>
      </Body>
      {/* <PostModal /> */}
    </Container>
  )
}

export default RankingPage
