import React, { Component } from 'react'

class Login extends Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1036557015693-fjhubclujbaf4sqp26ur81cmvottuhqu.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance()

          this.setState({ isSignedIn: auth.isSignedIn.get() })
        })
    })
  }

  renderAuth() {
    if (this.state.isSignedIn === null) {
      return <div>i dont know your google account</div>
    } else if (this.state.isSignedIn) {
      return <div>login with google!!</div>
    }
  }

  loginWithGoogle = () => {
    window.gapi.auth2.getAuthInstance().signIn()
  }

  logoutFromGoogle = () => {
    window.gapi.auth2.getAuthInstance().signOut()
  }

  render() {
    return (
      <>
        <h1>Magic Agent</h1>
        {this.renderAuth()}
        <div onClick={this.loginWithGoogle}>ログイン</div>
      </>
    )
  }
}

export default Login
