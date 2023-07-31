import React, { useEffect, useState } from "react"
import { default as cn } from "classnames"
import { Switch } from "@headlessui/react"
import DynamicIcon, { IIconProps, UnifiedIconName } from "@/stories/atoms/icons/DynamicIcon"
export interface IToggleSwitchProps {
  isChecked: boolean
  onChange: (isChecked: boolean) => void
  label?: {
    text: string | JSX.Element
    className?: string
    xPosition?: "left" | "right"
  }
  screenReaderLabel: string
  name: string
  id: string
  variant: "base" | "short"
  withIcon?: IIconProps
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = ({
  isChecked,
  onChange,
  label,
  screenReaderLabel,
  name,
  id,
  variant = "base",
  withIcon,
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked)
  useEffect(() => setChecked(isChecked), [isChecked])

  return (
    <Switch.Group as={"div"} className={"flex items-center gap-2"}>
      {label && label.xPosition === "left" && (
        <Switch.Label className={label.className}>{label.text}</Switch.Label>
      )}
      <Switch
        name={name}
        id={id}
        checked={checked}
        onChange={(v: boolean) => {
          onChange(v)
          setChecked(v)
        }}
        className={cn(
          { "w-9 h-4": variant === "short", " h-6 w-11": variant === "base" },
          checked ? "bg-purple-600" : "bg-gray-200",
          "relative inline-flex items-center rounded-full focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2  focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2  active:ring-2 active:ring-purple-600 active:ring-offset-2"
        )}
      >
        <span className="sr-only">{screenReaderLabel}</span>
        <span
          className={cn(
            checked ? "translate-x-[22px]" : "translate-x-[2px]",
            {
              "border border-gray-200 translate-x-0": variant === "short",
              "!translate-x-[22px]": checked && variant === "short",
            },
            " h-5 w-5 transform rounded-full bg-white transition shadow-sm drop-shadow flex items-center justify-center"
          )}
        >
          {withIcon && (
            <DynamicIcon {...withIcon} className={"text-gray-400 m-[2px]"} />
          )}
        </span>
      </Switch>
      {label && label.xPosition === "right" && (
        <Switch.Label className={label.className}>{label.text}</Switch.Label>
      )}
    </Switch.Group>
  )
}

export default ToggleSwitch
