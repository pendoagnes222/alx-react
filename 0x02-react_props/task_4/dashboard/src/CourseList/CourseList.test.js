import React from "react";
import Enzyme, {shallow, mount} from 'enzyme'
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";


const setUp = (props) => {
    return shallow(<CourseList {...props} />)
}
describe("Test CourseList Component", () => {
    test("renders without crashing", () => {
        const wrapper = setUp();
    })
    test("renders the 5 different rows", () => {
        const wrapper = setUp();
        expect(wrapper.find(CourseListRow).length).toBe(5)
        expect(wrapper.find(CourseListRow).at(0).html()).toBe('<tr><th colSpan="2">Available courses</th></tr>')
        expect(wrapper.find(CourseListRow).at(1).html()).toBe('<tr><th>Course name</th><th>Credit</th></tr>')
        expect(wrapper.find(CourseListRow).at(2).html()).toBe('<tr><td>ES6</td><td>60</td></tr>')
        expect(wrapper.find(CourseListRow).at(3).html()).toBe('<tr><td>Webpack</td><td>20</td></tr>')
        expect(wrapper.find(CourseListRow).at(4).html()).toBe('<tr><td>React</td><td>40</td></tr>')
    })
})