import { DynamicIcon } from "./DynamicIcon"
import { default as cn } from "classnames"
import { IDynamicIconProps } from "./DynamicIcon"

interface IIconWithShadowProps extends IDynamicIconProps {}

const IconWithShadow: React.FC<IIconWithShadowProps> = (props) => {
	return (
		<div className="flex flex-col  items-center justify-center ">
			<DynamicIcon {...{ ...props, className: cn("h-12 w-12 text-gray-400") }} outline />
			<div className={cn("mt-2 h-2 w-24 bg-gray-100")} style={{ borderRadius: "40%" }} />
		</div>
	)
}

export default IconWithShadow
