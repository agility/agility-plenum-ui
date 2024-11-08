import type { Meta, StoryObj } from "@storybook/react";
import FormInputWithAddons, { IFormInputWithAddonsProps } from "./FormInputWithAddons";

const meta: Meta<typeof FormInputWithAddons> = {
	title: "Design System/organisms/Form Input With Addons",
	component: FormInputWithAddons,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=85-1269&mode=design"
		}
	}
};

export default meta;
type Story = StoryObj<typeof FormInputWithAddons>;

export const DefaultFormInputWithAddons: Story = {
	args: {
		id: "appSearch",
		name: "appSearch",
		leadLabel: "Search",
		addonOffset: 60,
		labelClass: "text-gray-900",
		trailIcon: { icon: "IconSearch" }
	}
};
export const FormInputWithAddonBTN: Story = {
	args: {
		id: "appSearch",
		name: "appSearch",
		addonOffset: 60,
		labelClass: "text-gray-900",
		addonBTN: {
			icon: {
				icon: "IconPencil",
				className: "h-5 w-5 text-gray-400"
			},
			ctaLabel: "Edit",
			align: "right"
		}
	}
};
