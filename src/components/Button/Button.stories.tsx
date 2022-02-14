import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  title: "Design System/Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}  />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary", type:"primary", size: "large", icon: <FontAwesomeIcon icon={faExclamationCircle} /> };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, type: "secondary", label: "Secondary", icon: <FontAwesomeIcon icon={faExclamationTriangle} /> };

export const Plain = Template.bind({});
Plain.args = { label: "Plain", type:"plain", size: "large", icon: <FontAwesomeIcon icon={faInfoCircle} /> };