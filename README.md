[![Agility Yellow Triangle Logo with gray text reading Agility to the right of the triangle](https://cdn.agilitycms.com/content-manager/images/logos/agility-logo-storybook-350.png)](https://agilitycms.com/)

# Table of Contents
- [Agility Plenum UI Library](#agility-plenum-ui-library)
  - [Building for the Agility Marketplace](#building-for-the-agility-marketplace)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
    - [Development and Build Scripts](#development-and-build-scripts)
    - [Storybook Scripts](#storybook-scripts)
    - [Component Generation Script](#component-generation-script)
      - [How to use the script](#how-to-use-the-script)
      - [Example](#example)
      - [Notes](#notes)
  
**Table of Contents generated with [easy-toc](https://marketplace.visualstudio.com/items?itemName=HEPTACODE.easy-toc)**


# Agility Plenum UI Library 

Welcome to Plenum, the definitive UI library for working within the [Agility CMS](https://www.agilitycms.com/) ecosystem. Plenum embraces atomic design principles and is built on our Plenum design system, providing a comprehensive and cohesive collection of components and patterns. 

Powered by [Next.js 13](https://nextjs.org/) and [Storybook 7.1](https://storybook.js.org/), Plenum is designed not just for building user interfaces in Agility CMS, but also for crafting your own applications within the Agility CMS ecosystem. 

Whether you're enhancing Agility CMS or developing for the Agility Marketplace, Plenum is your trusted partner for a consistent, user-friendly design experience.

## 🏗️ Building for the Agility Marketplace


Are you developing for the Agility CMS Marketplace? Plenum is designed to facilitate and accelerate your workflow. Using Plenum's wide selection of components and patterns, you can build consistent, robust, and user-friendly applications that seamlessly blend into the Agility ecosystem.

We welcome and encourage contributions! Fork the repository, make your enhancements, and submit a pull request. Together, we can make Plenum better for every developer in the Agility community.

## 🎁 Features

- Comprehensive UI components library, following atomic design principles and our Plenum design system for utmost consistency.
- Modern, cutting-edge tech stack with Next.js 13 and Storybook 7.1.
- Automation scripts for efficient component creation.
- Integration with Tailwind CSS for utility-first styling.
- Easy to install and integrate into any Agility CMS project.

## 📋 Prerequisites

Before you can take full advantage of Plenum, you need to install Tailwind CSS into your project. Follow the instructions here: [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

In your app entry point (i.e., \`_app.tsx\`), import the \`globals.css\` file from the previous step, and the \`tailwind.css\` file from Plenum:

```
import "<RELATIVE_PATH>/globals.css";
import "@agility/plenum-ui/lib/tailwind.css";
```

Make sure to add any additional styles before these two import statements to prevent overwriting Plenum's styling.

## 💾 Installation

Installing Plenum into your project is a breeze. You can use either npm or yarn:

```
# Using npm:
npm install @agility/plenum-ui

# Using yarn:
yarn add @agility/plenum-ui
```

## 🔨 Usage

To use Plenum components in your React components:

```
import { Component } from '@agility/plenum-ui';

<Component {...ComponentProps} />
```

## 📄 Scripts

### Development and Build Scripts

Run your development server:

```
npm run dev
# or
yarn dev
```

Build your project:

```
npm run build
# or
yarn build
```

Start your application:

```
npm run start
# or
yarn start
```

Lint your project:

```
npm run lint
# or
yarn lint
```

### 📚 Storybook Scripts

Run your Storybook in development mode on port 6006:

```
npm run storybook
# or
yarn storybook
```

Build your Storybook:

```
npm run build-storybook
# or
yarn build-storybook
```

Generate Tailwind CSS for Storybook:

```
npm run storybook:tw
# or
yarn storybook:tw
```

Build Tailwind CSS:

```
npm run build:tw
# or
yarn build:tw
```

### 🛠️ Component Generation Script

Our Node.js script automates the creation of new components for our Storybook library. It creates a component directory with necessary files like \`Component.tsx\`, \`Component.stories.tsx\`, and \`index.tsx\`.

#### How to use the script

To use the script, you should have Node.js installed. From the terminal, you can create a new component with the following command:

```
yarn create-component ComponentName DestinationDirectory
# or
npm run create-component ComponentName DestinationDirectory
```

The command takes two arguments:

- \`ComponentName\`: The name of the new component (PascalCase, e.g., "MyComponent").
- \`DestinationDirectory\`: The directory where the new component will be created. It should be relative to the 'stories' directory (e.g., "atoms" or "Molecules").

The script will create a new directory with the component name inside the destination directory (under the 'stories' directory), and generate three files in the new directory:

- \`ComponentName.tsx\`: The component file, which contains a basic functional component structure with a typed interface for props.
- \`ComponentName.stories.tsx\`: The Storybook story file for the new component.
- \`index.tsx\`: An index file to cleanly export the new component.
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

#### Notes
Upon successful component creation, the script will exit and display a success message. If the directory already exists, the script will ask for confirmation before overwriting any existing files.

Please note that the script assumes that the 'stories' directory exists. If the destination directory does not exist, the script will attempt to create it. The script will also prompt you before overwriting any existing files. Use PascalCase for component names and directory names, and ensure the paths are correctly set. If you encounter any issues, you can still manually create the component and its associated files.
