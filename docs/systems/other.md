# Other systems

Sheet Tailor works with any Foundry system, even without dedicated support.

## What works in any system

- **Customize sheet** works on any system's character sheet: the button shows at the top of the window or in its three-dot menu.
- **The Freeform Sheet** opens with a page holding the character's name and portrait and an **Items** tab, with one list per item type they have. The system sheet is the last tab, as always.
- **Any data stored on the character** can be linked to a field, a checkbox or a box track.
- **Formula rolls** work in any system; rolling an item uses the item's own use or roll function, when the system has one, or posts the item to chat.
- **Item lists**, with add, edit and delete.

What you miss without dedicated support are the system's own rolls in the **A roll of the system** list, friendly field names and the complete ready-made pages.

## Linking the fields

1. Open the layout editor and add a **Field**.
2. In **Linked to**, choose **Character data**.
3. In **Data path**, type `system.`: the list suggests **all the data the character stores**, by path.
4. Pick one and check **Current value**.

Repeat for each piece of information on the sheet. For counters with a maximum, such as hit points, a **Box track** linked to a path ending in `.value` uses the `.max` next to it as its number of boxes.

Values the system calculates on its own are not stored on the character, so they don't show in the suggestions and are read-only. More details in [Data links](/guide/data-links).

## Formula rolls

In **Roll**, choose **A dice formula** and write the formula the Foundry way. `@` reads the character's roll data, which each system builds its own way: in many systems it is the `system` data itself, without the `system.` in front. For example, if strength lives in `system.attributes.str.value`, the formula is usually `1d20 + @attributes.str.value`.

To check what `@` sees, open the console with <kbd>F12</kbd> and type `game.actors.getName("Character name").getRollData()`.

## Dedicated support for another system

Developers can add support for any system with an adapter, without changing Sheet Tailor. See [System adapters](/dev/adapters).
