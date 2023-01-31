import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';


describe("Notifications", () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    test("Notifications renders without crashing", () => {
        expect(wrapper.length).toBe(1)
    });

    test("Notifications renders when there is no array prop", () => {
        wrapper.setProps({displayDrawer:true})
        expect(wrapper.length).toBe(1)
    });

    test("check that the menu item is being displayed when displayDrawer is false", () => {
        wrapper.setProps({displayDrawer:false})
        expect(wrapper.find('.menuItem').length).toBe(1)
    })

    test("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
        wrapper.setProps({displayDrawer:false})
        expect(wrapper.find('.Notifications').length).toBe(0)
    })

    test("check that the menu item is being displayed when displayDrawer is true", () => {
        wrapper.setProps({displayDrawer:true})
        expect(wrapper.find('.menuItem').length).toBe(1)
    })

    test("Notifications find ul", () => {
        wrapper.setProps({displayDrawer:true})
        expect(wrapper.find('ul').length).toBe(1);
    });

    test("renders `No new notification for now` when array is empty", () => {
        wrapper.setProps({displayDrawer:true, listNotifications:[]})
        expect(wrapper.find('p').text()).toBe('No new notification for now')
    });

    test("renders `No new notification for now` when array is not passed", () => {
        wrapper.setProps({displayDrawer:true})
        const notificationText = wrapper.find('p')
        expect(notificationText.text()).toBe('No new notification for now');
    });
})

describe("Testing Notification when displayDrawer is true listNotifications conatins objects/> ", () => {
    let wrapper;
    const listNotifications = [
        {id: 1, type:'default', value:"New course available"},
        {id: 2, type:'urgent', value:"New resume available"},
        {id: 3, type:'urgent', html:{__html: getLatestNotification() }}
    ]
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    });
  
    test("Notifications renders 3 NotificationItem", () => {
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
     test("verify that the first NotificationItem element renders the right html", () => {
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>')
    });
    test("renders `Here is the list of notifications` when array is is not empty", () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications')
    });
});
    