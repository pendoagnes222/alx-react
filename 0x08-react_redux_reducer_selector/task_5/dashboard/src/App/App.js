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
import { AppProvider } from './AppContext';

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
    },
    small: {
      '@media (max-width: 900px)': {
        display: "none"
      }
    }
})

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {email: "", password: "", isLoggedIn: false},
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type:'default', value:"New course available"},
        {id: 2, type:'urgent', value:"New resume available"},
        {id: 3, type:'urgent', html:{__html: getLatestNotification() }}
      ]
    };
    this.logOut = this.logOut.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this)
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true})
  }
  handleHideDrawer = () => {
    this.setState({displayDrawer: false})
  }
  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.state.logOut()
    }
  }

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false
      }
    })
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    })
  }

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: [...this.state.listNotifications.filter(notif => notif.id !== id)]
    })
  } 

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  render () {
    const {user, logOut} = this.state
    return (
      <AppProvider value={{user, logOut}}>
        <React.Fragment>
          <Notifications 
            listNotifications={this.state.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css([styles.App, styles.small])}>
              <Header />
              <div className={css(styles.AppBody)}>
                {this.state.user.isLoggedIn ?
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
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
                }
              </div>
          </div>
          <div className={css([styles.footer, styles.Footerp, styles.small])}>
            <Footer />
          </div>
        </React.Fragment>
      </AppProvider>
    );
  }
}

App.defaultProps = {
}

App.propTypes = {
}

export default App;
