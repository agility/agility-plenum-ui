
import React from 'react';
import { addDecorator } from '@storybook/react';
//import { withInfo } from '@storybook/addon-info';
import Layout from './Layout';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
// addDecorator(withInfo({
//   inline: true,
//   propTablesExclude: [Layout]
// }));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}