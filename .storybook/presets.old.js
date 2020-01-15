module.exports = [
    addons [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-docs',
];

[            '@storybook/addon-docs/preset']
// module.exports = {
//     presets: ['@storybook/addon-docs/react/preset'],
//     addons: [ '@storybook/addon-actions/register',
//     '@storybook/addon-knobs/register',
//     '@storybook/addon-notes/register',
//     '@storybook/addon-docs']
//     }

    module.exports = {
        addons: [

                '@storybook/addon-actions/register',
                '@storybook/addon-knobs/register',
                '@storybook/addon-notes/register',
                '@storybook/addon-docs'
        ]
        }
