import PropTypes from 'prop-types'

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  length: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired
})

export default CourseShape