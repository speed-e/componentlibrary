
// import JSXAddon from 'storybook-addon-jsx';

// import { withKnobs } from '@storybook/addon-knobs/react';
// addDecorator(withKnobs);

// setAddon(JSXAddon);

import { configure, setAddon, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import JSXAddon from 'storybook-addon-jsx';

import { withKnobs } from '@storybook/addon-knobs/react';
addDecorator(withKnobs);

setAddon(JSXAddon);

const req = requireContext('../src', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(file => req(file))
}

configure(loadStories, module);