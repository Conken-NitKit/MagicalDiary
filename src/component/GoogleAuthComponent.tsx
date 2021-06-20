//import SocialButton from './SocialButton'
import { GoogleLogin } from 'react-google-login'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import { sp } from './media'

const GoogleAuthComponent = () => {
  const [, setCookie] = useCookies()

  // // eslint-disable-next-line no-unused-vars
  // const handleSocialLogin = (user: any) => {
  //   setCookie('authToken', user._profile.id)
  //   localStorage.setItem('login', 'true')
  //   console.log('aaa')
  //   console.log(user)
  //   console.log('bbb')
  // }

  // const handleSocialLoginFailure = (err: void) => {
  //   console.log('error')
  //   console.error(err)
  // }

  // const handleSocialLogout = () => {
  //   removeCookie('authToken')
  // }

  // const handleSocialLogoutFailure = (err: void) => {
  //   console.error(err)
  // }

  const responseGoogle = (response: any) => {
    setCookie('authToken', response.Aa, { path: '/' })
    console.log(response.Aa)
  }

  const LoginContent = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(79, 133, 166, 0.55);
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

  const TitleText = styled.p`
    background: none;
    font-family: 'Port Lligat Sans', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    line-height: 75px;
    margin: 0 auto;
    padding-bottom: 30px;
    align-self: center;
    ${sp`
    font-size: 50px;
    `}
  `
  const LoginButton = styled.button`
    background: #101841;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 50px;
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;
    border-radius: 5px;
    align-self: center;
    &:hover {
      background: #1379d8eb;
    }
  `

  return (
    <LoginContent>
      {/* <SocialButton
        provider="google"
        appId="GOOGLE_CLIENT_ID"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Googleログイン
      </SocialButton> */}
      <TitleText>Magical Diary</TitleText>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        render={(renderProps) => (
          <LoginButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            login
          </LoginButton>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </LoginContent>
  )
}

export default GoogleAuthComponent
