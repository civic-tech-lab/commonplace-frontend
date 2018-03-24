// @flow
import { configure } from '@storybook/react';

// dynamically load all stories that match a regex
// $FlowFixMe — Webpack's require doesn't match the commonJS spec.
const req = require.context('../src/components', true, /.*demo\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
