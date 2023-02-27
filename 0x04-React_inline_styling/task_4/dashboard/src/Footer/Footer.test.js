import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Testing Footer Component", () => {
    test("renders with out crashing", () => {
        const wrapper = shallow(<Footer />)
    })
    test("check the components at the very least render the text `Copyright`", () => {
        const wrapper = shallow(<Footer/>)
        const par = wrapper.find('p')
        expect(par.text()).toContain("Copyright") 
    })
})