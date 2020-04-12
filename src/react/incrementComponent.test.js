import React from 'react';
import { shallow, mount } from 'enzyme';

import SomeComponent from './incrementComponent';

test('renders', () => {
    const wrapper = shallow(<SomeComponent />);

    expect(wrapper.find('.incrementor').exists()).toBeTruthy();
});

test('renders increment button', () => {
    const wrapper = shallow(<SomeComponent />);

    expect(wrapper.find('.incrementor__button').exists()).toBeTruthy();
});

test('renders count display', () => {
    const wrapper = shallow(<SomeComponent />);

    expect(wrapper.find('.incrementor__count').exists()).toBeTruthy();
});

test('counter starts at 0', () => {
    const wrapper = mount(<SomeComponent />);
    const count = wrapper.find('.incrementor__count');

    expect(count.text()).toBe('The count is currently: 0');
});

test('clicking butotn increments counter display', () => {
    const wrapper = mount(<SomeComponent />);
    const button = wrapper.find('.incrementor__button');
    const count = wrapper.find('.incrementor__count');

    button.simulate('click');
    button.simulate('click');
    button.simulate('click');

    expect(count.text()).toBe('The count is currently: 3');
});
