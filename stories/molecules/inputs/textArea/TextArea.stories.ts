import type { Meta, StoryObj } from "@storybook/react"
import TextArea from "./TextArea"
const meta: Meta<typeof TextArea> = {
	title: "Design System/Molecules/Inputs/TextArea",
	component: TextArea,
	tags: ["autodocs"]
}
const dummyText: string = `Checkmate... Life finds a way. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?

I was part of something special. Just my luck, no ice. You really think you can fly that thing? Must go faster... go, go, go, go, go! God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.`
type Story = StoryObj<typeof TextArea>
export const DefaultTextArea: Story = {
	args: {
		id: "appDescription",
		name: "description",
		rows: 12,
		cols: 18,
		label: "Description",
		placeholder: dummyText
	}
}
export default meta
