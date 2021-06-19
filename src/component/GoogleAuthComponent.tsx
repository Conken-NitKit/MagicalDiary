import SocialButton from './SocialButton'
import styled from 'styled-components'

const Title = styled.div`
  display: box;
  color: #101841;
  font-size: 3.7vw;
  font-weight: 900;
  text-align: center;
  position: relative;
  top: 20vw;
  font-family: Roboto;
  @media (max-width: 414px) {
    font-size: 7vw;
    top: 65vw;
  }
`

const Back = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4f85a68c;
`

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const GoogleAuthComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const handleSocialLogin = (user: void) => {
    localStorage.setItem('login', 'true')
    window.location.href = '/'
  }

  const handleSocialLoginFailure = (err: void) => {
    console.log('error')
    console.error(err)
  }

  return (
    <>
      <Back>
        <Title>Magic Agent</Title>
        <SocialButton
          provider="google"
          appId="1036557015693-fjhubclujbaf4sqp26ur81cmvottuhqu.apps.googleusercontent.com"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        ></SocialButton>
      </Back>
    </>
  )
}

export default GoogleAuthComponent
