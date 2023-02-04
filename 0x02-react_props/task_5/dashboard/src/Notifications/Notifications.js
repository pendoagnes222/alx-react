import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
  function onClick(){
    console.log('Close button has been clicked');
  }
  return (
    <>
    {displayDrawer &&
    <div className='Notifications'>
      <button aria-label="Close"
              style={{position: 'absolute',top: '1rem', right: '1rem'}}
              onClick={onClick}>
          <img src={close} alt="Close" />
      </button>
      {listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : '' }
        <ul>
          {listNotifications.length === 0 ? <p>No new notification for now</p> : 
          listNotifications.map((notification) => (
            <NotificationItem type={notification.type} value={notification.value} html={notification.html} />
          ))
          }
        </ul>
    </div>}
    <div className="menuItem">
      Your Notification
    </div> 
    
    </>
  )
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications
