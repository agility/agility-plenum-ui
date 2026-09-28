# Changelog

## 2.6.0

**Visual change for every form.** Single-line inputs are now 2px shorter, and focus styles are
thinner and consistent. Check forms that set their own input heights or focus styles.

### Changed: single-line controls are 36px, matching Button

Inputs had no fixed height. `py-2` + `leading-5` + a 1px border made them 38px, while the default
`Button` is `h-9` (36px), so an input next to a button sat 2px taller. The height also changed
depending on whether `@tailwindcss/forms` was loaded and in which order: 22–24px without it, and
42px when a consumer's forms styles loaded after plenum's.

These are now a fixed `h-9` (36px) with `py-0` and the text vertically centred, whatever CSS is loaded:

| Control | Before | After |
| --- | --- | --- |
| `InputField` (and so `TextInput`, including `date` / `datetime-local`) | 38px | 36px |
| `FormInputWithAddons`, `AnimatedLabelInput`, `AnimatedFormInputWithAddons` | 38px | 36px |
| `NestedInputButton` (the add-on button inside the above) | 38px | 36px |
| `TextInputSelect`: input and native `<select>` segment | 38px | 36px |
| `Select`: the bordered wrapper (the input fills it with `h-full`) | 38px | 36px |
| `Combobox` input and chevron | 38px | 36px |
| `DropdownWithMultiSelect` trigger | 38px | 36px |

Add-on segments and nested buttons now match the input, so each combined control is one flush 36px
row. The floating labels in `AnimatedLabelInput` / `AnimatedFormInputWithAddons` moved from
`top-[9px]` to `top-[8px]` to stay centred. `Button`, `ButtonDropdown`, `TextArea` and
`AnimatedLabelTextArea` are unchanged.

`InputField` still appends your `className` after its own classes. If you forced a height (for
example `h-9`) you can remove it now. If you pass vertical padding such as `py-2`, remove it; the
height is fixed, so the padding only shrinks the text area.

### Changed: text inputs and select triggers focus with a single 1px violet-700 border

-   **Text inputs** (`InputField`, `TextInput`, `FormInputWithAddons`, the animated-label inputs,
    `TextInputSelect`, `Combobox`) previously showed about 2px on focus: a 1px violet border plus
    `@tailwindcss/forms`' 1px blue ring. `InputField` already had `focus:ring-0`, but it has the same
    specificity as the forms rule, so it lost whenever the consumer's forms styles loaded after
    plenum's. Focus is now only the 1px `violet-700` border. The ring is removed with
    `focus:!ring-0` and the browser outline with `focus:outline-none`, so this holds with or without
    `@tailwindcss/forms` and regardless of stylesheet order.
-   **`Select`** used a deliberate 2px (`focus-within:border-primary-800 focus-within:ring-1`). It
    now uses the same single 1px `violet-700` border, with `focus-within:ring-0`.
-   **`TextInputSelect`'s `<select>`**, **`Combobox`** and **`NestedInputButton`** used
    `focus:ring-1 focus:ring-purple-500` plus a purple border. They now use the same 1px `violet-700`
    border. `NestedInputButton` and the `DropdownWithMultiSelect` trigger show it for keyboard focus
    only (`focus-visible`).
-   **Error and readonly states keep their red / gray border on focus.** Previously `Select` and
    `Combobox` in error turned purple on focus. `TextInput` and `TextInputSelect` now also set
    `aria-invalid="true"` on the input when `isError` is set.

### Changed: button and toggle focus rings show for keyboard focus only

`Button` (both the `<button>` and `asLink` variants), both halves of `ButtonDropdown`, `Capsule` and
`ToggleSwitch` applied their 2px purple ring on `focus`, `focus-within` and `active`, so it also
appeared on mouse click. The ring is now `focus-visible` only: it shows for keyboard focus (WCAG
2.4.7) but not after a click. `Checkbox` and `Radio` do the same: the forms plugin's `:focus` ring is
zeroed, and a 2px ring shows on `focus-visible`. This also removes some malformed class strings in
the `asLink` danger/warning and `Capsule` danger variants.

### Added

-   Story **Design System / molecules / inputs / Form Control States**: every control in default,
    error and disabled states, keyboard and mouse focus (choose the control in Controls), and an
    input next to a default `Button` in one row.

## 2.5.6

### Fixed — Select no longer opens on focus

**Select no longer opens on focus; opens on click or keyboard activation only.**

