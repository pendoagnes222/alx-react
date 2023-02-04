import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login />}
          </div>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
