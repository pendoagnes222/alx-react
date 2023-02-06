import React from "react";
import { shallow, mount } from "enzyme";
import WithLogging from './WithLogging'
import Login from '../Login/Login'

describe("Testing WithLogging", () => {
    let mockConsoleLog;
    beforeEach(() => {
        mockConsoleLog = jest.spyOn(console, 'log')  
    })
    test("test if console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
        const PassingHoc = WithLogging(() => <p />);
        const comp = <PassingHoc />;
        let wrapper = mount(comp);
        expect(mockConsoleLog).toHaveBeenCalled()
        expect(mockConsoleLog).toHaveBeenCalledWith("Component Component is mounted")
        wrapper.unmount()
        expect(mockConsoleLog).toHaveBeenCalled()
        console.debug(wrapper)
        expect(mockConsoleLog).toHaveBeenCalledWith("Component Component is going to unmount")
    })
    test("test console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component", () => {
        const PassingHoc = WithLogging(Login)
        const comp = <PassingHoc />
        let wrapper = mount(comp)
        expect(mockConsoleLog).toHaveBeenCalled()
        expect(mockConsoleLog).toHaveBeenCalledWith("Component Login is mounted")
        wrapper.unmount()
        expect(mockConsoleLog).toHaveBeenCalled()
        expect(mockConsoleLog).toHaveBeenCalledWith("Component Login is going to unmount")
    })
    afterEach(() => {
        mockConsoleLog.mockRestore()
    })
})