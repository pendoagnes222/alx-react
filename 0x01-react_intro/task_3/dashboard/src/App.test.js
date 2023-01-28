import App from './App';
import { shallow, render } from 'enzyme';

describe('App', () => {
    test('App should not rash', () => {
        render(<App />)
    });

    test("App renders a div with the class: App-header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').length).toBe(1)
    });

    test("App renders a div with the class: App-body", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    test("App renders a div with the class: App-footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').length).toBe(1);
    });
 
});