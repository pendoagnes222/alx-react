import React, { PureComponent }  from 'react'
import PropTypes from 'prop-types'

class NotificationItem extends PureComponent {
  render () {
    return (
      this.props.value ? <li data-notification-type={this.props.type} key={this.props.id} onClick={() => this.props.markAsRead(this.props.id)}>
              {this.props.value}
              </li> : 
             <li 
            data-notification-type={this.props.type} 
            dangerouslySetInnerHTML={this.props.html}
            key={this.props.id}
            onClick={() => this.props.markAsRead(this.props.id)}>
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
