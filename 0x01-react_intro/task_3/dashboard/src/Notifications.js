import React from 'react'
import "./Notifications.css"
import close from './close-icon.png'
import { getLatestNotification } from './utils'

const /* A component that will render a list of notifications. */
Notifications = () => {
  function onClick(){
    console.log('Close button has been clicked');
  }
  return (
    <div className='Notifications'>
        <button aria-label="Close"
                style={{position: 'absolute',top: '1rem', right: '1rem'}}
                onClick={onClick}>
            <img src={close} alt="Close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data='default'>New course available</li>
          <li data='urgent'>New resume available</li>
          <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
    </div>
  )
}

export default Notifications
