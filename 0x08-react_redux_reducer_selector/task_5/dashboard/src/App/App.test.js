import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';
import React from 'react'
import {StyleSheetTestUtils} from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('App', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    test('App should not rash', () => {
        expect(wrapper.length).toBe(1)
    });

    test("App renders a div with the class: App-header", () => {
        wrapper.setState({isLoggedIn: true})
        // console.debug(wrapper.html())
        expect(wrapper.find('App-header').length).toBe(0)
    });

    test("check if App component contain the Header component", () => {
        wrapper.setState({isLoggedIn: true})
        expect(wrapper.contains(<Header />)).toBeTruthy()
    })
    test("check if App component contain the Footer component", () => {
        wrapper.setState({isLoggedIn: true})
        expect(wrapper.contains(<Footer />)).toBeTruthy()
    })
    test("check that CourseList is not displayed ", () => {
        wrapper.setState({isLoggedIn: false})
        expect(wrapper.contains(<CourseList />)).toBeFalsy()
    })

    describe("when isLoggedIn prop is true", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<App isLoggedIn={true} />)
        })
        test("verify that the Login component is not included", () => {
            expect(wrapper.contains(<Login />)).toBeFalsy()
        })
        test("verify that the CourseList component is included when loggedIn is false", () => {
            expect(wrapper.find('CourseList').length).toBe(0)
        })
    })
    afterEach(() => {
        wrapper.unmount()
    })
});

describe("Testing states", () => {
    let wrapper;
    let Appinstnace;
    beforeEach(() => {
        wrapper = mount(<App />)
        wrapper.setState({displayDrawer:false})
        Appinstnace = wrapper.instance()
    })
    test("verify that the default state for `displayDrawer`, is false", () => {
        expect(wrapper.state().displayDrawer).toBe(false);
    })
    test("Verify that after calling `handleDisplayDrawer`, the state should be true", () => {
        const handleDisplayDrawer = jest.spyOn(Appinstnace, 'handleDisplayDrawer')
        handleDisplayDrawer()
        expect(handleDisplayDrawer).toHaveBeenCalled()
        expect(wrapper.state().displayDrawer).toBe(true);
    })
    test("verify that after calling `handleHideDrawer`, the state is updated to be false", () => {
        const handleHideDrawer = jest.spyOn(Appinstnace, 'handleHideDrawer')
        handleHideDrawer()
        expect(handleHideDrawer).toHaveBeenCalled()
        expect(wrapper.state().displayDrawer).toBe(false)
    })
    test("test checking if logOut is being called by verifying if the state is updated correctly instead", () => {
        const logOutMock = jest.spyOn(Appinstnace, 'logOut')
        logOutMock()
        expect(wrapper.state().user.email).toBe('')
        expect(wrapper.state().user.password).toBe('')
        expect(wrapper.state().user.isLoggedIn).toBe(false)
    })
    test("test to verify that the logIn function updates the state correctly", () => {
        const logInMock = jest.spyOn(Appinstnace, 'logIn')
        logInMock('xyz@gmail.com', 'xyz')
        expect(wrapper.state().user.email).toBe('xyz@gmail.com')
        expect(wrapper.state().user.password).toBe('xyz')
        expect(wrapper.state().user.isLoggedIn).toBe(true)
    })
    test("", () => {
        const markNotificationAsReadMOck = jest.spyOn(Appinstnace, 'markNotificationAsRead')
        expect(wrapper.state().listNotifications.length).toBe(3)
        markNotificationAsReadMOck(3)
        expect(wrapper.state().listNotifications.length).toBe(2)
    })
    afterEach(() => {
        wrapper.unmount()
    })
})
