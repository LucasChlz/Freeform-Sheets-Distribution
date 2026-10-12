# API and hooks

Sheet Tailor exposes a small API for macros and other modules. The module id is still `freeform-sheets`, so that is how the API is found.

```js
const api = game.modules.get("freeform-sheets").api;
```

The API is available from Foundry's `init` hook on. To use it as soon as it is ready, listen to the `freeformSheets.init` hook, which receives the API itself.

## Functions

| Member | What it does |
| --- | --- |
| `api.version` | API version. Currently `2`: version 2 added the layout templates. |
| `api.getLayout(actor)` | The layout saved on the character, already normalized, or `null` if it uses the generated sheet. |
| `await api.setLayout(actor, layout)` | Normalizes and saves a layout on the character. Returns the saved layout and fires `freeformSheets.layoutSaved`. |
| `await api.clearLayout(actor)` | Deletes the saved layout; the character goes back to the generated sheet. |
| `api.normalizeLayout(data)` | Validates and completes a layout, as on import. See [Layout format](/dev/layout). |
| `api.getLayoutTemplates()` | The layout templates saved in the world, each `{ id, name, system, layout }`. |
| `await api.applyLayoutTemplate(actor, templateId, { keepArtwork })` | Saves a template's layout on the character, like **Apply to this sheet** followed by saving: items are found by type and name and, with `keepArtwork` (on by default), every page keeps the artwork of the character's saved layout. A character with no saved layout takes the template's artwork. Returns the saved layout, or `null` if the template does not exist. |
| `api.getSkin(actor)` | The customization of the system sheet saved on the character, or `null`. |
| `await api.setSkin(actor, skin)` | Validates and saves a customization, as on import. An empty customization removes the current one. |
| `api.normalizeSkin(data)` | Validates and completes a customization. |
| `api.registerAdapter(adapter)` | Registers a system adapter. See [System adapters](/dev/adapters). |
| `api.GenericAdapter` | The base class of adapters. |
| `api.sheetClass` | The Freeform Sheet class (`ActorSheetV2`). |

## Hooks

| Hook | Arguments | When |
| --- | --- | --- |
| `freeformSheets.init` | `(api)` | In Foundry's `init`, right after the API becomes available. |
| `freeformSheets.layoutSaved` | `(actor, layout)` | After a layout is saved, from the editor or through `setLayout`. |

## Where the data lives

| Data | Where |
| --- | --- |
| Freeform Sheet layout | `actor.flags["freeform-sheets"].layout` |
| Customization of the system sheet | `actor.flags["freeform-sheets"].skin` |
| Custom values | `actor.flags["freeform-sheets"].data` |
| Customization templates | world setting `freeform-sheets.skinTemplates` |
| Layout templates | world setting `freeform-sheets.layoutTemplates` |

Prefer the API to touching these flags directly: the API normalizes the data and fires the hooks.

## Examples

Copy the layout of one character to another. Elements linked to items find the other character's items by type and name:

```js
const api = game.modules.get("freeform-sheets").api;
const layout = api.getLayout(game.actors.getName("Vera Kincaid"));
if (layout) await api.setLayout(game.actors.getName("Ana Ribeiro"), layout);
```

Give every character of a folder the Freeform Sheet and the same layout:

```js
const api = game.modules.get("freeform-sheets").api;
const template = api.getLayout(game.actors.getName("Template"));
const folder = game.folders.getName("Party");
if (!template) throw new Error("The Template character has no saved layout.");
for (const actor of folder.contents) {
  await api.setLayout(actor, template);
  await actor.setFlag("core", "sheetClass", "freeform-sheets.FreeformSheet");
}
```

Apply the template "Party sheet" to every character of a folder, each keeping its own artwork:

```js
const api = game.modules.get("freeform-sheets").api;
const template = api.getLayoutTemplates().find((entry) => entry.name === "Party sheet");
if (!template) throw new Error("There is no template called Party sheet.");
for (const actor of game.folders.getName("Party").contents) {
  await api.applyLayoutTemplate(actor, template.id);
  await actor.setFlag("core", "sheetClass", "freeform-sheets.FreeformSheet");
}
```

Log to the console whenever a layout is saved:

```js
Hooks.on("freeformSheets.layoutSaved", (actor, layout) => {
  console.log(`${actor.name}: ${layout.widgets.length} elements on ${layout.pages.length} pages`);
});
```
