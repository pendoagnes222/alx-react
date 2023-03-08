import React, { Component } from 'react'
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
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    }
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.logIn(this.state.email, this.state.password)
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value}, this.handleEnableSubmit)
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value}, this.handleEnableSubmit)
  }

  handleEnableSubmit = () => {
    if(this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({enableSubmit: true})
    } else {
      this.setState({enableSubmit: false})
    }
  }

  render() {
    const {email, password} = this.state
    return (
      <React.Fragment>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor='email'>Email: </label>
            <input type="email" value={this.state.email} onChange={this.handleChangeEmail} id='email' className={css(styles.small)} />
            <label htmlFor='pass'>Password: </label>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} id='pass' className={css(styles.small)} />
            <input type="submit" value="submit" disabled={this.state.enableSubmit ? false : true}/>
          </form>
      </React.Fragment>
    )
  }
}

export default Login
