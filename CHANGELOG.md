# Changelog

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
