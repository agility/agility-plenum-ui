import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextInputProps> = (args) => <TextInput {...args}  />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  label: "Default Input",
  focused: false,
  error: false,
	id: "input",
	name: "input",
	type: "input"
};

