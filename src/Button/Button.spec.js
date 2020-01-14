import React from 'react';
import renderer from 'react-test-renderer';
import ClassicButton from './ClassicButton';

describe('Classic Button', () => {
it('returns a react component', () => {
    expect(typeof Button).toBe('function');
});

it('renders correctly', () => {
    const tree = renderer.create(<Button>Hello World</Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
});
