import React from 'react';
import { Button } from './Button';
import { TestButton } from './TestButton';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';
import { withA11y} from '@storybook/addon-a11y';

export default {
    title: 'button',
    decorators: [withA11y],
    parameters: {
      a11y: {
        config: {
            runOnly: {
                type: "tag", 
                values: ['wcag2a','wcag2aa'],
                resultTypes: ['violations','incomplete'],
            },
            "rules": {
                "color-contrast": { enabled: true },
                "button-name": { enabled: true }
              },
        },
      },
    },
  };

storiesOf('Button', module)
.addWithJSX('with background 1', () => (
    <Button bg={color('bg', '#4CAF50', 'group1')}>Success</Button>
))

.addWithJSX('test button', () => (
    <TestButton>Test</TestButton>
))

.addWithJSX('with background 2', () => (
    <Button bg={color('bg', '#2196f3', 'group1')}>Info</Button>
));