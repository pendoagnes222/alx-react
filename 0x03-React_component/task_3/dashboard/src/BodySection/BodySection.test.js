import React from "react";
import { shallow, mount } from "enzyme";
import BodySection from './BodySection'

describe("Testing BodySection", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
        <BodySection title="test title">
            <p>test children node</p>
        </BodySection>)
    })
    test("checking that shallowing the component should render correctly the children and one h2 element", () => {
        expect(wrapper.find('h2').length).toBe(1)
        expect(wrapper.find('h2').text()).toBe('test title')
        expect(wrapper.find('p').length).toBe(1)
        expect(wrapper.find('p').text()).toBe('test children node')
    })
})
