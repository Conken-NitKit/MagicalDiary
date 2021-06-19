import { Link } from 'react-router-dom'
import styled from 'styled-components'
import rankingData from '../documents/rankingDummyData.json'
import Header from './header&dorwer/header'

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: rgba(121, 167, 217, 0.15);
`

const Body = styled.body`
  display: flex;

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
  return (
    <Container>
      <Header />
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
    </Container>
  )
}

export default RankingPage
