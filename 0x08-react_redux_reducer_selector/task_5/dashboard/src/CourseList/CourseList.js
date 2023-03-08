import React from 'react'
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    border: "solid 2px rgb(189, 187, 187)",
    width: "100%",
    textAlign: "start"
  },
  thead: {
    borderBottom: "solid 2px rgb(189, 187, 187)",
    textAlign: "start"
  },
})

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css([styles.table, styles.th, styles.tr])}>
        <thead className={css(styles.thead)}>
            <CourseListRow isHeader={true} textFirstCell="Available courses"/>
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
        </thead>
        <tbody>
        {listCourses.length === 0  ? 'No course available yet' : 
          listCourses.map((courses) => (
            <CourseListRow key={courses.id}  isHeader={false} textFirstCell={courses.name} textSecondCell={courses.credit}/>
          ))
        }
        </tbody>
    </table>
  )
}

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}


export default CourseList
