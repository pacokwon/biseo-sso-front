import React from 'react'
import SSOClient from '../utils/sso'

const Login = () => {
  const { url, state } = SSOClient.getLoginParams()
  console.log(url, state)
  console.log(localStorage)

  return (
    <button>LOGIN</button>
  )
}
export default Login
