# Installation

Sheet Tailor is free and works on Foundry VTT 13 and 14.

## Verified versions

| | Foundry 13 | Foundry 14 |
| --- | --- | --- |
| Foundry VTT | 13.351 | 14.369 |
| D&D 5e | 5.3.3 | 6.0.6 |
| Pathfinder 2e | 7.12.2 | 8.6.0 |
| FateX | 1.5.4 | 1.5.4 |

Any other system works too: fields are linked through the character's data path. See [Other systems](/systems/other).

## Install the module

1. On Foundry's setup screen, open **Add-on Modules** and click **Install Module**.
2. Search for **Sheet Tailor** and click **Install**.
3. If it does not show up in the search, paste this address in the **Manifest URL** field and click **Install**:

```text
https://github.com/LucasChlz/Freeform-Sheets-Distribution/releases/latest/download/module.json
```

## Enable it in your world

1. Join the world as the GM.
2. Open **Game Settings** and click **Manage Modules**.
3. Tick **Sheet Tailor** and save.

From then on, character sheets get the **Customize sheet** button and the **Freeform Sheet (custom layout)** sheet option. The next step is in [First steps](/guide/getting-started).

::: tip Languages
The module's interface is in English and Brazilian Portuguese and follows the language chosen in Foundry.
:::

## Update

Foundry tells you when a new version is out; update it from the module list like any other.

::: info Installed it when it was called Freeform Sheets?
Just update. The module was renamed in version 0.4.2, but its id is still `freeform-sheets`, so layouts, customizations and templates stay where they are.
:::

## Where your data lives

- **Freeform Sheet layouts and customizations** are stored on the character itself. They travel with it when the character is exported, imported or kept in a compendium.
- **Customization templates** that the GM saves are stored in the world.

If the module is disabled, every character goes back to the system's normal sheet. Nothing is deleted: when the module is enabled again, layouts and customizations come back as they were.

## Problems?

See the [FAQ](/guide/faq). If that does not solve it, open an [issue on GitHub](https://github.com/LucasChlz/Freeform-Sheets-Distribution/issues) with your Foundry version, the system and the steps to reproduce the problem, or reach out on [Discord](https://discord.gg/BtCGmbGEWR).
