//import SocialButton from './SocialButton'
import { GoogleLogin } from 'react-google-login'
import { useCookies } from 'react-cookie'

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
  return (
    <div>
      {/* <SocialButton
        provider="google"
        appId="GOOGLE_CLIENT_ID"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Googleログイン
      </SocialButton> */}
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            login
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  )
}

export default GoogleAuthComponent
