
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
  backgrounds: {
    default: 'agility white',
    values: [
      {
        name: 'agility white',
        value: '#ffffff',
      },
      {
        name: 'agility yellow',
        value: '#FFCB28',
      },
      {
        name: 'agility purple',
        value: '#4600A8',
      },
      {
        name: 'agility dark blue',
        value: '#2A3846',
      },
    ],
  },
}