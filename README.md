
[![Agility Yellow Triangle Logo withe gray text reading Agility to the right of the triangle](https://cdn.agilitycms.com/content-manager/images/logos/agility-logo-storybook-350.png)](https://agilitycms.com/)
# Agility Plenum UI Library 

Welcome to Plenum, the definitive UI library for working within the [Agility CMS](https://www.agilitycms.com/) ecosystem. Built with [Next.js 13](https://nextjs.org/) and [Storybook 7.1](https://storybook.js.org/), Plenum is a comprehensive collection of components and patterns designed for building user interfaces in Agility CMS, as well as your own applications within the Agility CMS ecosystem.


## Building for the Agility Marketplace

The Plenum library is designed to encourage and facilitate building applications for the Agility CMS Marketplace. Use the rich selection of components and patterns to build consistent, robust, and user-friendly applications for the Agility ecosystem.

Contributions to extend and improve this library are welcome! Feel free to fork the repository and submit pull requests.

## Features

- Comprehensive UI components library, designed for versatility and consistency.
- Built with modern technologies like Next.js 13 and Storybook 7.1.
- Includes automation scripts for efficient component creation.
- Adopts Tailwind CSS for utility-first styling.
- Easy to use, install, and integrate into your project.
  
## Prerequisites

Before you begin, ensure that Tailwind CSS is installed in your project. Follow the instructions here: [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

In your app entry point (i.e. \`_app.tsx\`), import the \`globals.css\` file from the previous step, and the \`tailwind.css\` file from Plenum:

```jsx
import "<RELATIVE_PATH>/globals.css";
import "@agility/plenum-ui/dist/lib/tailwind.css";
```

Make sure to add any additional styles before these two import statements to prevent overwriting the Plenum styling.

## Installation

You can install the Plenum library using npm or yarn:

```bash
# Using npm:
npm install @agility/plenum-ui

# Using yarn:
yarn add @agility/plenum-ui
```

## Usage

Import and use the Plenum components in your React components:

```jsx
import { Component } from '@agility/plenum-ui';

<Component {...{ComponentProps}} />
```

## Scripts

### Development and Build Scripts


#### Run your development server with Storybook:

```bash
npm run dev
# or
yarn dev
```

#### Build your project:

```bash
npm run build
# or
yarn build
```

### Build your project locally and watch for changes
This will create symlinks for the current project and its necessary dependencies, so that it can be connected to other projects.
It will also start the watch server, so it will automatically rebuild on any local changes.

```
yarn start:local
```

#### Use yarn link to locally test the library in another project:

In the Plenum project directory after having run a build, run:
 ```bash 
yarn link.
```
You should see the following in your terminal: 
```bash
yarn link v1.22.10 
success Registered "@agility/plenum-ui".
```
You can now run 
```bash 
yarn link "@agility/plenum-ui"
```
in the projects where you want to consume this package and it will be used instead. It should output a message like 
```bash
yarn link v1.22.10
success Using linked package for "@agility/plenum-ui".
```

#### Clean the \`dist\` directory:

```bash
npm run clean
# or
yarn clean
```

#### Lint your project:

```bash
npm run lint
# or
yarn lint
```

#### Build Tailwind CSS:

```bash
npm run build:tw
# or
yarn build:tw
```

### Storybook Scripts

#### Build your Storybook:

```bash
npm run build-storybook
# or
yarn build-storybook
```

#### Run your Storybook in development mode:

```bash
npm run storybook:dev
# or
yarn storybook:dev
```

#### Generate Tailwind CSS for Storybook and watch for changes:

```bash
npm run storybook:tw
# or
yarn storybook:tw
```

#### Build specific parts of Storybook:

```bash
# Build Storybook
npm run sb-build:storybook
# or
yarn sb-build:storybook

# Build Tailwind CSS for Storybook
npm run sb-build:tw
# or
yarn sb-build:tw
```

#### Compile TypeScript files using custom build script:

```bash
npm run build:tsc
# or
yarn build:tsc
```

These scripts cover various tasks related to development, build processes, linting, and handling specific aspects like Storybook and Tailwind CSS. Make sure to run the appropriate script for the task you want to perform.


### Component Generation Script

We have a Node.js script that automates the creation of new components for our Storybook library. This script generates a component directory, along with the necessary files like \`Component.tsx\`, \`Component.stories.tsx\`, and \`index.tsx\`.

#### How to use the script

To use the script, you should have Node.js installed. From the terminal, you can create a new component by running the following command:

```bash
node create-component.js ComponentName DestinationDirectory
```

This command takes two arguments:

- \`ComponentName\` - The name of the new component you want to create. This should be in PascalCase (for example, "MyComponent").
- \`DestinationDirectory\` - The directory where the new component will be created. This should be relative to the 'stories' directory. (for example, "atoms" or "Molecules").

The script will create a new directory with the given component name inside the specified destination directory (under the 'stories' directory). Then, it will generate three files in the new directory:

- \`ComponentName.tsx\` - This is the component file. It contains a basic React functional component structure.
- \`ComponentName.stories.tsx\` - This is the Storybook story file. It sets up a basic story for the new component.
- \`index.tsx\` - This file simply exports the new component. It's used for cleaner imports.

#### Example

To create a new component named "Button" in the "atoms" directory, you would run:

```bash
node create-component.js Button atoms
```

This would create a directory structure like:

```
- stories
  - atoms
    - Button
      - Button.tsx
      - Button.stories.tsx
      - index.tsx
```

Each of the generated files will contain basic boilerplate code that you can start with.

##### Notes

This script does prompt the user before overwriting existing directories, so you can run it with confidence. Always use PascalCase for component names, and ensure the destination directory exists or can be created. If you encounter any issues, you can create the component and its files manually
