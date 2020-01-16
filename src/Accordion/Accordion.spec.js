import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Accordion from './Accordion';

describe('Accordion', () => {
it('returns a react component', () => {
    expect(typeof Accordion).toBe('function');
});

it('renders the default and styles', () => {
    const wrapper = mount(<Accordion />);
    expect(wrapper).toMatchSnapshot();
});

});
