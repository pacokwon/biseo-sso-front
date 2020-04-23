import React from 'react'
import SSOClient from '../utils/sso'
import './Login.css'

const Login = () => {
  const { url, state } = SSOClient.getLoginParams()

  return (
    <div>
      <button>LOGIN</button>
    </div>
  )
}
export default Login
