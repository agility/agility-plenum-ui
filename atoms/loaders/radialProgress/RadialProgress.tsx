import React, { useMemo } from "react"
import { default as cn } from "classnames"

type Ran<T extends number> = number extends T ? number : _Range<T, []>
type _Range<T extends number, R extends unknown[]> = R["length"] extends T
  ? R[number]
  : _Range<T, [R["length"], ...R]>
type R5 = Ran<101>

interface IRadialProgressProps extends React.PropsWithChildren {
  /** Percentage value to display */
  inputValue: number
  /** Radius for the circle - Max value of 100 */
  radius: number
  className?: string
}
const RadialProgress: React.FC<IRadialProgressProps> = ({
  inputValue,
  radius,
  children,
  className,
}) => {
  const r = radius / 2

  if (inputValue < 0) {
    inputValue = 0
  }
  if (inputValue > 100) {
    inputValue = 100
  }
  if (radius < 0) {
    radius = 0
  }
  if (radius > 100) {
    radius = 100
  }
  const drawPercentage = useMemo(() => {
    const roundCircum = Math.round(2 * r * Math.PI)
    console.log(roundCircum, "circumference")
    console.log(inputValue, "input value")
    return (inputValue * roundCircum) / 50
  }, [inputValue, r])

  const xyPos = (radius + 2) * -1
  const viewPortXY = (radius + 2) * 2
  return (
    <div
      className={cn(`overflow-visible`, className && className)}
      style={{ height: `${viewPortXY}px`, width: `${viewPortXY}px` }}
    >
      <svg
        viewBox={`${xyPos} ${xyPos} ${viewPortXY} ${viewPortXY}`}
        data-percent={drawPercentage}
        fill="none"
      >
        <circle
          className="-rotate-90 stroke-gray-200 stroke-1"
          cx={0}
          cy={0}
          r={radius}
        ></circle>
        <circle
          strokeDasharray={`${drawPercentage} 999`}
          className="m-1 -rotate-90 stroke-purple-600 stroke-1 transition-all"
          cx={0}
          cy={0}
          r={radius}
        ></circle>
      </svg>
      <div
        className={cn(
          `h-[${viewPortXY}px] w-[${viewPortXY}px] absolute inset-0 flex items-center justify-center overflow-hidden `
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default RadialProgress
