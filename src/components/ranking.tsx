import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import rankingData from '../documents/rankingDummyData.json'
import Header from './header&dorwer/header'
import Cookies from 'js-cookie'

import { ModalContext } from '../contexts/ModalContext'
import PostModal from './PostModal'

const Container = styled.div<{ isPostModalOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  overflow: ${(props) => (props.isPostModalOpen ? 'hidden' : 'scroll')};
  background: rgba(121, 167, 217, 0.15);
`

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: flex-start;
`

const CardContainer = styled.ul`
  position: flex;
  margin-top: 80px;
  flex-basis: 400px;
  height: auto;
`

const Space = styled.div`
  position: flex;
  flex-shrink: 2;
  width: 200px;
  height: 100vh; ;
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
  font: 700 13px 'M PLUS Rounded 1c';
`

const Name = styled(Link)<{ rank: number }>`
  padding: 0 8%;
  width: 85%;
  font: 28px 'M PLUS Rounded 1c';
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
    <ModalContext.Provider
      value={{
        isModalOpen: isPostModalOpen,
        setIsModalOpen: setIsPostModalOpen,
      }}
    >
      <Container isPostModalOpen={isPostModalOpen}>
        <Header />
        <Body>
          <Space />
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
          <Space />
        </Body>
        {isPostModalOpen && <PostModal />}
      </Container>
    </ModalContext.Provider>
  )
}

export default RankingPage
