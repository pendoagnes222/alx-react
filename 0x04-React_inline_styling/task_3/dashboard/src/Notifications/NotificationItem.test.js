import React from "react";
import { shallow, mount } from "enzyme";
import NotificationItem from "./NotificationItem";
import Notifications from './Notifications'
import {StyleSheetTestUtils} from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe("Testing NotificationItem Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NotificationItem />)
    })
    test("renders component without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
    test("renders the correct html by passing dummy type and value props", () => {
        const wrapper = shallow(<NotificationItem type="urgent" value="New resume available" />)
        expect(wrapper.html()).toBe('<li data-notification-type="urgent" class="urgent_137u7ef">New resume available</li>')
    })
    test("renders the correct html by passing dummy html prop", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>)
        expect(wrapper.html()).toBe('<li data-notification-type="default" class="default_1tsdo2i"><u>test</u></li>')
    })
    test("", () => {
        const notificationWrapper = shallow(<Notifications />)
        const mockFunc = jest.spyOn(notificationWrapper.instance(), 'markAsRead')
        const wrapper = mount(<NotificationItem type="urgent" id={1} value="New resume available" markAsRead={mockFunc.mockImplementation((id) => (`Notification ${id} has been marked as read`))}/>)
        const listElement = wrapper.find('li')
        listElement.simulate('click')
        expect(mockFunc).toHaveBeenCalledWith(1)
    })
})