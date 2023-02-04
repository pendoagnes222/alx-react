import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe("App", () => {
    test("Notifications renders without crashing", () => {
        render(<Notifications />);
    });

    test("Notifications find ul", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul').length).toBe(1);
    });

    test("Notifications renders 3 NotificationItem", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    test("Notifications renders text", () => {
        const wrapper = shallow(<Notifications />);
        const notificationText = wrapper.find('p')
        expect(notificationText.text()).toBe('Here is the list of notifications');
    });
    test("Notifications renders 3 NotificationItem", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.containsMatchingElement(<NotificationItem />)).toEqual(true);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
    test("verify that the first NotificationItem element renders the right html", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>')
    });
})