import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppProvider } from '../App/AppContext';
import React, { useContext } from 'react'
import './Footer.css'
import AppContext from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext)
  return (
    <>
          {user.isLoggedIn ? 
          <>
          <p> <a href=''>Contact us</a> </p> 
          </>
          : 
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p> }
    </>
  )
}

export default Footer
