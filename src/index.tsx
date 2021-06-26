import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import RankingPage from './components/ranking'
import GoogleAuthComponent from 'components/GoogleAuthComponent'
import MyPage from 'components/my-page'

import Cookies from 'js-cookie'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Route exact path="/">
          {Cookies.get('authToken') !== undefined ? (
            <RankingPage />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login">
          {Cookies.get('authToken') === undefined ? (
            <GoogleAuthComponent />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/mypage">
          {Cookies.get('authToken') !== undefined ? (
            <MyPage />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
