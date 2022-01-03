import { shallow } from "enzyme";
import React from "react";
import State from "../components/state";

describe("تست کامپوننت state", () => {
    const setup = () => {
        return shallow(<State />);
    }
    // تست استیت در کلاس
    test("تست استیت", () => {
        const wrapper = setup();
        // در صورتی که مقدار اولیه با مقدار زیر مساوی باشد
        expect(wrapper.state('user')).toEqual("");
    })
})