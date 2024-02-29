import React from "react"
import "../lib/tailwind.css"

const Layout = ({ children }) => {
	return (
		<div className="p5 min-w-[320px] font-mulish">
			<div className="flex items-center w-full justify-center">{children}</div>
		</div>
	)
}

export default Layout
