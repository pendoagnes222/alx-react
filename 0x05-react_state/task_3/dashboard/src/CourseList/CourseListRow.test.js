import React from "react";
import Enzyme, { shallow } from 'enzyme'
import CourseListRow from "./CourseListRow";
import {StyleSheetTestUtils} from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("Test CourseListRow component", () => {
    test("renders one cell with colspan = 2 when textSecondCell does not exist and header is true", () => {
        const wrapper = shallow(<CourseListRow  isHeader={true} textFirstCell="First cell"/>)
        expect(wrapper.find('th').length).toBe(1)
        expect(wrapper.find('th').text()).toBe("First cell")

    })
    test("renders two cells when textSecondCell is present", () => {
        const wrapper = shallow(<CourseListRow  isHeader={true} textFirstCell="First cell" textSecondCell="Second cell" />)
        expect(wrapper.find('th').length).toBe(2)
        expect(wrapper.find('th').at(0).text()).toBe("First cell")
        expect(wrapper.find('th').at(1).text()).toBe("Second cell")
    })
})