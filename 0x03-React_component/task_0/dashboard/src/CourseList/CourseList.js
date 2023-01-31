import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
        <thead>
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
