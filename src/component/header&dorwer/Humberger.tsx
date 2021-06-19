import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const HumbergerButton = styled.button`
  position: absolute;
  width: 42px;
  height: 31px;
  right: 20px;
  top: 22px;
  z-index: 2;
  transition: 0.3s;
  border-radius: 20%;
  border: none;
  background-color: #101841;
`

const HumbergerBar = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 240px;
  height: 100vh;
  background: rgba(26, 42, 124, 0.4);
  filter: blur(0.5px);
  transition: 0.3s all;
  z-index: 1;
`

const HumbergerList = styled.div``

const HumbergerContent = styled.div`
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 70%;
  color: white;
  margin-top: 90px;
  list-style: none;
  text-align: center;
  padding: 5px;
  background-color: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`

const MarkerLine = styled.span`
  &:hover {
    background-size: 100%;
    color: rgba(255, 255, 255, 0.9);
    background: linear-gradient(transparent 85%, white 10%);
    font-weight: bold;
    transition: all 0.3s ease 0s;
  }
`

const LinkStyles = styled(Link)`
  color: white;
  text-decoration: none;
`

const Humberger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuFunction = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <HumbergerButton onClick={() => menuFunction()}></HumbergerButton>
      {isOpen ? (
        <HumbergerBar>
          <HumbergerList>
            <HumbergerContent>
              <MarkerLine>Post</MarkerLine>
            </HumbergerContent>
            <HumbergerContent>
              <LinkStyles to="/">
                <MarkerLine>Ranking</MarkerLine>
              </LinkStyles>
            </HumbergerContent>
            <HumbergerContent>
              <LinkStyles to="/mypage">
                <MarkerLine>My Profile</MarkerLine>
              </LinkStyles>
            </HumbergerContent>
            <HumbergerContent>
              <LinkStyles to="/logout">
                <MarkerLine>Logout</MarkerLine>
              </LinkStyles>
            </HumbergerContent>
          </HumbergerList>
        </HumbergerBar>
      ) : undefined}
    </>
  )
}

export default Humberger
