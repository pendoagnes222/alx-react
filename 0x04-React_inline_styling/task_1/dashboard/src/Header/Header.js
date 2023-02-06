import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
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

const Header = () => {
  return (
    <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  )
}

export default Header
