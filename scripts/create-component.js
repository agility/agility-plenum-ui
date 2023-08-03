const fs = require("fs")
const path = require("path")
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

const componentName = process.argv[2]
const destinationDir = process.argv[3]

if (!componentName || !destinationDir) {
	console.error("Please provide a component name and destination directory")
	process.exit(1)
}

// Ensure the component name is in PascalCase
if (!/^[A-Z][A-Za-z0-9]*$/.test(componentName)) {
	console.error("Component name must be in PascalCase")
	process.exit(1)
}

const directoryPath = path.join("stories", destinationDir, componentName)

if (fs.existsSync(directoryPath)) {
	readline.question(`Directory ${directoryPath} already exists. Do you want to overwrite it? (yes/no) `, (answer) => {
		if (answer.toLowerCase() !== "yes") {
			console.log("Operation cancelled")
			readline.close()
			process.exit(1)
		} else {
			createFiles()
			console.log(`Component ${componentName} created successfully at ${directoryPath}`)
			readline.close()
			process.exit(0) // exit successfully
		}
	})
} else {
	createFiles()
	console.log(`Component ${componentName} created successfully at ${directoryPath}`)
	process.exit(0) // exit successfully
}

function createFiles() {
	fs.mkdirSync(directoryPath, { recursive: true })

	const componentContent = `
import React from  "react"
import EmptySectionPlaceholder from "@/stories/organisms/EmptySectionPlaceholder"

export interface I${componentName}Props {}

const ${componentName}: React.FC<I${componentName}Props> = ({}) => {
  return (
   <EmptySectionPlaceholder
			{...{
				icon: {
					icon: "IconCode"
				},
				mutedText: "Coming Soon! 🚧",
				primaryMessage: "We're working on this component. Be sure to check back soon!",
				actions: []
			}}
		/>
  )
};

export default ${componentName};
`
	fs.writeFileSync(path.join(directoryPath, `${componentName}.tsx`), componentContent)

	const storyContent = `
import type { Meta, StoryObj } from "@storybook/react"
import ${componentName}, { I${componentName}Props } from "./${componentName}"

const meta: Meta<typeof ${componentName}> = {
  title: "Design System/${destinationDir}/${componentName}",
  component: ${componentName},
  tags: ["autodocs"],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ${componentName}>
export const Default${componentName}Story: Story = {
	args: {
		
	}
}
`
	fs.writeFileSync(path.join(directoryPath, `${componentName}.stories.tsx`), storyContent)

	const indexContent = `
export { default } from './${componentName}';
export * from './${componentName}';
`
	fs.writeFileSync(path.join(directoryPath, "index.tsx"), indexContent)
}
