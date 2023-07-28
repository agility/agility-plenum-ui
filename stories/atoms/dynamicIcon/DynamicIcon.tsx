import * as FA from "react-icons/fa"
import * as SolidIcons from "@heroicons/react/24/solid"
import * as OutlineIcons from "@heroicons/react/24/outline"
import * as TIcons from "@tabler/icons-react"
import { default as cn } from "classnames"

export type FAIconName = keyof typeof FA

export type HeroIconName = keyof typeof SolidIcons | keyof typeof OutlineIcons

export type TablerIconName = keyof typeof TIcons

export type UnifiedIconName = FAIconName | HeroIconName | TablerIconName

export interface IIconProps {
  /** The Icon Name - can be from 'tabler icons', 'heroicons', 'react-icons/fa' or 'custom' */
  name: UnifiedIconName | "custom"
  /** style of the icon */
  type: "solid" | "outline"
  /** option className passed to the wrapper component. */
  className?: string
  /** Description to convey meaning to users who use screen readers. */
  screenReaderLabel?: string
  /** Use a custom SVG*/
  CustomSVGIcon?: JSX.Element
}

function isFAIcon(name: UnifiedIconName | "custom"): name is FAIconName {
  return name in FA
}

function isHeroIcon(name: UnifiedIconName | "custom"): name is HeroIconName {
  return name in SolidIcons || name in OutlineIcons
}

function isTablerIcon(
  name: UnifiedIconName | "custom"
): name is TablerIconName {
  return name in TIcons
}

const DynamicIcon = ({
  name,
  type,
  className,
  screenReaderLabel,
  CustomSVGIcon,
  ...props
}: IIconProps) => {
  const iconStyles = cn(
    "h-5 w-5",
    className ? className : `h-5 w-5 text-gray-400`
  )
  if (name === "custom" && CustomSVGIcon) {
    return <i>{CustomSVGIcon}</i>
  }
  if (isHeroIcon(name)) {
    const Icon = type === "solid" ? SolidIcons[name] : OutlineIcons[name]
    return Icon ? (
      <i aria-hidden={!!screenReaderLabel}>
        <Icon className={iconStyles} />
        {screenReaderLabel && (
          <span className="sr-only">{screenReaderLabel}</span>
        )}
      </i>
    ) : (
      <i></i>
    )
  } else if (isTablerIcon(name)) {
    const Icon = TIcons[name]
    return (
      // @ts-ignore-next-line
      <Icon className={iconStyles} />
    )
  } else if (isFAIcon(name)) {
    const Icon = FA[name]
    return (
      <i {...props}>
        <Icon className={iconStyles} />
      </i>
    )
  } else return <i></i>
}

export default DynamicIcon
