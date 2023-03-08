import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import { AppProvider }  from '../App/AppContext'

describe("Testing Footer Component", () => {
    test("renders with out crashing", () => {
        const wrapper = shallow(<Footer />)
    })
    test("check the components at the very least render the text `Copyright`", () => {
        const wrapper = shallow(<Footer/>)
        const par = wrapper.find('p')
        expect(par.text()).toContain("Copyright") 
    })
})

describe("Testing Fotter component with context involved", () => {
    test("test to verify that the link is not displayed when the user is logged out within the context", () => {
        const context = {user: {email: "", password: "", isLoggedIn: false}, logOut: jest.fn()}
        const wrapper = mount(<AppProvider value={context}> <Footer/> </AppProvider>)
        expect(wrapper.find('a').length).toBe(0)
    })
    test("test to verify that the link is displayed when the user is logged in within the context", () => {
        const context = {user: {email: "xyz@gmial.com", password: "xyz", isLoggedIn: true}, logOut: jest.fn()}
        const wrapper = mount(<AppProvider value={context}> <Footer/> </AppProvider>)
        expect(wrapper.find('a').length).toBe(1)
    })
})