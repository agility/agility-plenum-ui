
import React from  "react"
import EmptySectionPlaceholder from "@/stories/organisms/EmptySectionPlaceholder"

export interface ICardLayoutProps {}

const CardLayout: React.FC<ICardLayoutProps> = ({}) => {
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

export default CardLayout;
