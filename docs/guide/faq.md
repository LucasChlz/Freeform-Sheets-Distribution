# FAQ

## I don't see the Customize sheet button

- **On the D&D 5e sheet** and other newer sheets, it is in the three-dot menu at the top of the window.
- **You need to own the character.** If the GM chose **GMs only** in [Who can edit sheet layouts](/guide/settings), only the GM sees the button.
- **Check that the module is enabled** in the world, in **Manage Modules**.

## I don't see the ruler and pencil button on the Freeform Sheet

It only shows for those who can edit that character's layout: the owner and the GM, or only the GM with **GMs only**.

## A field does not let me edit it

- The value may be **calculated by the system**, such as an armor class that comes from the armor. It shows read-only; edit the data it comes from.
- The field may be set to **Read-only**, in its options.
- You may not have permission to edit that character.

## An element shows a broken chain in the editor

The item it was linked to no longer exists on the character. Add the item again, with the same name and type, or link the element to another item. See [Data links](/guide/data-links#an-item-of-the-character).

## I imported a layout and some elements are empty

Items are recognized by **type and name**. If the character who received the layout has no item with the same name and type, that element is left without an item. See [Import a layout](/guide/sharing#import-a-layout).

## Players don't see my artwork

- The artwork must be somewhere everyone can reach: inside Foundry's data folder, or at a public internet address.
- Files on your own computer, outside Foundry, only show for you.
- If you shared a layout, remember that **the artwork is not inside the file**. See [Sharing and examples](/guide/sharing).

## I cannot select a part of the sheet in the customizer

Some parts of the sheet change with every update and cannot be stored reliably. Select a bigger block, through the path above the name or with **Bigger block**.

## I moved a block and another block moved with it

Some blocks are positioned by the sheet itself relative to a bigger block. When the bigger block moves, they go along. Move the bigger block instead of the smaller one, or use **Place freely**.

## The customization disappeared

- **Did the character switch sheets?** The customization only applies to the sheet it was made on. Switch back to it and the customization comes back.
- **Was the system updated?** Some parts of the sheet may have changed. Open the customizer and check **Changes** for blocks with the broken chain.

## The sheet is heavy or slow

Very large artwork and videos weigh on everyone who opens the sheet. Use smaller files, prefer WebM to GIF and close the animated sheets you are not using. See [Animated sheets](/guide/animated-sheets#performance).

## I used Freeform Sheets. Do I need to do anything?

No. The module was renamed in version 0.4.2, but its id is still `freeform-sheets`. Update as usual: layouts, customizations and templates stay where they are.

## What happens if I disable the module?

Every character goes back to the system's normal sheet. Nothing is deleted: when the module is enabled again, layouts and customizations come back as they were.

## Does Sheet Tailor work with alternative sheets, such as Tidy 5e Sheets?

The customizer works on character sheets in general, but alternative sheets have not been tested one by one yet. If you find a problem, let us know.

## Where can I get help?

- **On [Discord](https://discord.gg/BtCGmbGEWR)**, in the support channel or by direct message.
- **On GitHub**, by opening an [issue](https://github.com/LucasChlz/Freeform-Sheets-Distribution/issues) with your Foundry version, the system and the steps to reproduce the problem.
