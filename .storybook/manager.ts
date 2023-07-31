// .storybook/manager.js

import { addons } from "@storybook/manager-api"
import plenumTheme from "./plenumTheme"

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: "bottom",
	enableShortcuts: true,
	showToolbar: true,
	theme: plenumTheme,
	sidebar: {
		showRoots: false,
		collapsedRoots: ["other", "plenum"]
	},
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false }
	}
})
