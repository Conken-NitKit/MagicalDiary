import React from "react";
import SocialLogin from "react-social-login";
import styled from "styled-components";

const SocialButtons = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 23vw;
  width: 33vw;
  height: 5vw;
  border-radius: 4%;
  background: url("/googlebutton.jpg") center;
  background-size: cover;
  cursor: pointer;
  transition: opacity 0.3s;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 414px) {
    width: 70vw;
    height: 13vw;
    margin-top: 75vw;
  }
`;


class SocialButton extends React.Component {
  render() {
    return (
      <SocialButtons onClick={this.props.triggerLogin} {...this.props}>
        {this.props.children}
      </SocialButtons>
    );
  }
}

export default SocialLogin(SocialButton);