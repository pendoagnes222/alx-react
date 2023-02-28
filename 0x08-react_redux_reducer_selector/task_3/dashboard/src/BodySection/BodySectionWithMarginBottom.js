import React, { Component } from 'react'
import BodySection from './BodySection'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: 40
  }
})

export class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default BodySectionWithMarginBottom
