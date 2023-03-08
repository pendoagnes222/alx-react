import React, { PureComponent }  from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: "red"
  },
  default: {
    color: "blue"
  },
  small: {
    '@media (max-width: 900px)': {
      listStyle: "none",
      borderBottom: "2px solid black",
      width:"100%",
      paddingBottom: "20px",
      paddingTop: "15px",
    }
  }
})

class NotificationItem extends PureComponent {
  render () {
    let classname;
    {this.props.type === "default" ? classname = styles.default : classname = styles.urgent}
    return (
      this.props.value ? <li data-notification-type={this.props.type} key={this.props.id} onClick={() => this.props.markAsRead(this.props.id)} className={css([classname, styles.small])}>
              {this.props.value}
              </li> : 
             <li 
            data-notification-type={this.props.type} 
            dangerouslySetInnerHTML={this.props.html}
            key={this.props.id}
            onClick={() => this.props.markAsRead(this.props.id)} className={css([classname, styles.small])}>
            </li>
    )
  }
}

NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}


export default NotificationItem
