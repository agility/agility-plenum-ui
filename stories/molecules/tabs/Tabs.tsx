
import React from  "react"
import EmptySectionPlaceholder from "@/stories/organisms/EmptySectionPlaceholder"

export interface ITabsProps {}

const Tabs: React.FC<ITabsProps> = ({}) => {
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

export default Tabs;
