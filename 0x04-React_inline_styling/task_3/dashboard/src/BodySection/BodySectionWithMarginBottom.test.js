import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import {StyleSheetTestUtils} from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("testing BodySectionWithMarginBottom", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
        <BodySectionWithMarginBottom title="parent test title" />
        )   
    })
    test("testing that shallowing the component should render correctly", () => {
        const bodySec = wrapper.find('BodySection')
        expect(bodySec.length).toBe(1)
        expect(bodySec.html()).toBe('<div class="bodySection"><h2>parent test title</h2></div>')
    })
})