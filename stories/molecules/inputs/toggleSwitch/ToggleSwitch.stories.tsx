import Button from "stories/atoms/buttons/Button/Button"

import type { Meta, StoryObj } from "@storybook/react"

import ToggleSwitch from "./ToggleSwitch"
const meta: Meta<typeof ToggleSwitch> = {
	title: "Design System/Molecules/Inputs/ToggleSwitch",
	component: ToggleSwitch,
	tags: ["autodocs"]
}
type Story = StoryObj<typeof ToggleSwitch>
export const DefaultToggleSwitch: Story = {
  args: {
    isChecked: false,
    onChange: (v: boolean) => {

    },
    label: {
      text: "label me",
      className: "text-lg text-gray-400",
      xPosition: "left",
    },
    variant: "base",
    id: "toggle-switch-1",
    name: "toggle one",
  },
}
export const ShortToggleSwitch: Story = {
  args: {
    ...DefaultToggleSwitch.args,
    label: {
      text: "label me too",
      className: "text-lg text-gray-400",
      xPosition: "left",
    },
    variant: "short",
    id: "toggle-switch-2",
    name: "toggle two",
  },
}
export const Checked: Story = {
  args: {
    ...DefaultToggleSwitch.args,
    isChecked: true,
    label: {
      text: "label me too",
      className: "text-lg text-gray-400",
      xPosition: "left",
    },
    variant: "base",
    id: "toggle-switch-3",
    name: "toggle three",
  },
}
export const WithIcon: Story = {
	args: {
		...DefaultToggleSwitch.args,
		label: {
			text: "label me three",
			className: "text-lg text-gray-400",
			xPosition: "left"
		},
		withIcon: {
			icon: "IconCheck"
		},
		variant: "base",
		id: "toggle-switch-4",
		name: "toggle four"
	}
}
export const NoLabel: Story = {
  args: {
    ...DefaultToggleSwitch.args,
    label: undefined,
    variant: "base",
    id: "toggle-switch-5",
    name: "toggle five",
  },
}
export const LabelOnTheRight: Story = {
  args: {
    ...DefaultToggleSwitch.args,
    variant: "base",
    id: "toggle-switch-6",
    name: "toggle six",
    label: {
      text: "Right on!",
      className: "text-lg text-gray-400",
      xPosition: "right",
    },
  },
}
export const JSXLabel: Story = {
  args: {
    ...DefaultToggleSwitch.args,
    variant: "base",
    id: "toggle-switch-6",
    name: "toggle five",
    label: {
      text: (
        <span className={"inline-flex gap-2 items-center "}>
          <Button
            actionType="primary"
            label="Fancy Label"
            onClick={() => {}}
            icon="IconConfetti"
            size="xs"
            className="mr-4"
          />
        </span>
      ),
      className: "text-lg text-gray-400",
      xPosition: "left",
    },
  },
}

export default meta
