# Versions

## 0.5.0

- **Layout templates in the world.** The GM saves a Freeform Sheet layout as a template for everyone, and each player applies it to their own sheet from the **Layout** section of the editor. With **Keep this sheet's artwork** on, every page keeps the artwork it has and the elements are resized to it; this works when importing a layout file too. See [One layout for several characters](/guide/sharing#one-layout-for-several-characters).
- **API:** `getLayoutTemplates` and `applyLayoutTemplate`, to apply a template to many characters with a macro (API version 2).
- **Sheets in their own window.** The Freeform Sheet, the **Standard Sheet** tab, **Customize sheet** and the layout editor now work in a separate browser window: with **Detach Window** on Foundry 14 and with the PopOut! module on Foundry 13. Before, the Standard Sheet tab stayed behind in the main window, dragging in the editor did nothing, and changes to a customization did not reach the sheet.
- **Tidy 5e Sheets:** tested on Foundry 13 and 14. **Customize sheet** works on Tidy's sheets, and with Tidy as the character sheet the **Standard Sheet** tab shows it with its edit lock.
- **D&D 5e 6:** speed fields can be edited again.
- The Pathfinder 2e sorcerer example no longer comes with the module.

## 0.4.3

- **Documentation button** next to the Discord button: at the bottom of the layout editor and of the customizer, and in **Configure Settings** → **Sheet Tailor**. It opens this documentation, in Portuguese when Foundry runs in Portuguese.
- The module's manifest now links the documentation, the versions and the issue tracker.

## 0.4.2

- **Freeform Sheets is now Sheet Tailor.** Another module in the Foundry package list was already called Freeform Sheets. Only the name changes: the id is still `freeform-sheets`, so layouts, customizations, templates, the API and the install address stay the same, and updating is all it takes.
- **Discord button** at the bottom of the layout editor and of the customizer, and in **Configure Settings** → **Sheet Tailor**.

## 0.4.1

- **Verified on Foundry 14** (14.369) with D&D 5e 6.0.6, Pathfinder 2e 8.6.0 and FateX 1.5.4, and again on Foundry 13 (13.351).
- **D&D 5e 6 fix:** the legendary action and resistance pips of NPCs were not saved.

## 0.4.0

- **D&D 5e support**, for characters and NPCs: the complete Freeform Sheet, with the tabs of the dnd5e sheet, the system's own rolls and actions, item use, spells and slots, advancement when classes, species and backgrounds are dropped, and scrolls when spells are dropped on the inventory.
- **Customize sheet** now also works on the dnd5e sheet, from the menu at the top of the window.
- **The Standard Sheet tab** shows ApplicationV2 sheets whole, with the dnd5e header and side tabs.
- First published version.
