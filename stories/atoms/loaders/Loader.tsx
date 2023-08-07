import React from "react"
import classNames, { default as cn } from "classnames"

export interface ILoaderProps {
	className?: string
}
const Loader: React.FC<ILoaderProps> = ({ className }) => {
  const outerLoaderStyles = cn(
    "rounded-full w-16 h-16 inline-block border-8 animate-spin m-auto",
    className ? className : "border-purple-700 border-r-gray-200"
  )
  return <i className={outerLoaderStyles} role="status" />
}

export default Loader
