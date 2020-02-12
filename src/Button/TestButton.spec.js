import React from 'react';
import { render } from '@testing-library/react';
import { TestButton } from './TestButton';
import axe from '../../axe-helper';
import { toHaveNoViolations } from 'jest-axe'

describe('Button', () => {
    expect.extend(toHaveNoViolations)

    it('should pass accessibility test on custom component', async () =>{
        const { container } = render(<TestButton />)
        const results = await axe(container)
        // expect(results).toHaveNoViolations()
        expect(results).toHaveNoViolations()
    })
});