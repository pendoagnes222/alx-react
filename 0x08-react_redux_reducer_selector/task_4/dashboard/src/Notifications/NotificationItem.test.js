import React from "react";
import { shallow, mount } from "enzyme";
import NotificationItem from "./NotificationItem";
import Notifications from './Notifications'
import {StyleSheetTestUtils} from 'aphrodite';
import App from '../App/App'

StyleSheetTestUtils.suppressStyleInjection();


describe("Testing NotificationItem Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NotificationItem />)
    })
    afterEach(() => {
        wrapper.unmount()
    })
    test("renders component without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
    test("renders the correct html by passing dummy type and value props", () => {
        const wrapper = shallow(<NotificationItem type="urgent" value="New resume available" />)
        expect(wrapper.html()).toBe('<li data-notification-type="urgent" class="urgent_137u7ef-o_O-small_127e720">New resume available</li>')
    })
    test("renders the correct html by passing dummy html prop", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>)
        expect(wrapper.html()).toBe('<li data-notification-type="default" class="default_1tsdo2i-o_O-small_127e720"><u>test</u></li>')
    })
})