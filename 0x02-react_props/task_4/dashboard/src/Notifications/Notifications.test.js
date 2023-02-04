import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


const setUp = (props) => {
    return shallow(<Notifications {...props} />)
}
describe("App", () => {
    test("Notifications renders without crashing", () => {
        const wrapper = setUp();
    });

    test("check that the menu item is being displayed when displayDrawer is false", () => {
        const wrapper = setUp({displayDrawer:false})
        expect(wrapper.find('.menuItem').length).toBe(1)
    })

    test("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = setUp({displayDrawer:false})
        expect(wrapper.find('.Notifications').length).toBe(0)
    })

    test("check that the menu item is being displayed when displayDrawer is true", () => {
        const wrapper = setUp({displayDrawer:true})
        expect(wrapper.find('.menuItem').length).toBe(1)
    })

    test("Notifications find ul", () => {
        const wrapper = setUp({displayDrawer:true})
        expect(wrapper.find('ul').length).toBe(1);
    });

    test("Notifications renders 3 NotificationItem", () => {
        const wrapper = setUp({displayDrawer:true})
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    test("Notifications renders text", () => {
        const wrapper = setUp({displayDrawer:true})
        const notificationText = wrapper.find('p')
        expect(notificationText.text()).toBe('Here is the list of notifications');
    });
    test("Notifications renders 3 NotificationItem", () => {
        const wrapper = setUp({displayDrawer:true})
        expect(wrapper.containsMatchingElement(<NotificationItem />)).toEqual(true);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
    test("verify that the first NotificationItem element renders the right html", () => {
        const wrapper = setUp({displayDrawer:true})
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>')
    });
})