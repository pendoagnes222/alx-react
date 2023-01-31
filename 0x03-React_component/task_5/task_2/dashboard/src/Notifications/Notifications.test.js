import React from 'react';
import { shallow, mount } from 'enzyme';
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
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default" id="1">New course available</li>')
    });
    test("renders `Here is the list of notifications` when array is is not empty", () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications')
    });
});

describe("", () => {
    test("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
        const listNotifications = [
            {id: 1, value: "New course available", type: "default"},
            {id: 2, value: "New resume available", type: "urgent"},
            {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
          ];
        const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        const mock = jest.spyOn(console, 'log')
        const firstList = wrapper.find('li').at(0)
        firstList.simulate('click')
        expect(mock).toBeCalledWith("Notification 1 has been marked as read");
        mock.mockRestore();
    })
})
    