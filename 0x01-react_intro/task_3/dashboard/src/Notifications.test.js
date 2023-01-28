import { shallow, render } from 'enzyme';
import Notifications from './Notifications';

describe("App", () => {
    test("Notifications renders without crashing", () => {
        render(<Notifications />);
    });

    test("Notifications find ul", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul').length).toBe(1);
    });

    test("Notifications renders three list items", () => {
        const wrapper = shallow(<Notifications />);
        const unList = wrapper.find('ul')
        expect(unList.find('li')).toHaveLength(3);
    });

    test("Notifications renders text", () => {
        const wrapper = shallow(<Notifications />);
        const notificationText = wrapper.find('p')
        expect(notificationText.text()).toBe('Here is the list of notifications');
    });
})