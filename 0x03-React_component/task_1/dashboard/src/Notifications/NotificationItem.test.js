import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("Testing NotificationItem Component", () => {
    test("renders component without crashing", () => {
        const wrapper = shallow(<NotificationItem />)
    })
    test("renders the correct html by passing dummy type and value props", () => {
        const wrapper = shallow(<NotificationItem type="urgent" value="New resume available" />)
        expect(wrapper.html()).toBe('<li data-notification-type="urgent">New resume available</li>')
    })
    test("renders the correct html by passing dummy html prop", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>)
        expect(wrapper.html()).toBe('<li data-notification-type="default"><u>test</u></li>')
    })
})