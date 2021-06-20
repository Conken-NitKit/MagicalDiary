import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route } from 'react-router-dom'
import RankingPage from 'component/ranking'
import GoogleAuthComponent from 'component/GoogleAuthComponent'
import MyPage from 'component/my-page'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Route exact path="/" component={RankingPage} />
        <Route exact path="/login" component={GoogleAuthComponent} />
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
