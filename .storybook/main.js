module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)'],
    addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-docs',
    ],
    presets: ['@storybook/addon-docs/preset']
    };


module.exports = [];