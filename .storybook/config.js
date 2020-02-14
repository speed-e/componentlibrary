
import {  configure, setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import requireContext from 'require-context.macro'

setAddon(JSXAddon);
addDecorator(withKnobs);

const req = requireContext('../src', true, /\.stories\.(js|mdx)$/)

function loadStories() {
    req.keys().forEach(file => req(file))
}

configure(loadStories, module);