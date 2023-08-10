import React, { FC } from "react"

export interface IInputCounterProps {
	/** Counter limit */
	limit: number | undefined
	/** Counter current number */
	current: number
}

/** Primary UI component for user interaction */
const InputCounter: FC<IInputCounterProps> = ({ current = 0, limit }) => {
	return (
		<div className="mt-1 text-center text-sm text-gray-500 flex gap-1">
			<div className="currentCount">{current}</div>
			{(limit || 0) > 0 && (
				<>
					<div>/</div>
					<div className="limitCount">{limit}</div>
				</>
			)}
		</div>
	)
}
export default InputCounter
