import React from 'react';
// import renderer from 'react-test-renderer';
// import { render } from 'react-dom';
import { render } from '@testing-library/react';
import { TestButton } from './TestButton';
import axe from '../../axe-helper';
import { toHaveNoViolations } from 'jest-axe'

describe('Button', () => {
    expect.extend(toHaveNoViolations)

    it('should pass accessibility test on custom component', async () =>{
        const { container } = render(<TestButton />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
    })
        
    // it('returns a react component', () => {
    //     expect(typeof TestButton).toBe('undefined');
    // });

    // it('renders correctly', () => {
    //     const tree = renderer.create(<TestButton>Test Success</TestButton>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});