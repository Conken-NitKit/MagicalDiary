import SocialButton from './SocialButton'

const GoogleAuthComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const handleSocialLogin = (user: void) => {
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
