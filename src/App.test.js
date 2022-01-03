import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe("تست کامپوننت app", () => {

  // بوسیله روش زیر میتوان یک بار کامپوننت را کانفیگ کرد تا هیربار در هر متد shallow استفاده نشه
  const setup = () => {
    return shallow(<App />);
  }

  test("ایا کامپوننت وجود دارد", () => {
    const wrapper = setup();
    expect(wrapper.length).toEqual(1);
  });

  test("ایا کلاس و آی دی و اتریبیوت موجود در کامپوننت وجود دارد", () => {
    const wrapper = setup();
    //ایا کلاس زیر وجود دارد
    expect(wrapper.find('.App-header').length).toEqual(1);
  })

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

})