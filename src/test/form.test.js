import { render, shallow } from "enzyme";
import React, { useEffect } from "react";
import Form from "../components/form";
import checkPropTypes from 'check-prop-types';
import { a } from '../components/form';
import { woops } from "../components/axiosTest";
import { __esModule } from "@testing-library/user-event";
import react from "react";

// jest.mock('React', () => ({
//     ...jest.requireActual('React'),
//     useEffect: jest.fn(),
//     woops: jest.fn().mockReturnValue(Promise.resolve('party'))
// }));

// jest.mock(() => ({
//     woops: jest.fn().mockReturnValue(Promise.resolve('party'))
// }));

describe("تست فرم کامپوننت Form", () => {
    // در این قسمت ما یک پراپ به کامپوننت پاس دادیم
    const setup = (props={ success: "1", users: [] }) => {
        return shallow(<Form {...props}/>);
    }
    // متد jest.fn
    // این متد یک ماک فانکشن است که باعث میشودشما حالت همان فانکشن را شبیه سازی کنید 
    let testOnChange = jest.fn();
    let wrapper = setup();
    // متد beforeach
    // برای زمانی است که شما کارهای اولیه پر تکرار را یک بار انجام میدهید
    beforeEach(() => {
        React.useState = () => ["", testOnChange];
        wrapper = setup();
    })
    test('تست رویداد change', () => {
        const myInput = wrapper.find('.myInput'); 
        const targetValue = { target: { value: '1' } };

        myInput.simulate("change", targetValue);
        expect(testOnChange).toHaveBeenCalledWith('1');
    });

    test("click تست رویداد", () => {
        let testOnClick = jest.fn();
        let wrapper = setup();
        // بوسیله تست زیر میتوان استیت مورد نظر را چک کرد
        // تابع ماک زیر 2 ارگومان میگیرد اولی آبجکت
        // دومی متد مورد نظر
        // jest.spyOn(object, methodName)
        const handleClick = jest.spyOn(React, "useState");
        // تابع ماک زیر برای پیاده سازی استفاده میشود
        handleClick.mockImplementation(me => [me, testOnClick]);

        const myBtn = wrapper.find(".myClick");
        myBtn.simulate("click");
        expect(testOnClick).toBeTruthy();
    });

    test("تست پراپ های کامپوننت", () => {
        const p = { success: true }
        // متد زیر برای تست پراپ کامپوننت میباشد
        // در مثال زیر با پاس دادن یک پراپ از نوع رشته و چک کردن نوع داده ای آن به رشته 
        // میتوان از صحت آن اطمینان پیدا کرد
        // پارامتر دوم میتوان داده ای غیر از داد مورد نظر باشد احتمالا اختیاری است
        const prop = checkPropTypes(Form.propTypes, p, 'prop', Form.name);
        // چک میکند آیا مقدار مورد نظر رشته است
        expect.stringContaining(prop);
    });

    test("تست پراپرتی آرایه و چک کردن عداد اندیس های آن", () => {
        let success = "";
        let wrapper;
        // یک آرایه برای تست حلقه
        const users = [
            { first_name: 'a', last_name: 'a1'}, 
            { first_name: 'b', last_name: 'b1'}, 
            { first_name: 'c', last_name: 'c1'}, 
        ];
        wrapper = setup({ success, users });
        const myLoop = wrapper.find(".loop");
        // در اینجا تعداد اندیس آرایه را با تعداد اندیس کامپوننت چک میکنم
        expect(myLoop.length).toBe(users.length);
    });

    test("تست اینکه آیا کلاس مورد نظر آیا دارای همان محتوا است", () => {
        const displayUsers = wrapper.find(".displayUsers");
        // تست اینکه آیا کلاس مورد نظر آیا دارای همان محتوا است
        expect(displayUsers.text()).toContain("users");
    });

    test.skip("تست هوک useEffect", () => {
        // export default {
        //  ...jest.requireActual(''),
        // __esModule: true,
        // woops: jest.fn().mockReturnValue(Promise.resolve('party'))
        // }

        // React.useEffect.mock.calls[0]()
        // const wrapper = setup();

        // wrapper.setProps();

        // const handleClick = jest.spyOn(React, "useEffect");
        // handleClick.mockImplementation(me => [me, testOnClick]);
        // wrapper.update()

        // const logSpy = jest.spyOn(woops, "");
        const spy = jest.spyOn(Form, 'useEffect');
        const isPlaying = video.play();

        jest.spyOn(react, "useEffect").mockImplementation((f) => f());
        const mockFn = jest.fn(a);
        // jest.spyOn(a, 'fetchTokenSupply');
        // render(<Form />);
        expect(mockFn).toHaveBeenCalledTimes(1);

        // باید متد مورد نظر را به ماک تبدیل کرد تا بتوان بوسیله
        // toHaveBeenCalledTimes
        // تعداد تکرار ان را تست کرد
        // این متد یک عدد میکیرد
        // const mockFn = jest.fn(woops);
        // const mockFn = jest.fn(a);
        // wrapper.setProps();
        // expect(mockFn).toHaveBeenCalledTimes(1);
        // const logSpy = jest.spyOn(console, "log");
        // const handleClick = jest.spyOn(React, "useEffect");
        // wrapper.setProps();
        // expect(handleClick).toHaveBeenCalledTimes(1)
    })
});