Previously `Select` (Headless UI `Combobox` with `immediate`) popped its options open the
moment its input received focus. Tabbing through a form opened every `Select` in turn, and
any consumer that programmatically focused the first field on load opened the dropdown on
page load.

The options now open only on an explicit user action:

-   a pointer click anywhere on the field (the display input or the chevron), or
-   Enter, Space, ArrowDown, ArrowUp or Alt+ArrowDown while the input is focused.

They do **not** open when focus arrives via Tab / Shift+Tab or via `element.focus()` from
code, matching a native `<select>`.

Markup note: the field wrapper is now the Headless `ComboboxButton` rendered as a `<div>`
(carrying Headless's `aria-haspopup` / `aria-expanded` / `aria-controls` / `tabindex="-1"`
attributes), and the chevron is now a visual-only `<span>` rather than a `<button>`. The
`role="combobox"` input, its `readOnly` state, `displayValue`, `onFocus` / `onBlur`
passthrough, `isDisabled`, `isError` and the public `ISelectProps` interface are unchanged.

## 2.5.2

### Changed — Typography class merging (Paragraph, Label, Heading)

**Consumer `className` conflicts now win deterministically.** `Paragraph`, `Label`, and
`Heading` now run their class list through [`tailwind-merge`](https://github.com/dcastil/tailwind-merge)
(via a new shared `cn` helper in `utils/cn.ts`), with your `className` merged last.
Previously the winner of a conflict (e.g. `className="text-gray-100"` against the
default `text-gray-900`) depended on stylesheet order — effectively alphabetical — so
some overrides silently lost. Now a consumer class that targets the same CSS property
as a default always replaces it; no `!text-*` workarounds needed. Non-conflicting
classes are unaffected.

### Fixed — Heading default color

`Heading`'s default class string contained `gray-900` (missing the `text-` prefix),
which was a dead class — headings actually inherited their color from the surrounding
context. It is now `text-gray-900`. **This is a visual change** for any consumer who
relied on `Heading` inheriting a non-gray-900 color from its parent; pass an explicit
text color via `className` to restore the previous appearance (it now reliably wins,
per the change above).

## 2.5.0

### Changed — Button / ButtonDropdown minimum widths

**`Button` now has a `min-w-[150px]` floor — but only for labeled buttons at the default size.**

The floor applies when **both** are true:

-   the button has a non-empty `label` (icon-only buttons are exempt), and
-   no explicit `size="xs"` or `size="sm"` is passed. Passing `size="xs"`/`size="sm"` is
    treated as a deliberate compaction and opts out of the floor. Omitting `size` (which
    still resolves to the `sm` visual style) or passing `md`/`lg`/`xl` keeps the floor.

**`ButtonDropdown` now has a 150px minimum _total_ width** (button portion + divider +
trigger, previously an unreleased 114px floor on the button portion alone). The floor
lives on the wrapper; the button portion `grow`s to fill it. `IButtonDropdownProps`
gains a wrapper-level `className` prop (merged last).

**Class conflicts now resolve in favour of consumer classes.** Both components run
their final class list through [`tailwind-merge`](https://github.com/dcastil/tailwind-merge)
(new dependency), with your `className` merged last. No `!important` is used for the
new widths.

### Migration / override recipes

Audit call sites for anything that must stay narrower than 150px:

-   **Icon-only `Button`** (`label=""` + icon, `w-[30px]`, `w-7`, etc.): no change needed —
    the floor never applies without a label.
-   **Compact toolbar `Button`s** that already pass `size="sm"`/`size="xs"`: no change
    needed — explicit small sizes are exempt.
-   **Any other `Button` that must be narrower**: pass `className="min-w-0"` (or any
    `min-w-*` of your choosing) — consumer `min-w-*`/`max-w-*` always wins over the
    default via tailwind-merge.
-   **`ButtonDropdown` that must be narrower than 150px total**: pass the new wrapper
    prop `className="min-w-0"`. Existing `button.className` values such as
    `"max-w-[122px]"` continue to cap the button portion and now reliably win over the
    internal defaults (they are merged after them). Recommended compact recipe:

    ```tsx
    <ButtonDropdown
        className="min-w-0"
        button={{ label: "New Page", size: "sm", className: "max-w-[122px]" }}
        dropDown={...}
    />
    ```

### Notes

-   Without a wrapper `min-w-0`, a `button.className` max-width caps the button portion
    but the control still reserves 150px total — pass both when space is tight.
-   The `asLink` render branch gets the same conditional floor and tailwind-merge
    behaviour as the `<button>` branch.
