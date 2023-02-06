import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  styleMargin: {
    margin: "0 auto",
  }
})

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
