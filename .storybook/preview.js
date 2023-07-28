import Layout from "./Layout"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  decorators: {
    beforeEach: (storyFn) => <Layout>{storyFn()}</Layout>,
    afterEach: (storyFn) => <Layout>{storyFn()}</Layout>,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
}
