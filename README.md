# Agility CMS Component Library for React

## Features

- Button | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-button)
- Combobox | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-combobox--all-variations)
- Dropdown | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-dropdown--default)
- Switch | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-atoms--switch-component)
- TextInput | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-textinput--all-variations)
- TextInputAddon | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-textinputaddon--all-variations)
- TextInputSelect | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-textinputselect--all-variations)
- Radio | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-radio--all-variations)
- Checkbox | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-checkbox--all-variations)
- Textarea | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-textarea--all-variations)
- Select | [view](https://plenum-ui.vercel.app/?path=/story/plenum-ui-components-select--all-variations)

## Prerequistes

Follow the instructions to install Tailwind CSS into the project: [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

Import Plenum's tailwind.css and the global.css from the previous step into the
app entrypoint (i.e. `_app.tsx`).

```
import "<RELATIVE_PATH>/globals.css";
import "@agility/plenum-ui/lib/tailwind.css";
```

_Any additional styles should be added before these two import statements to prevent overwriting the Plenum styling_

## Installing

Using npm:

```bash
$ npm install @agility/plenum-ui
```

Using yarn:

```bash
$ yarn add @agility/plenum-ui
```


## Usage

```js
import { Button } from '@agility/plenum-ui';

<Button label='Primary' type='primary' size='base' icon='BellIcon'>
```

## Advanced
If you wish to use yarn link with this project to debug locally:

```
cd THIS_PACKAGE
yarn link
yarn install
cd node_modules/react
yarn link
cd ../../node_modules/react-dom
yarn link
cd YOUR_PROJECT
yarn link PACKAGE_YOU_DEBUG_LOCALLY
yarn link react
yarn link react-dom
```

Then, when you are done

```
cd YOUR_PROJECT
yarn unlink "@agility/plenum-ui"
yarn unlink react
yarn link react-dom

cd THIS_PACKAGE
yarn unlink
cd node_modules/react
yarn unlink
cd ../../node_modules/react-dom
yarn unlink

```