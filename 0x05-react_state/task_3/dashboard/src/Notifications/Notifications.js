import React, { PureComponent } from 'react';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';
import shallowCompare from 'react-addons-shallow-compare';
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  Notifications: {
    border: "3px dotted red",
    padding: "5rem",
    paddingBottom: "1.5rem",
    position: "absolute",
    top: "3rem",
    right: "1rem"
  },
  Notificationsp: {
    // marginBottom: "25px",
    // position: "absolute",
    // left: "1rem",
    // top: "3rem"
  },
  menuItem: {
    position: "absolute",
    top: "0rem",
    right: "1rem"
  },
  small: {
    '@media (max-width: 900px)': {
      padding: "0",
      fontSize: "20px",
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      border: "none"
    }
  }
})

class Notifications extends PureComponent {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    console.log('Close button has been clicked');
  }
  render () {
    return (
      <>
      {this.props.displayDrawer &&
      <div className={css([styles.Notifications, styles.small])}>
        <button aria-label="Close"
                style={{position: 'absolute',top: '1rem', right: '1rem'}}
                onClick={this.props.handleHideDrawer.bind(this)}>
            <img src={close} alt="Close" />
        </button>
        {this.props.listNotifications.length !== 0 ? <p className={css(styles.Notificationsp)}>Here is the list of notifications</p> : '' }
          <ul>
            {this.props.listNotifications.length === 0 ? <p className={css(styles.Notificationsp)}>No new notification for now</p> : 
            this.props.listNotifications.map((notification) => (
              <NotificationItem type={notification.type} value={notification.value} html={notification.html} markNotificationAsRead={this.props.markNotificationAsRead} id={notification.id}/>
            ))
            }
          </ul>
      </div>}
      {
      this.props.displayDrawer === false 
      && 
      <div 
        className={css([styles.menuItem])} 
        onClick={this.props.handleDisplayDrawer}
        id="notif"
      >
          Your Notification
      </div> 
      }
      
      </>
    )
  }
  
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {return },
  handleHideDrawer: () => {return },
  markNotificationAsRead: () => {return }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
}

export default Notifications
