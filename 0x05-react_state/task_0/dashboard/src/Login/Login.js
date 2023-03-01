import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  styleMargin: {
    margin: "0 auto",
  },
  small: {
    '@media (max-width: 900px)': {
      display: "block"
    }
  }
})

const Login = () => {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type="email" id='email'  className={css(styles.small)} />
        <label htmlFor='pass'>Password: </label>
        <input type="password" id='pass' className={css(styles.small)} />
        <button>OK</button>
    </React.Fragment>
  )
}

export default Login
