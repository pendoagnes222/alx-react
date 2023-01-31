import React from 'react'

const Login = () => {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type="email" id='email' />
        <label htmlFor='pass'>Password: </label>
        <input type="password" id='pass'/>
        <button>OK</button>
    </React.Fragment>
  )
}

export default Login
