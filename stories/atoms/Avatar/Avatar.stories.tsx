import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./Avatar"

const meta: Meta<typeof Avatar> = {
	title: "Design System/Atoms/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=19-1017&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}

type Story = StoryObj<typeof Avatar>

// get random number between 0 and 45
const getRandomNumber = () => Math.floor(Math.random() * 45)
// function to return random string either "women" or "men"
const getRandomGender = (): "men" | "women" => (Math.random() < 0.5 ? "men" : "women")

export const DefaultAvatar: Story = {
	args: {
		// get image from randomuser.me/api
		src: `https://randomuser.me/api/portraits/thumb/${getRandomGender()}/${getRandomNumber()}.jpg`
	}
}
export const AvatarWithStatus: Story = {
	args: {
		...DefaultAvatar.args,
		status: "online"
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=19-1030&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}
export const AvatarWithInitials: Story = {
	args: {
		src: undefined,
		initials: "JD"
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=19-1254&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}
export const AvatarWithStatusAndInitials: Story = {
	args: {
		status: "online",
		initials: "JD"
	}
}
export const XXSmallAvatar: Story = {
	args: {
		...DefaultAvatar.args,
		size: "xxs"
	}
}
export const XSmallAvatar: Story = {
	args: {
		...DefaultAvatar.args,
		size: "xs"
	}
}
export const SmallAvatar: Story = {
	args: {
		...DefaultAvatar.args,
		size: "sm"
	}
}
export const MediumAvatar: Story = {
	args: {
		...DefaultAvatar.args,
		size: "md"
	}
}
export const LargeAvatar: Story = {
	args: {
		...DefaultAvatar.args,
		size: "lg"
	}
}
export const XLargeAvatar: Story = {
	args: {
		...DefaultAvatar.args,
		size: "lg"
	}
}

export default meta
