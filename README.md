# Sheet Tailor — Distribution

Public distribution repository for **Sheet Tailor** (formerly Freeform Sheets), a Foundry VTT module that makes the character sheet yours: customize the sheet your system already has, or design one from scratch on your own artwork, while everything keeps working.

**Documentation:** https://sheet-tailor.lontrathewizard.workers.dev (English and Brazilian Portuguese). Its source is in [`docs/`](docs/).

## Install

In Foundry, open **Add-on Modules → Install Module** and paste this manifest URL:

```text
https://github.com/LucasChlz/Freeform-Sheets-Distribution/releases/latest/download/module.json
```

Already installed as Freeform Sheets? Just update it: the module id is still `freeform-sheets`, so layouts and customizations are kept.

Works on Foundry VTT v13 and v14 (verified 13.351 and 14.369). D&D 5e (dnd5e 5.3 on v13, 6.0 on v14), Pathfinder 2e (7.12 on v13, 8.6 on v14) and FateX (1.5.4) have dedicated support; any other system works through data-path binding.

Release assets contain only the Foundry runtime (`scripts`, `styles`, `lang`), the example layouts with their artwork, `module.json` and `LICENSE`. Development files, tests and internal documentation are not included.

## Features

- **Customize the sheet you already use.** Click **Customize sheet** on the D&D 5e, Pathfinder 2e, FateX or any other system sheet, drag its blocks where you want them, resize or hide them, and put an image, GIF or video behind it. It stays the system's own sheet, so rolls, fields and drag and drop keep working. The GM can save a customization as a template for every player.
- **Or design a sheet from scratch** on your own artwork: place every field, box track, roll button, portrait and item list exactly where you drew it.
- **Complete from the first click.** A freeform sheet starts with everything the system sheet has, split into pages like its tabs, and the system's own sheet is the last tab of the same window.
- **D&D 5e:** details, inventory, features, spells, effects and biography pages for characters and NPCs. Checks, saves, skills, initiative, death saves, hit dice, rests, item use and spell slots go through the dnd5e system, and classes dropped on a page go through its advancement.
- **Pathfinder 2e:** character, actions, spells, inventory, feats, effects and biography pages, with strikes and the multiple attack penalty, spellcasting entries and conditions handled by the PF2e system.
- **FateX:** aspects, consequences, skills, stress tracks, stunts and extras on your artwork, with FateX rolls and chat cards.
- Layouts and customizations export and import as JSON. English and Brazilian Portuguese.

## Release integrity

Each release includes:

- `module.json`
- `freeform-sheets-VERSION.zip`
- `freeform-sheets-VERSION.zip.sha256`

The checksum can be used to verify that the downloaded ZIP matches the validated build.

Issues for the distributed module can be reported in this repository.

## License

MIT. The D&D 5e, Pathfinder 2e and FateX systems are © their authors; this module only calls their public functions and ships none of their content.
