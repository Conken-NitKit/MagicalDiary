import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route } from 'react-router-dom'
import RankingPage from 'component/ranking'
import Login from 'component/login'
import MyPage from 'component/my-page'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Route exact path="/" component={RankingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
