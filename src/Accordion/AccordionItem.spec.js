import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import AccordionItem from './AccordionItem';

describe('AccordionItem', () => {
const requiredProps = {
    id: '0',
    onButtonClick: () => {},
    title: ''
};

it('returns a react component', () => {
    expect(typeof AccordionItem).toBe('function');
});

it('renders the correct default styles', () => {
    const wrapper = mount(
        <StyledAccordionItemHeader>{title}</StyledAccordionItemHeader>
        {!!(isOpen) && <StyledAccordionContent>{content}</StyledAccordionContent>}
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders the correct open styles', () => {
    const wrapper = mount(
    <AccordionItem {...requiredProps} isOpen>
        <p>children</p>
    </AccordionItem>
    );
    expect(wrapper).toMatchSnapshot();
});
});
