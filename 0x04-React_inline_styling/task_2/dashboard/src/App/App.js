import React, {Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  App: {
    display: 'grid',
    gridTemplateRows: "1fr 1fr",
  },
  AppBody: {
    paddingLeft: "3rem",
    paddingTop: "3rem",
  },
  footer: {
    borderTop: "4px solid red",
    paddingTop: "1rem"
  },
  Footerp: {
      textAlign: "center"
    }
})

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]
const listNotifications = [
  {id: 1, type:'default', value:"New course available"},
  {id: 2, type:'urgent', value:"New resume available"},
  {id: 3, type:'urgent', html:{__html: getLatestNotification() }}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.props.logOut()
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  render () {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.App)}>
            <Header />
            <div className={css(styles.AppBody)}>
              {this.props.isLoggedIn ?
              <>
              <BodySection title="News from the School">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit.</p>
              </BodySection>
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              </>
               : 
               <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
              }
            </div>
        </div>
        <div className={css([styles.footer, styles.Footerp])}>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {return }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
