import React, { Component } from 'react'
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  appHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid red"
  },
  
  h1: {
    color: "red"
  },
  logo :{
    width:"400px",
    height: "400px"
  }
})


class Header extends Component {
  render() {
    const {user, logOut} = this.context
    return (
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {
        user.isLoggedIn && 
          <section id='logoutSection' onClick={() => logOut()}>
            Welcome {user.email} <a href="">(logout)</a>
          </section>
        }
        </div>
    )
  }
}

Header.contextType = AppContext
export default Header
