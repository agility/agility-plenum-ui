import type { Meta, StoryObj } from "@storybook/react"
import EmptySectionPlaceholder, { IEmptySectionPlaceholderProps } from "./EmptySectionPlaceholder"
import { useRef } from "react"

const meta: Meta<typeof EmptySectionPlaceholder> = {
	title: "Design System/Organisms/Empty Section Placeholder",
	component: EmptySectionPlaceholder,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof EmptySectionPlaceholder>

const MissingAttachmentCTA = () => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	return (
		<div className="mb-2 block text-sm font-medium text-gray-600">
			<input type="file" className="hidden" ref={fileInputRef} />
			<button
				className="hover:underline hover:text-gray-700 transition-all"
				onClick={() => {
					fileInputRef?.current && fileInputRef.current.click()
				}}
			>
				Upload
			</button>{" "}
			<span>OR drag and drop a file</span>
		</div>
	)
}

export const CallsToAction: Story = {
	args: {
		icon: { icon: "IconPaperclip" },
		mutedText: "No File is attached yet",
		CallToActionComponent: <MissingAttachmentCTA />,
		actions: [
			{
				actionType: "alternative",
				icon: {
					icon: "IconUpload",
					outline: true
				},
				iconPosition: "leading",
				label: "Upload",
				onClick: () => window.alert("Clicked")
			},
			{
				actionType: "alternative",
				icon: {
					icon: "IconGridDots",
					outline: true
				},
				size: "lg",
				iconPosition: "leading",
				label: "Browse",
				onClick: () => window.alert("Clicked")
			}
		],
		isWide: true
	}
}
export const NoActions: Story = {
	args: {
		icon: {
			icon: "IconPencil",
			className: "h-5 w-5 text-gray-400 ",
			outline: true
		},
		mutedText: "No Recent Changes",
		primaryMessage: "There haven't been any recent changes\nto the content in this of this instance.",
		actions: [],
		isWide: true
	}
}
