# componentlibrary

## npm run storybook
storybook instance

## npm run test
visual regression tests

## npm run jest
unit tests

## Applitools
First of all ensure that storybook is running by using the command `npm run storybook` <br />
Once this is done we can run Applitools using the `npm run eyes-storybook` script <br />

If this is the first time you are using Applitools, the initial snapshots Applitools gets from <br />
storybook will be used as the baseline images meaning all future runs will be compared to these, however <br />
baseline images can be updated within the Applitools dashboard when deliberate changes have been made to <br />
components.