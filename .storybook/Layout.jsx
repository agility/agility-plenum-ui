import React from "react"
import "../lib/tailwind.css"

const Layout = ({ children }) => {
  return (
		<div className="p5 min-w-[320px] h-[100vh] flex flex-col items-center justify-center font-mulish">
			{children}
		</div>
  )
}

export default Layout
