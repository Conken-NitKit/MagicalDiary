import React from 'react'
import SocialButton from './SocialButton'

const GoogleAuthComponent = () => {
  let loginStatus = localStorage.getItem('login')

  const handleSocialLogin = (user: void) => {
    console.log('success')
    console.log(user)
    localStorage.setItem('login', 'true')
  }

  const handleSocialLoginFailure = (err: void) => {
    console.log('error')
    console.error(err)
  }

  return (
    <div>
      <SocialButton
        provider="google"
        appId="1036557015693-fjhubclujbaf4sqp26ur81cmvottuhqu.apps.googleusercontent.com"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Googleログイン
      </SocialButton>
    </div>
  )
}

export default GoogleAuthComponent
