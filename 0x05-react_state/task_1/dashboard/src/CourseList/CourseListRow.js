import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tr: {
    borderBottom: "solid 2px rgb(189, 187, 187)",
    textAlign: "start"
  },
  th: {
    borderBottom: "solid 2px rgb(189, 187, 187)",
    textAlign: "start"
  },
  thcol2: {
    textAlign: "center"
  }
  
})

const CourseListRow = ({ id, isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = {backgroundColor: '#deb5b545'}
  const headerStyle = {backgroundColor: '#f5f5f5ab'}
  const styleToApply = isHeader ? headerStyle : rowStyle
  return (
    <tr style={styleToApply}>
        {
        isHeader ? 
          (textSecondCell === null) ? 
            <th colSpan="2" style={{backgroundColor: "#deb5b545"}} className={css(styles.thcol2)}>{textFirstCell}</th> :
            <>
                <th className={css(styles.th)}>{textFirstCell}</th>
                <th className={css(styles.th)}>{textSecondCell}</th>
            </>  :
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        }
    </tr>
  )
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null 
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default CourseListRow
