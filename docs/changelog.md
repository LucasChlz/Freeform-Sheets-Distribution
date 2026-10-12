# Versions

## 0.6.0

The package is now titled **Sheet Tailor: Character Sheet Editor**, so searching for "sheet editor" or "character sheet" finds it. Only the title changes: the id, layouts, customizations and the manifest URL stay the same.

**Layout editor**

- **Guides.** While you drag or resize, elements snap to the edges and centers of the other elements and of the page, and to even spacing between neighbours. Pink lines show the alignment, blue lines the equal gaps. <kbd>Alt</kbd> ignores the grid and the guides. See [Guides](/guide/layout-editor#guides).
- **Rotation handle.** The round handle above the selected element turns it; with <kbd>Shift</kbd>, by 15° steps. <kbd>[</kbd> and <kbd>]</kbd> turn by 15°, and **Rotation** has a slider. A turned element now resizes along its own sides; before, its box could grow out of all proportion.
- **Selection rectangle.** Drag on an empty spot of the page to select every element it touches.
- **Layers by drag and drop.** Drag a row of **Layers** up or down to change what is in front. **Bring forward** and **Send backward** now pass the next element it overlaps, and a selected element no longer jumps to the front, so what you send back stays behind.
- **Locked elements let clicks through**: a background image locked in place no longer catches every click.
- **Past the edge of the page**, elements show whole in the editor with their handles, and a dashed line marks where the page ends.
- **Move the view** with the right or middle mouse button.
- **Rename a page** by double-clicking its tab, or with the pencil of the page being edited in **Pages**, which now takes you to its name.
- **Outlines and highlight on hover** can be turned off in the top bar.
- **Number fields:** <kbd>↑</kbd>/<kbd>↓</kbd> change the value; with <kbd>Ctrl</kbd> or <kbd>Shift</kbd>, ten steps at a time.
- **A bigger font grows the box** instead of cutting the text.
- **A new image** opens the file browser right away, shows the whole picture and takes its proportions.

**Pages and style**

- **Place the background by dragging:** **Adjust on the page** shows the whole picture with handles, to choose the part that shows or to put a frame's borders on the corners of the page. See [Place the artwork by dragging](/guide/pages-and-backgrounds#place-the-artwork-by-dragging).
- A new background on a page that already has elements keeps the page's size; an empty page still takes the image's size.
- **Background opacity** in **Style** fades only the background color, not the text.
- **×** next to each color field empties it.
- **Use this color for every text on the page**, in **Background and size**.
- Centered roll buttons keep their modifier next to the name.

**Window**

- The Freeform Sheet shows its buttons in the title bar (sheet, token, standard sheet, export...), like the system sheets, instead of behind the ⋮ menu.

**Customize sheet**

- **Importing a Freeform Sheet layout** in **Customize sheet** offers to switch the character to the Freeform Sheet with that layout, instead of saying the file is not a layout. A customization imported in the layout editor says where it goes.
- **Move the artwork as the sheet scrolls (parallax)**, an option of the artwork.
- A customized sheet can be resized from its corner again, also while it is being customized.
- Saving shows one message (it repeated once for each change made before).

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
