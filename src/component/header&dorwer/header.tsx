import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import styled from 'styled-components'
import Humberger from './Humberger'
import { withStyles } from '@material-ui/styles'

const HeaderBar = styled(AppBar)`
  height: 80px;
`
const HeaderTool = styled(Toolbar)`
  background-color: white;
  height: 80px;
`
const TitleButton = styled.button`
  font-size: 40px;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-family: 'Port Lligat Sans', sans-serif;
  border: none;
  background: none;
`

const Header: React.VFC = () => {
  return (
    <HeaderBar>
      <HeaderTool>
        <TitleButton>Magical Diary</TitleButton>
        <Humberger></Humberger>
      </HeaderTool>
    </HeaderBar>
  )
}
export default Header
