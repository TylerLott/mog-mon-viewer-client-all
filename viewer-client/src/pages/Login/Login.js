import React from "react"
import {
  PageContainer,
  UILoginButton,
} from "../../styles/styleGlobalComponents"
import TopLogo from "../../components/TopLogo/TopLogo"
import { LoginPage } from "./LoginComponents"
import { useNavigate } from "react-router-dom"
import { UIBoolButton } from "../../styles/styleGlobalComponents"

const Login = ({ handleLogin, handleRoomcode }) => {
  let navigate = useNavigate()
  return (
    <PageContainer>
      <LoginPage>
        <TopLogo />
        <UILoginButton href="https://ludwigmonday.gg/viewer" track={false}>
          Sign In
        </UILoginButton>
      </LoginPage>
    </PageContainer>
  )
}

export default Login
