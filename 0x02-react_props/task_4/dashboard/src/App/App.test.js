import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { shallow, render } from 'enzyme';
import React from 'react'


const setUp = (props) => {
    return shallow(<App {...props} />)
}
describe('App', () => {
    test('App should not rash', () => {
        const wrapper = setUp()
    });

    // test("App renders a div with the class: App-header", () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-header').length).toBe(1)
    // });

    test("App renders a div with the class: App-body", () => {
        const wrapper = setUp();
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    test("App renders a div with the class: App-footer", () => {
        const wrapper = setUp();
        expect(wrapper.find('.App-footer').length).toBe(1);
    });

    test("check if App component contain the Notifications component", () => {
        const wrapper = setUp();
        expect(wrapper.contains(<Notifications />)).toBeTruthy()
    })
    test("check if App component contain the Header component", () => {
        const wrapper = setUp();
        expect(wrapper.contains(<Header />)).toBeTruthy()
    })
    test("check if App component contain the Login component", () => {
        const wrapper = setUp();
        expect(wrapper.contains(<Login />)).toBeTruthy()
    })
    test("check if App component contain the Footer component", () => {
        const wrapper = setUp();
        expect(wrapper.contains(<Footer />)).toBeTruthy()
    })
    test("check that CourseList is not displayed ", () => {
        const wrapper = setUp();
        expect(wrapper.contains(<CourseList />)).toBeFalsy()
    })

    describe("when isLoggedIn prop is true", () => {
        test("verify that the Login component is not included", () => {
            const wrapper = setUp({isLoggedIn:true})
            expect(wrapper.contains(<Login />)).toBeFalsy()
        })
        test("verify that the CourseList component is included", () => {
            const wrapper = setUp({isLoggedIn:true})
            expect(wrapper.contains(<CourseList />)).toBeTruthy()
        })
    })
});