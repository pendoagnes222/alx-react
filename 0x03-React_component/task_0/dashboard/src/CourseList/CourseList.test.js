import React from "react";
import Enzyme, {shallow, mount} from 'enzyme'
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("Test CourseList Component", () => {
    let wrapper;
    const listCourses = [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40}
      ]
    beforeEach(() => {
        wrapper =   shallow(<CourseList />)
    })
    test("renders without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
})

describe("Check wehn an array is passed", () => {
    let wrapper;
    const listCourses = [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40}
      ]
    beforeEach(() => {
        wrapper =   shallow(<CourseList listCourses={listCourses}/>)
    }) 
    test("renders without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
    test("renders without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
})
describe("check when an array is empty", () => {
    let wrapper;
    const listCourses = []
    beforeEach(() => {
        wrapper =   shallow(<CourseList listCourses={listCourses}/>)
    }) 
    test("renders without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
})